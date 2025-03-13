import { classnames, mergeEventHandlers, mergeRefs } from '@nicoknoll/utils';
import React, { useRef } from 'react';
import setNativeInputValue from '../utils/setNativeInputValue.ts';
import Widget, { useWidgetState, WidgetProps } from './Widget.tsx';
import { parseTime, Time } from '@internationalized/date';
import { useTimeFieldState } from '@react-stately/datepicker';
import { useTimeField } from '@react-aria/datepicker';
import { ChevronDownIcon, XIcon } from 'lucide-react';
import { DateSegment } from './DateInput.tsx';

interface TimeInputProps extends React.ComponentPropsWithRef<'input'> {
    showSeconds?: boolean;
    inputClassName?: string;
    locale?: string;
    hideClear?: boolean;
}

const TimeInput = ({
    ref,
    controls,
    className,
    inputClassName,
    hideClear,
    disabled,
    readOnly,
    required,
    name,
    showSeconds,
    locale = 'de',
    ...props
}: TimeInputProps & WidgetProps) => {
    const nativeRef = useRef<HTMLInputElement>(null);
    const fieldRef = useRef<HTMLDivElement>(null);

    const [value, onChange] = useWidgetState('', props.value, props.onChange);

    const handleClear = (e: React.MouseEvent) => {
        setNativeInputValue(nativeRef.current!, '');
        fieldState.setValue(null);

        e.preventDefault();
        e.stopPropagation();

        nativeRef?.current?.focus();
    };

    const timeFieldProps = {
        'aria-label': 'date',
        isDisabled: disabled,
        isRequired: required,
        onChange: (value: Time | null) => {
            if (disabled) return;
            if (nativeRef.current) {
                setNativeInputValue(nativeRef.current, value ? value.toString() : '');
            }
        },
        value: value ? parseTime(value.toString()) : null,
        granularity: (!showSeconds ? 'minute' : 'second') as 'minute' | 'second',
    };

    let fieldState = useTimeFieldState({ ...timeFieldProps, locale });

    let { fieldProps, labelProps } = useTimeField(timeFieldProps, fieldState, fieldRef);

    return (
        <Widget disabled={disabled} className={className}>
            <Widget.Content asChild>
                <div
                    {...fieldProps}
                    ref={fieldRef}
                    onClick={mergeEventHandlers(labelProps.onClick, fieldProps.onClick)}
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
                    type="time"
                    {...props}
                    value={value}
                    onChange={onChange}
                    tabIndex={-1}
                    onFocus={() => fieldRef.current?.focus()}
                    disabled={disabled}
                    required={required}
                />
            </Widget.Native>
        </Widget>
    );
};

export default TimeInput;
