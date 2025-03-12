import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import Widget, { useWidgetState, WidgetProps } from './Widget.tsx';
import Popover from '../misc/Popover.tsx';
import { ChevronDownIcon, ClockIcon, XIcon } from 'lucide-react';
import Calendar from './Calendar.tsx';
import * as chrono from 'chrono-node';
import { classnames, mergeRefs } from '@nicoknoll/utils';
import setNativeInputValue from '../utils/setNativeInputValue.ts';
import { DateFieldProps, DateSegment } from './DateInput.tsx';
import TimeInput from './TimeInput.tsx';
import Button from '../misc/Button.tsx';
import { createCalendar, getLocalTimeZone, parseAbsolute, ZonedDateTime } from '@internationalized/date';
import { useDateFieldState } from '@react-stately/datepicker';
import { useDateField } from '@react-aria/datepicker';
import { Granularity } from '@react-types/datepicker';

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
    ...props
}: DateFieldProps & WidgetProps) => {
    const nativeRef = useRef<HTMLInputElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const timeRef = useRef<HTMLInputElement>(null);

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const handlePopoverOpenChange = (open: boolean) => {
        if (disabled) return;

        setIsPopoverOpen(open);

        if (!open) {
            if (!value) {
                fieldState.setValue(null);
                setMonth(new Date());
            }
            setTimeout(() => nativeRef.current?.focus(), 0);
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

    const [month, setMonth] = useState<Date>(parsedDate || new Date());
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

    const handleTimeChange = (e: any) => {
        const newDate = value ? new Date(value) : new Date();
        const [hour, minute, second] = e.target.value.split(':');

        newDate.setHours(parseInt(hour));
        newDate.setMinutes(parseInt(minute));
        newDate.setSeconds(parseInt(second));

        if (nativeRef.current) {
            setNativeInputValue(nativeRef.current, newDate ? formatDate(newDate) : '');
        }
    };

    const handleClockButtonClick = () => {
        const newDate = value ? new Date(value) : new Date();
        const now = new Date();

        newDate.setHours(now.getHours());
        newDate.setMinutes(now.getMinutes());
        newDate.setSeconds(now.getSeconds());

        if (nativeRef.current) {
            setNativeInputValue(nativeRef.current, newDate ? formatDate(newDate) : '');
        }
    };

    const timeValue = value
        ? new Date(value).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        : '';

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
        granularity: 'second' as Granularity,
        hideTimeZone: true,
    };

    let fieldState = useDateFieldState({
        ...dateFieldProps,
        locale,
        createCalendar,
    });

    let { fieldProps } = useDateField(dateFieldProps, fieldState, triggerRef);

    return (
        <div className="relative">
            <Popover open={isPopoverOpen} onOpenChange={handlePopoverOpenChange} modal={false}>
                <Popover.Trigger asChild>
                    <Widget disabled={disabled} className={className}>
                        <Widget.Content asChild>
                            <div
                                {...fieldProps}
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
                    className="w-auto min-w-min flex flex-col gap-4"
                    align="start"
                    ref={popoverRef}
                    onEscapeKeyDown={(e) => {
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
                        className="p-0"
                        mode="single"
                        month={month}
                        onMonthChange={(date) => setMonth(date)}
                        selected={parsedDate}
                        // @ts-ignore
                        onSelect={handleDateSelect}
                        fixedWeeks
                        showOutsideDays
                        {...calendarProps}
                    />

                    <div className="flex items-stretch justify-center gap-1 bg-neutral-50 p-3 rounded">
                        <Button variant="ghost" onClick={handleClockButtonClick} className="px-2 !text-theme-500">
                            <ClockIcon />
                        </Button>

                        <TimeInput
                            value={timeValue}
                            onChange={handleTimeChange}
                            name="time"
                            ref={timeRef}
                            className="w-48 px-1.5"
                        />
                    </div>
                </Popover.Content>
            </Popover>
        </div>
    );
};

export default DateTimeInput;
