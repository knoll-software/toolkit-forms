import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import Widget, { useWidgetState, WidgetProps } from './Widget.tsx';
import Popover from '../misc/Popover.tsx';
import { ChevronDownIcon, XIcon } from 'lucide-react';
import Calendar from './Calendar.tsx';
import * as chrono from 'chrono-node';
import { classnames, mergeEventHandlers, mergeRefs, useControllableState } from '@nicoknoll/utils';
import setNativeInputValue from '../utils/setNativeInputValue.ts';
import { DateFieldProps, DateSegment } from './DateInput.tsx';
import Button from '../misc/Button.tsx';
import { createCalendar, getLocalTimeZone, parseAbsolute, ZonedDateTime } from '@internationalized/date';
import { useDateFieldState } from '@react-stately/datepicker';
import { useDateField } from '@react-aria/datepicker';
import { Granularity } from '@react-types/datepicker';
import { range } from 'lodash';

// Function to parse a date string into a Date object
const parseDate = (str: Date | string): Date | null => {
    // "some date" -> Date
    if (str instanceof Date) return str;
    return chrono.de.parseDate(str);
};

const formatDate = (date: Date | string): string => {
    // Date -> YYYY-MM-DDTHH:MM:SS
    if (date?.toString() === 'Invalid Date' || date === '') return '';
    return new Date(date).toISOString();
};

interface DateTimeInputProps extends DateFieldProps {
    hoursLabel?: string;
    minutesLabel?: string;
}

const DateTimeInput = ({
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
    hoursLabel = 'Stunden',
    minutesLabel = 'Minuten',
    ...props
}: DateTimeInputProps & WidgetProps) => {
    const nativeRef = useRef<HTMLInputElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const timeRef = useRef<HTMLInputElement>(null);

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
        if (date && parsedDate) {
            date.setHours(parsedDate.getHours());
            date.setMinutes(parsedDate.getMinutes());
            date.setSeconds(parsedDate.getSeconds());
        }

        if (nativeRef.current) {
            setNativeInputValue(nativeRef.current, date ? formatDate(date) : '');
        }

        if (date) {
            timeRef.current?.focus();
        }
    };

    const dateFieldProps = {
        'aria-label': 'date',
        isDisabled: disabled,
        isRequired: required,
        onFocus: () => {
            if (disabled) return;
            handlePopoverOpenChange(true);
        },
        onChange: (value: ZonedDateTime | null) => {
            if (disabled) return;
            if (nativeRef.current) {
                setNativeInputValue(nativeRef.current, value ? formatDate(value.toDate()) : '');
            }
        },
        value: value ? parseAbsolute(value, getLocalTimeZone()) : null,
        granularity: 'minute' as Granularity,
        hideTimeZone: true,
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
                    className="w-auto min-w-min flex gap-4"
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
                        // @ts-ignore
                        selected={parsedDate}
                        className={classnames('px-0 py-2', calendarProps?.className)}
                        month={month}
                        onMonthChange={(date) => setMonth(date)}
                    />

                    <div className="flex flex-col items-stretch justify-center gap-4 bg-neutral-50 p-3 rounded">
                        <div className="flex flex-col gap-1">
                            <label className="font-medium text-sm mb-0.5 -mt-1">{hoursLabel}</label>
                            {range(0, 4).map((column) => (
                                <div className="flex gap-1">
                                    {range(column * 6, (column + 1) * 6).map((hour) => (
                                        <Button
                                            key={hour}
                                            className={classnames(
                                                'flex-1',
                                                (value ? new Date(value).getHours() === hour : false) &&
                                                    'bg-theme-600 text-white hover:bg-theme-600 !border-transparent'
                                            )}
                                            onClick={() => {
                                                const newDate = value ? new Date(value) : new Date();
                                                newDate.setHours(hour);
                                                newDate.setSeconds(0);

                                                if (nativeRef.current) {
                                                    setNativeInputValue(
                                                        nativeRef.current,
                                                        newDate ? formatDate(newDate) : ''
                                                    );
                                                }

                                                timeRef.current?.focus();
                                            }}
                                        >
                                            {hour.toString().padStart(2, '0')}
                                        </Button>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium text-sm mb-0.5 -mt-1">{minutesLabel}</label>

                            {range(0, 2).map((column) => (
                                <div className="flex gap-1">
                                    {range(column * 30, (column + 1) * 30, 5).map((minute) => (
                                        <Button
                                            key={minute}
                                            className={classnames(
                                                'flex-1',
                                                (value ? new Date(value).getMinutes() === minute : false) &&
                                                    'bg-theme-600 text-white hover:bg-theme-600 !border-transparent'
                                            )}
                                            onClick={() => {
                                                const newDate = value ? new Date(value) : new Date();
                                                newDate.setMinutes(minute);
                                                newDate.setSeconds(0);

                                                if (nativeRef.current) {
                                                    setNativeInputValue(
                                                        nativeRef.current,
                                                        newDate ? formatDate(newDate) : ''
                                                    );
                                                }

                                                timeRef.current?.focus();
                                            }}
                                        >
                                            {minute.toString().padStart(2, '0')}
                                        </Button>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </Popover.Content>
            </Popover>
        </div>
    );
};

export default DateTimeInput;
