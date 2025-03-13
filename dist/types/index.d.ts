import { ControllerProps } from 'react-hook-form';
import { DayPicker } from 'react-day-picker';
import { default as default_2 } from 'react';
import { FieldValues } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import * as React_2 from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import { UseFormReturn } from 'react-hook-form';

declare type BooleanChangeEvent = Omit<default_2.ChangeEvent<HTMLInputElement>, 'target'> & {
    target: Omit<default_2.ChangeEvent<HTMLInputElement>['target'], 'value'> & {
        value: boolean;
    };
};

export declare const BooleanField: ({ label, error, helpText, className, widget, defaultValue, value, onChange, reverse, ...props }: Omit<FieldProps<boolean>, "onChange"> & Omit<default_2.ComponentPropsWithRef<typeof Checkbox>, "onChange"> & {
    reverse?: true;
    onChange?: (event: BooleanChangeEvent) => void;
}) => JSX_2.Element;

declare interface ButtonProps extends Omit<React_2.ComponentPropsWithRef<'button'>, 'onClick'>, Slottable_2 {
    active?: boolean;
    variant?: 'outline' | 'ghost' | 'link';
    onClick?: (e: React_2.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    loading?: boolean;
    onLoadingChange?: (loading: boolean | undefined) => void;
    disabled?: boolean;
}

export declare const Calendar: ({ className, classNames, showOutsideDays, modifiers, modifiersClassNames, ...props }: CalendarProps) => JSX_2.Element;

declare type CalendarProps = React_2.ComponentProps<typeof DayPicker>;

export declare const Checkbox: ({ className, indeterminate, ...props }: CheckboxProps) => JSX_2.Element;

export declare const CheckboxGroup: ({ options, defaultOpen: propsDefaultOpen, open: propsOpen, onOpenChange: propsOnOpenChange, allowAddOption, onAddOption, placeholder, value: propsValue, onChange: propsOnChange, onFocus: propsOnFocus, ...selectProps }: MultiSelectProps) => JSX_2.Element;

declare interface CheckboxProps extends React_2.ComponentPropsWithRef<'input'> {
    indeterminate?: boolean;
}

export declare const DateField: (props: FieldProps<string> & default_2.ComponentPropsWithRef<typeof DateInput>) => JSX_2.Element;

declare interface DateFieldProps extends React_2.ComponentPropsWithRef<'input'> {
    defaultValue?: string;
    value?: string;
    calendarProps?: React_2.ComponentPropsWithRef<typeof Calendar>;
    locale?: string;
    emptyButtonLabel?: string;
    searchPlaceholder?: string;
    hideClear?: boolean;
}

export declare const DateInput: ({ ref, controls, className, calendarProps, placeholder, emptyButtonLabel, searchPlaceholder, hideClear, disabled, required, locale, ...props }: DateFieldProps & WidgetProps) => JSX_2.Element;

export declare const DateTimeField: (props: FieldProps<string> & default_2.ComponentPropsWithRef<typeof DateTimeInput>) => JSX_2.Element;

export declare const DateTimeInput: ({ ref, controls, className, calendarProps, placeholder, emptyButtonLabel, searchPlaceholder, hideClear, disabled, required, locale, hoursLabel, minutesLabel, ...props }: DateTimeInputProps & WidgetProps) => JSX_2.Element;

declare interface DateTimeInputProps extends DateFieldProps {
    hoursLabel?: string;
    minutesLabel?: string;
}

export declare const DecimalField: (props: FieldProps<number> & default_2.ComponentPropsWithRef<typeof DecimalInput>) => JSX_2.Element;

declare const DecimalInput: ({ className, inputClassName, hideClear, controls, widgetRef, ref, decimalPlaces, decimalSeparator, min, max, ...props }: DecimalInputProps & WidgetProps) => JSX_2.Element;

declare interface DecimalInputProps extends React_2.ComponentPropsWithRef<'input'> {
    hideClear?: boolean;
    inputClassName?: string;
    decimalPlaces?: number;
    decimalSeparator?: '.' | ',';
}

export declare const Field: (({ className, ...props }: FieldRootProps) => JSX_2.Element) & {
    Label: ({ children, className, ...props }: FieldLabelProps) => JSX_2.Element;
    Error: ({ children, className, ...props }: FieldErrorProps) => JSX_2.Element | null;
    HelpText: ({ children, className, ...props }: FieldHelpTextProps) => JSX_2.Element | null;
};

declare interface FieldErrorProps extends React_2.ComponentPropsWithRef<'p'> {
}

declare interface FieldHelpTextProps extends React_2.ComponentPropsWithRef<'p'> {
}

declare interface FieldLabelProps extends React_2.ComponentPropsWithRef<'label'> {
    required?: boolean;
}

declare interface FieldProps<T> {
    label?: React_2.ReactNode;
    error?: React_2.ReactNode | {
        message: React_2.ReactNode;
    };
    helpText?: React_2.ReactNode;
    widget?: any;
    className?: string;
    ref?: (element: HTMLInputElement) => void;
    id?: string;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: React_2.ReactNode | string;
    defaultValue?: T;
    value?: T;
    onChange?: (event: React_2.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onBlur?: (event: React_2.FocusEvent<HTMLInputElement>) => void;
}

declare interface FieldRootProps extends React_2.ComponentPropsWithRef<'div'> {
}

export declare const FileField: (props: FieldProps<InputFile[]> & default_2.ComponentPropsWithRef<typeof FileInput>) => JSX_2.Element;

export declare const FileInput: ({ className, controls, onChange, widgetRef, placeholder, previewImage, ref, ...props }: FileInputProps & WidgetProps) => JSX_2.Element;

declare type FileInputChangeEvent = Omit<React_2.ChangeEvent<HTMLInputElement>, 'target'> & {
    target: Omit<React_2.ChangeEvent<HTMLInputElement>['target'], 'value'> & {
        files: FileList | null;
        multiple?: boolean;
    };
};

declare interface FileInputProps extends Omit<React_2.ComponentPropsWithRef<'input'>, 'value' | 'placeholder' | 'accept'> {
    value?: InputFile[];
    placeholder?: React_2.ReactNode;
    maxFiles?: number;
    maxSize?: number;
    minSize?: number;
    accept?: Record<string, string[]>;
    multiple?: boolean;
    onChange?: (event: FileInputChangeEvent) => void;
    previewImage?: boolean;
}

export declare const Form: (<TFieldValues extends FieldValues = FieldValues>({ children, onSubmit, formMethods, onIsSubmittingChange, ...props }: FormProps<TFieldValues>) => JSX_2.Element) & {
    Field: ({ children, ...props }: FormFieldProps) => JSX_2.Element;
    Button: ({ asChild, loading, ...props }: React_2.ComponentPropsWithRef<"button"> & Slottable_2 & {
        loading?: boolean;
    }) => JSX_2.Element;
    Error: ({ asChild, name, ...props }: React_2.ComponentPropsWithRef<"div"> & Slottable_2 & {
        name?: string;
    }) => JSX_2.Element | null;
    ErrorMessage: ({ name }: {
        name?: string;
    }) => string | null;
};

declare interface FormFieldProps extends Omit<ControllerProps, 'render'> {
    children: React_2.ReactElement;
}

declare interface FormProps<TFieldValues extends FieldValues = FieldValues> extends Omit<React_2.ComponentPropsWithRef<'form'>, 'onSubmit'> {
    children: React_2.ReactNode;
    onSubmit: SubmitHandler<TFieldValues>;
    formMethods?: UseFormReturn<TFieldValues>;
    onIsSubmittingChange?: (isSubmitting: boolean) => void;
}

export { FormProvider }

export declare const getNativeSelectValue: (select: HTMLSelectElement) => string | string[];

export declare const HiddenField: (props: FieldProps<string> & default_2.ComponentPropsWithRef<typeof HiddenInput>) => JSX_2.Element;

export declare const HiddenInput: (props: HiddenInputProps) => JSX_2.Element;

declare interface HiddenInputProps extends React_2.ComponentPropsWithRef<'input'> {
}

declare interface InputFile extends File {
    name: string;
    url?: string;
}

export declare const IntegerField: (props: FieldProps<number> & default_2.ComponentPropsWithRef<typeof IntegerInput>) => JSX_2.Element;

export declare const IntegerInput: (props: IntegerInputProps & WidgetProps) => JSX_2.Element;

declare interface IntegerInputProps extends React_2.ComponentPropsWithRef<'input'> {
    hideClear?: boolean;
    inputClassName?: string;
}

export declare const MemorableDateInput: ({ ref, className, disabled, readOnly, required, name, ...props }: MemorableDateProps) => JSX_2.Element;

declare interface MemorableDateProps extends default_2.ComponentPropsWithRef<'input'> {
}

export declare const MultiSelect: ({ widgetRef, controls, options, defaultOpen: propsDefaultOpen, open: propsOpen, onOpenChange: propsOnOpenChange, allowAddOption, onAddOption, placeholder, value: propsValue, onChange: propsOnChange, onFocus: propsOnFocus, ...selectProps }: MultiSelectProps & WidgetProps) => JSX_2.Element;

export declare const MultiSelectField: (props: FieldProps<string[]> & default_2.ComponentPropsWithRef<typeof MultiSelect>) => JSX_2.Element;

declare interface MultiSelectProps extends React_2.ComponentPropsWithRef<'select'> {
    options: (Option_2 | [string, Option_2[]])[];
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    allowAddOption?: boolean;
    onAddOption?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyLabel?: string;
    value?: string[];
    onChange?: (event: React_2.ChangeEvent<HTMLSelectElement>) => void;
    onFocus?: (event: React_2.FocusEvent<HTMLSelectElement>) => void;
}

declare interface Option_2 {
    value: string;
    label?: React_2.ReactNode;
    [key: string]: any;
}

export declare const Radio: ({ disabled, className, ...props }: RadioProps) => JSX_2.Element;

export declare const RadioGroup: ({ options, name, className, disabled, required, emptyLabel, ...props }: SingleSelectProps & {
    onChange: (e: default_2.ChangeEvent<HTMLInputElement>) => void;
}) => JSX_2.Element;

declare interface RadioProps extends default_2.ComponentPropsWithRef<'input'> {
}

export declare const SelectField: (props: FieldProps<string> & default_2.ComponentPropsWithRef<typeof SingleSelect>) => JSX_2.Element;

export declare const setNativeInputValue: (input: HTMLInputElement, value: string) => void;

export declare const setNativeSelectValue: (select: HTMLSelectElement, value: string | string[]) => void;

export declare const setNativeTextareaValue: (textarea: HTMLTextAreaElement, value: string) => void;

export declare const SingleSelect: ({ widgetRef, controls, options, defaultOpen, open, onOpenChange, allowAddOption, onAddOption, placeholder, searchPlaceholder, emptyLabel, hideSearch, hideCheck, hideClear, className, value: propsValue, onChange: propsOnChange, onFocus: propsOnFocus, ...selectProps }: SingleSelectProps & WidgetProps) => JSX_2.Element;

declare interface SingleSelectProps extends React_2.ComponentPropsWithRef<'select'> {
    options: (Option_2 | [string, Option_2[]])[];
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    allowAddOption?: boolean;
    onAddOption?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyLabel?: string;
    hideSearch?: boolean;
    hideCheck?: boolean;
    hideClear?: boolean;
    value?: string;
    onChange?: (event: React_2.ChangeEvent<HTMLSelectElement>) => void;
    onFocus?: (event: React_2.FocusEvent<HTMLSelectElement>) => void;
}

declare interface Slottable_2 {
    asChild?: true;
}

export declare const StringField: (props: FieldProps<string> & default_2.ComponentPropsWithRef<typeof TextInput>) => JSX_2.Element;

export declare const Switch: ({ className, disabled, defaultChecked, ...props }: SwitchProps) => JSX_2.Element;

declare interface SwitchProps extends React_2.ComponentPropsWithRef<'input'> {
}

export declare const TextArea: ({ inputClassName, className, controls, widgetRef, ref, ...props }: TextAreaProps) => JSX_2.Element;

declare interface TextAreaProps extends React_2.ComponentPropsWithRef<'textarea'>, WidgetProps {
    inputClassName?: string;
}

export declare const TextField: (props: FieldProps<string> & default_2.ComponentPropsWithRef<typeof TextArea>) => JSX_2.Element;

export declare const TextInput: ({ className, inputClassName, hideClear, controls, widgetRef, ref, ...props }: TextInputProps & WidgetProps) => JSX_2.Element;

declare interface TextInputProps extends React_2.ComponentPropsWithRef<'input'> {
    hideClear?: boolean;
    inputClassName?: string;
}

export declare const TimeField: (props: FieldProps<string> & default_2.ComponentPropsWithRef<typeof TimeInput>) => JSX_2.Element;

export declare const TimeInput: ({ ref, controls, className, inputClassName, hideClear, disabled, readOnly, required, name, showSeconds, locale, ...props }: TimeInputProps & WidgetProps) => JSX_2.Element;

declare interface TimeInputProps extends default_2.ComponentPropsWithRef<'input'> {
    showSeconds?: boolean;
    inputClassName?: string;
    locale?: string;
    hideClear?: boolean;
}

export declare const ToggleButton: ({ options, name, className, disabled, required, ...props }: SingleSelectProps & {
    options: Option_2[];
    onChange: (e: default_2.ChangeEvent<HTMLInputElement>) => void;
}) => JSX_2.Element;

export { useFormContext }

export declare const useWidgetState: <T, K>(initialValue?: T, controlledValue?: T, onChange?: (event: React_2.ChangeEvent<K>) => void) => [T, (event: React_2.ChangeEvent<K>) => void];

export declare const Widget: (({ asChild, className, disabled, ref, variant, checked, ...props }: WidgetRootProps & Slottable_2) => JSX_2.Element) & {
    Content: ({ asChild, className, ...props }: WidgetContentProps & Slottable_2) => JSX_2.Element;
    Controls: ({ asChild, className, children, ...props }: WidgetControlsProps & Slottable_2) => JSX_2.Element | null;
    ControlButton: ({ asChild, className, active, ...props }: WidgetControlButtonProps & Slottable_2) => JSX_2.Element;
    Native: ({ asChild, className, variant, ...props }: WidgetNativeProps & Slottable_2) => JSX_2.Element;
};

declare interface WidgetContentProps extends React_2.ComponentPropsWithRef<'div'> {
}

declare interface WidgetControlButtonProps extends ButtonProps {
}

declare interface WidgetControlsProps extends React_2.ComponentPropsWithRef<'div'> {
}

declare interface WidgetNativeProps extends React_2.ComponentPropsWithRef<'div'> {
    variant?: 'hidden' | 'inset';
}

export declare interface WidgetProps {
    controls?: React_2.ReactNode;
    widgetRef?: (node: any) => void;
}

declare interface WidgetRootProps extends React_2.ComponentPropsWithRef<'div'> {
    readOnly?: boolean;
    disabled?: boolean;
    variant?: 'input' | 'checkable' | 'button';
    checked?: boolean;
}

export { }
