import { classnames, Dynamic } from '@nicoknoll/utils';
import TextInput from '../widgets/TextInput.tsx';
import * as React from 'react';
import { useEffect, useId } from 'react';
import { mergeRefs } from '@nicoknoll/utils';
import isErrorValue from '../utils/isErrorValue.ts';

export interface FieldProps<T> {
    // field component props
    label?: React.ReactNode;
    error?: React.ReactNode | { message: React.ReactNode };
    helpText?: React.ReactNode;
    widget?: any;
    className?: string;

    // re-used field element props
    ref?: (element: HTMLInputElement) => void;
    id?: string;
    name?: string;

    // determine the state
    required?: boolean;
    disabled?: boolean;

    // invalid?: boolean;  -> same as error ?
    // valid?: boolean;

    placeholder?: React.ReactNode | string;

    // default form handling props
    defaultValue?: T;
    value?: T;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

interface FieldRootProps extends React.ComponentPropsWithRef<'div'> {}

const FieldRoot = ({ className, ...props }: FieldRootProps) => {
    return <div className={classnames('flex flex-col gap-1', className)} {...props} />;
};

interface FieldLabelProps extends React.ComponentPropsWithRef<'label'> {
    required?: boolean;
}

const FieldLabel = ({ children, className, ...props }: FieldLabelProps) => {
    return (
        <label className={classnames('text-sm font-medium', className)} {...props}>
            {children} {props.required && <span className="text-red-500">*</span>}
        </label>
    );
};

interface FieldErrorProps extends React.ComponentPropsWithRef<'p'> {}

const FieldError = ({ children, className, ...props }: FieldErrorProps) => {
    if (!children) return null;
    return (
        <p className={classnames('text-sm text-error-500 whitespace-pre-line', className)} {...props}>
            {children}
        </p>
    );
};

interface FieldHelpTextProps extends React.ComponentPropsWithRef<'p'> {}

const FieldHelpText = ({ children, className, ...props }: FieldHelpTextProps) => {
    if (!children) return null;
    return (
        <p className={classnames('text-sm text-neutral-500', className)} {...props}>
            {children}
        </p>
    );
};

interface SimpleFieldProps<T> extends FieldProps<T> {
    isNative?: true;

    // remaining props come from the widget props
    [key: string]: any;
}

const getTextFromReactNode = (node: React.ReactNode): string => {
    if (!node) return '';
    if (typeof node === 'string' || typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(getTextFromReactNode).join('');
    if (React.isValidElement(node) && node.props.children) return getTextFromReactNode(node.props.children);
    return '';
};

export const SimpleField = <T,>({
    ref,
    label,
    error,
    helpText,
    widget,
    className,
    placeholder,
    ...props
}: SimpleFieldProps<T>) => {
    const id = useId();

    const inputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.setCustomValidity((error as string) || '');
        }
    }, [error]);

    return (
        <FieldRoot
            className={className}
            data-error={isErrorValue(error) ? error || '' : undefined}
            data-invalid={isErrorValue(error) ? '' : undefined}
        >
            {label && (
                <FieldLabel required={props.required} htmlFor={props.id || id}>
                    {label}
                </FieldLabel>
            )}

            <Dynamic
                component={widget || TextInput}
                {...props}
                placeholder={placeholder != null ? placeholder : getTextFromReactNode(label)}
                ref={mergeRefs(inputRef, ref)}
                id={props.id || id}
            />

            {isErrorValue(error) ? (
                <FieldError>{(error as any)?.message || error || ''}</FieldError>
            ) : (
                helpText && <FieldHelpText>{helpText}</FieldHelpText>
            )}
        </FieldRoot>
    );
};

export default Object.assign(FieldRoot, {
    Label: FieldLabel,
    Error: FieldError,
    HelpText: FieldHelpText,
});
