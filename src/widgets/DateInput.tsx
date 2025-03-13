import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import Widget, { useWidgetState, WidgetProps } from './Widget.tsx';
import Popover from '../misc/Popover.tsx';
import { ChevronDownIcon, XIcon } from 'lucide-react';
import Calendar from './Calendar.tsx';
import * as chrono from 'chrono-node';
import { classnames, mergeEventHandlers, mergeRefs, useControllableState } from '@nicoknoll/utils';
import setNativeInputValue from '../utils/setNativeInputValue.ts';
import {
    CalendarDate,
    createCalendar,
    getLocalTimeZone,
    parseDate as parseCalendarDate,
} from '@internationalized/date';
import { useDateField, useDateSegment } from '@react-aria/datepicker';
import { useDateFieldState } from '@react-stately/datepicker';

// Function to parse a date string into a Date object
const parseDate = (str: Date | string): Date | null => {
    // "some date" -> Date
    if (str instanceof Date) return str;
    return chrono.de.parseDate(str);
};

const formatDate = (date: Date | string): string => {
    // Date -> YYYY-MM-DD
    if (date?.toString() === 'Invalid Date' || date === '') return '';

    const tzOffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
    const localISOTime = new Date(new Date(date).getTime() - tzOffset).toISOString().slice(0, -1);

    return localISOTime?.split('T')?.[0] || '';
};

export interface DateFieldProps extends React.ComponentPropsWithRef<'input'> {
    defaultValue?: string;
    value?: string;
    calendarProps?: React.ComponentPropsWithRef<typeof Calendar>;
    locale?: string;

    emptyButtonLabel?: string;
    searchPlaceholder?: string;

    hideClear?: boolean;
}

export const DateSegment = ({ segment, state, isPreviousEmpty }: any) => {
    let ref = React.useRef(null);
    let { segmentProps } = useDateSegment(segment, state, ref);

    const now = new Date();

    let displayValue = segment.text;

    if (segment.type == 'day') {
        displayValue = (segment.isPlaceholder ? now.getDate().toString() : segment.text).padStart(2, '0');
    }

    if (segment.type == 'month') {
        displayValue = (segment.isPlaceholder ? (now.getMonth() + 1).toString() : segment.text).padStart(2, '0');
    }

    if (segment.type == 'year') {
        displayValue = (segment.isPlaceholder ? now.getFullYear().toString() : segment.text).padStart(4, '0');
    }

    if (segment.type == 'hour') {
        displayValue = (segment.isPlaceholder ? now.getHours().toString() : segment.text).padStart(2, '0');
    }

    if (segment.type == 'minute') {
        displayValue = (segment.isPlaceholder ? now.getMinutes().toString() : segment.text).padStart(2, '0');
    }

    if (segment.type == 'second') {
        displayValue = (segment.isPlaceholder ? now.getSeconds().toString() : segment.text).padStart(2, '0');
    }

    return (
        <span
            {...segmentProps}
            style={{
                ...segmentProps.style,
                minWidth: segment.maxValue != null ? String(segment.maxValue).length + 'ch' : undefined,
            }}
            onClick={(e) => {
                e.stopPropagation();
                // @ts-ignore
                return segmentProps.onClick?.(e);
            }}
            ref={ref}
            className={classnames(
                'select-none text-right tabular-nums outline-none focus:bg-theme-100',
                segment.isPlaceholder || (segment.type === 'literal' && isPreviousEmpty) ? 'text-neutral-300' : ''
            )}
        >
            {displayValue}
        </span>
    );
};

const DateInput = ({
    ref,
    controls,
    className,
    calendarProps,
    placeholder,
    emptyButtonLabel,
    searchPlaceholder,
    hideClear,
    disabled,
    required,
    locale = 'de',
    ...props
}: DateFieldProps & WidgetProps) => {
    const nativeRef = useRef<HTMLInputElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const handlePopoverOpenChange = (open: boolean) => {
        if (disabled) return;

        setIsPopoverOpen(open);

        if (!open && !value) {
            fieldState.setValue(null);
            setMonth(new Date());
        }
    };

    const handleBlur = (e: any) => {
        if (
            !triggerRef.current?.contains(e.relatedTarget) &&
            !popoverRef.current?.contains(e.relatedTarget) &&
            isPopoverOpen
        ) {
            handlePopoverOpenChange(false);
        }
    };

    const [value, onChange] = useWidgetState('', props.value, props.onChange);

    const handleClear = (e: React.MouseEvent) => {
        setNativeInputValue(nativeRef.current!, '');
        fieldState.setValue(null);
        setMonth(new Date());

        // keep popover closed
        e.preventDefault();
        e.stopPropagation();

        nativeRef?.current?.focus();
    };

    const parsedDate = value ? parseDate(value) || undefined : undefined;

    const [month, setMonth] = useControllableState<Date>(
        parsedDate || new Date(),
        calendarProps?.month,
        calendarProps?.onMonthChange
    );
    useEffect(() => {
        if (parsedDate) setMonth(parsedDate);
    }, [value]);

    const handleDateSelect = (date: Date | null) => {
        if (nativeRef.current) {
            setNativeInputValue(nativeRef.current, date ? formatDate(date) : '');
            setIsPopoverOpen(false);
        }

        nativeRef.current?.focus();
    };

    const dateFieldProps = {
        'aria-label': 'date',
        isDisabled: disabled,
        isRequired: required,
        onFocus: () => {
            if (disabled) return;
            handlePopoverOpenChange(true);
        },
        onChange: (value: CalendarDate | null) => {
            if (disabled) return;
            if (nativeRef.current) {
                setNativeInputValue(nativeRef.current, value ? formatDate(value.toDate(getLocalTimeZone())) : '');
            }
        },
        value: value ? parseCalendarDate(value) : null,
    };

    let fieldState = useDateFieldState({
        ...dateFieldProps,
        locale,
        createCalendar,
    });

    let { fieldProps, labelProps } = useDateField(dateFieldProps, fieldState, triggerRef);

    return (
        <div className="relative">
            <Popover open={isPopoverOpen} onOpenChange={handlePopoverOpenChange} modal={false}>
                <Popover.Trigger asChild>
                    <Widget disabled={disabled} className={className}>
                        <Widget.Content asChild>
                            <div
                                {...fieldProps}
                                onClick={mergeEventHandlers(labelProps.onClick, fieldProps.onClick)}
                                onBlur={mergeEventHandlers(handleBlur, fieldProps.onBlur)}
                                ref={triggerRef}
                                className="select-none px-2 py-1.5 flex-1 min-w-0 bg-transparent placeholder:text-neutral-400 tabular-nums"
                            >
                                {fieldState.segments.map((segment, i) => {
                                    const previousSegment = fieldState.segments[i - 1];
                                    return (
                                        <DateSegment
                                            key={i}
                                            segment={segment}
                                            state={fieldState}
                                            isPreviousEmpty={!previousSegment || previousSegment.isPlaceholder}
                                        />
                                    );
                                })}
                            </div>
                        </Widget.Content>

                        <Widget.Controls>
                            {value && !hideClear ? (
                                <Widget.ControlButton className="!bg-transparent" onClick={handleClear}>
                                    <XIcon />
                                </Widget.ControlButton>
                            ) : (
                                <Widget.ControlButton className="pointer-events-none">
                                    <ChevronDownIcon
                                        className={classnames(
                                            'text-neutral-400 transition-colors',
                                            !disabled && 'group-hover:text-neutral-700'
                                        )}
                                    />
                                </Widget.ControlButton>
                            )}
                            {controls}
                        </Widget.Controls>

                        <Widget.Native>
                            <input
                                ref={mergeRefs(ref, nativeRef)}
                                type="date"
                                {...props}
                                value={value}
                                onChange={onChange}
                                tabIndex={-1}
                                onFocus={() => triggerRef.current?.focus()}
                                disabled={disabled}
                                required={required}
                            />
                        </Widget.Native>
                    </Widget>
                </Popover.Trigger>

                <Popover.Content
                    className="w-auto p-4 min-w-min flex flex-col gap-4"
                    align="start"
                    ref={popoverRef}
                    onEscapeKeyDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    onOpenAutoFocus={(e) => {
                        e.preventDefault();
                    }}
                    onCloseAutoFocus={(e) => {
                        e.preventDefault();
                    }}
                    onFocusOutside={(e) => {
                        e.preventDefault();
                    }}
                >
                    <Calendar
                        mode="single"
                        fixedWeeks
                        showOutsideDays
                        {...calendarProps}
                        // @ts-ignore
                        onSelect={handleDateSelect}
                        selected={parsedDate}
                        className={classnames('p-0', calendarProps?.className)}
                        month={month}
                        onMonthChange={(date) => setMonth(date)}
                    />
                </Popover.Content>
            </Popover>
        </div>
    );
};

export default DateInput;
