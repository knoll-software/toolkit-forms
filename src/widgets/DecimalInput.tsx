import * as React from 'react';
import { useEffect, useRef } from 'react';
import Widget, { useWidgetState, WidgetProps } from './Widget.tsx';
import setNativeInputValue from '../utils/setNativeInputValue.ts';
import { XIcon } from 'lucide-react';
import { classnames, mergeRefs } from '@nicoknoll/utils';

export interface DecimalInputProps extends React.ComponentPropsWithRef<'input'> {
    hideClear?: boolean;
    inputClassName?: string;

    // decimal specific props
    decimalPlaces?: number;
    decimalSeparator?: '.' | ',';
}

const DECIMAL_REGEX = /^-?\d*[.,]?\d*$/;
const INTEGER_REGEX = /^-?\d*$/;

const DecimalInput = ({
    className,
    inputClassName,
    hideClear = false,
    controls,
    widgetRef,
    ref,
    decimalPlaces = 2,
    decimalSeparator = '.',
    min,
    max,
    ...props
}: DecimalInputProps & WidgetProps) => {
    const nativeRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [widgetValue, onChange] = useWidgetState('', props.value, props.onChange);
    const stringValue = widgetValue != null ? widgetValue?.toString() : '';

    const normalizeValue = (value: string) => {
        if (value === '' || value === undefined || value === null) {
            return '';
        }

        // Normalize value to have a dot as decimal separator
        let normalizedValue = value.replace(',', '.').replace('.', decimalSeparator);

        // if last character is a dot remove it
        if (normalizedValue.slice(-1) === decimalSeparator) {
            normalizedValue = normalizedValue.slice(0, -1);
        }

        // validate min and max
        if (min != null && parseFloat(normalizedValue) < parseFloat(min.toString())) {
            normalizedValue = min.toString();
        }
        if (max != null && parseFloat(normalizedValue) > parseFloat(max.toString())) {
            normalizedValue = max.toString();
        }

        // make sure it has the right number of decimal places
        // Split into integer and decimal parts
        const [integerPart, decimalPart = ''] = normalizedValue.split('.');

        // Pad or truncate decimal part to match decimalPlaces
        const formattedDecimal = decimalPart
            .padEnd(decimalPlaces, '0') // Pad with zeros if shorter
            .slice(0, decimalPlaces); // Truncate if longer

        return decimalPlaces > 0 ? `${integerPart}${decimalSeparator}${formattedDecimal}` : integerPart;
    };

    useEffect(() => {
        const normalizedValue = normalizeValue(stringValue);
        if (nativeRef.current && normalizedValue !== stringValue) {
            setNativeInputValue(nativeRef.current, normalizedValue);
        }
    }, [stringValue]);

    const handleClear = () => {
        setNativeInputValue(inputRef.current!, '');
        inputRef.current?.focus();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const inputValue = e.target.value;

        const regex = decimalPlaces > 0 ? DECIMAL_REGEX : INTEGER_REGEX;

        // Allows optional minus at start, digits, and a single dot or comma
        if (regex.test(inputValue)) {
            // Replace comma with dot for consistent output
            const normalizedValue = inputValue.replace(',', '.').replace('.', decimalSeparator);
            const decimalPlacesCount = inputValue.split(decimalSeparator)[1]?.length || 0;

            // also return when no decimal places are allowed and last character is a decimal separator
            if (
                decimalPlacesCount > decimalPlaces ||
                (decimalPlaces === 0 && inputValue.slice(-1) === decimalSeparator)
            ) {
                return;
            }

            if (nativeRef.current) {
                setNativeInputValue(nativeRef.current, normalizedValue);
            }
        } else {
            // keep cursor position in inputRef
            const cursorPosition = e.target.selectionStart || 0;
            setTimeout(() => {
                inputRef.current?.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
            }, 0);
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const normalizedValue = normalizeValue(stringValue);

        if (nativeRef.current && normalizedValue !== stringValue) {
            setNativeInputValue(nativeRef.current, normalizedValue);
        }

        props.onBlur?.(e);
    };

    return (
        <Widget className={className} readOnly={props.readOnly} disabled={props.disabled} ref={widgetRef}>
            <Widget.Content>
                <input
                    ref={inputRef}
                    className={classnames(
                        'px-2 py-1.5 flex-1 min-w-0 bg-transparent placeholder:text-neutral-400 tabular-nums outline-none',
                        inputClassName
                    )}
                    {...props}
                    onBlur={handleBlur}
                    value={stringValue}
                    onChange={handleChange}
                />
            </Widget.Content>

            <Widget.Controls>
                {controls}

                {widgetValue && !hideClear && (
                    <Widget.ControlButton onClick={handleClear}>
                        <XIcon />
                    </Widget.ControlButton>
                )}
            </Widget.Controls>

            <Widget.Native>
                <input
                    ref={mergeRefs(ref, nativeRef)}
                    value={stringValue}
                    onChange={onChange}
                    tabIndex={-1}
                    onFocus={() => inputRef.current?.focus()}
                />
            </Widget.Native>
        </Widget>
    );
};

export default DecimalInput;
