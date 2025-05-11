import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextInputProps } from '@/widgets/FileInput.tsx';
import { CheckboxGroup, RadioGroup, Switch, TextInput, ToggleButton, Widget } from '@/widgets';
import {
    BooleanField,
    DateField,
    DateTimeField,
    FileField,
    IntegerField,
    MultiSelectField,
    SelectField,
    StringField,
    TextField,
} from '@/fields';
import { Option } from '@/widgets/Select.tsx';
import { Form } from '@/forms';
import Button from '@/misc/Button.tsx';
import TimeField from '@/fields/TimeField.tsx';

const PasswordInput = (props: TextInputProps) => {
    const [visible, setVisible] = useState(false);
    return (
        <TextInput
            type={visible ? 'text' : 'password'}
            controls={
                <Widget.ControlButton onClick={() => setVisible(!visible)} key="togglePasswordVisible">
                    {visible ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                </Widget.ControlButton>
            }
            placeholder="••••••••••••••"
            {...props}
        />
    );
};

const MaxLengthTextInput = (props: TextInputProps) => {
    return <TextInput {...props} maxLength={10} />;
};

const Full = (props: any) => {
    const formMethods = useForm({
        defaultValues: {
            file: [
                {
                    name: 'about.png',
                    url: 'https://nico.is/site/templates/dist/images/about.png',
                },
            ],
            name: null,
            password: '',
            date: '2020-01-01T12:12:12Z',
            birthday: '',
            terms: undefined,
            terms2: undefined,
            language: '',
            language2: '',
            language3: '',
            animals: [],
            animals2: [],
            notes: '',
        },
        mode: 'onBlur',
    });

    const LANGUAGE_OPTIONS = [
        { value: 'en', label: 'English' },
        { value: 'de', label: 'Deutsch' },
        { value: 'fr', label: 'Français' },
        { value: 'es', label: 'Español' },
        { value: 'it', label: 'Italiano' },
        // { value: 'pt', label: 'Português' },
        // { value: 'nl', label: 'Nederlands' },
        // { value: 'pl', label: 'Polski' },
        // { value: 'ru', label: 'Русский' },
        // { value: 'zh', label: '中文' },
        // { value: 'ja', label: '日本語' },
        // { value: 'ko', label: '한국어' },
        // { value: 'hi', label: 'हिन्दी' },
        // { value: 'ar', label: 'العربية' },
        // { value: 'fa', label: 'فارسی' },
        // { value: 'ur', label: 'اردو' },
        // { value: 'bn', label: 'বাংলা' },
        // { value: 'te', label: 'తెలుగు' },
        // { value: 'mr', label: 'मराठी' },
        // { value: 'pa', label: 'ਪੰਜਾਬੀ' },
        // { value: 'gu', label: 'ગુજરાતી' },
        // { value: 'kn', label: 'ಕನ್ನಡ' },
        // { value: 'ml', label: 'മലയാളം' },
        // { value: 'si', label: 'සිංහ' },
        // { value: 'th', label: 'ภาษาไทย' },
        // { value: 'id', label: 'Bahasa Indonesia' },
        // { value: 'ms', label: 'Bahasa Melayu' },
        // { value: 'vi', label: 'Tiếng Việt' },
        // { value: 'tr', label: 'Türkçe' },
        // { value: 'cs', label: 'Czech' },
        // { value: 'sv', label: 'Svenska' },
        // { value: 'hu', label: 'Magyar' },
        // { value: 'ro', label: 'Român' },
        // { value: 'el', label: 'Ελληνικά' },
        // { value: 'bg', label: 'Български' },
        // { value: 'uk', label: 'Украінська' },
    ];

    const ANIMAL_OPTIONS = [
        { value: 'cat', label: 'Cat' },
        { value: 'dog', label: 'Dog' },
        { value: 'bird', label: 'Bird' },
        { value: 'fish', label: 'Fish' },
        { value: 'rabbit', label: 'Rabbit' },
    ];

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState(false);

    const sharedProps = {
        disabled,
        error: error ? 'This field is required' : undefined,
    };

    useEffect(() => {
        setTimeout(() => {
            setDynamicOptions([
                { value: 'cat', label: 'Cat' },
                { value: 'dog', label: 'Dog' },
                { value: 'bird', label: 'Bird' },
                { value: 'fish', label: 'Fish' },
                { value: 'rabbit', label: 'Rabbit' },
                { value: 'hamster', label: 'Hamster' },
                { value: 'guinea-pig', label: 'Guinea pig' },
                { value: 'parrot', label: 'Parrot' },
                { value: 'canary', label: 'Canary' },
                { value: 'goldfish', label: 'Goldfish' },
            ]);
            setMonth(new Date(new Date().setMonth(new Date().getMonth() - 3)));
        }, 2000);
    }, []);

    const [dynamicOptions, setDynamicOptions] = useState<Option[]>([]);
    const [dynamicValue, setDynamicValue] = useState<string[]>(['cat', 'dog', 'bird', 'fish', 'rabbit']);

    // three months ago
    const [month, setMonth] = useState<Date | undefined>(undefined);

    const [testIntegerValue, setTestIntegerValue] = useState<string | undefined>(undefined);
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col gap-16 max-w-[800px] w-full">
                <div className="flex flex-col gap-4">
                    <label>
                        <input type="checkbox" onChange={(e) => setDisabled(e.target.checked)} />
                        <span>Disabled</span>
                    </label>

                    <label>
                        <input type="checkbox" onChange={(e) => setError(e.target.checked)} />
                        <span>Error</span>
                    </label>
                </div>

                <div>
                    <IntegerField
                        label="Age"
                        required
                        {...sharedProps}
                        // @ts-ignore
                        value={testIntegerValue}
                        onChange={(e) => setTestIntegerValue(e.target.value)}
                    />

                    <TimeField
                        label="Time"
                        required
                        {...sharedProps}
                        // @ts-ignore
                        // value={testTimeValue}
                        // onChange={(e) => setTestTimeValue(e.target.value)}
                    />

                    <DateTimeField
                        label="Date"
                        required
                        {...sharedProps}
                        calendarProps={{
                            // fromDate: new Date(),
                            // toDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
                            month: month,
                            onMonthChange: setMonth,
                        }}
                    />

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log(new FormData(e.currentTarget), dynamicValue);
                        }}
                    >
                        <MultiSelectField
                            required
                            label="Animals 2"
                            options={dynamicOptions}
                            // placeholder="Select an animal..."
                            // widget={CheckboxGroup}
                            {...sharedProps}
                            value={dynamicValue}
                            onChange={(e) => {
                                setDynamicValue([e.target.value]);
                            }}
                            name="test"
                        />

                        <button type="submit">Submit</button>
                    </form>

                    <SelectField
                        required
                        label="Animals 2"
                        options={dynamicOptions}
                        {...sharedProps}
                        value=""
                        onChange={(e) => {
                            setDynamicValue([e.target.value]);
                        }}
                    />
                </div>

                <Form
                    formMethods={formMethods}
                    className="flex flex-col gap-6 max-w-[800px] w-full"
                    onSubmit={(values) => {
                        console.log(values);

                        return new Promise((resolve) => {
                            setTimeout(() => {
                                resolve(values);
                            }, 2000);
                        });
                    }}
                >
                    <Form.Field
                        name="name"
                        rules={{
                            required: '123',
                        }}
                    >
                        <IntegerField label="Name" required />
                    </Form.Field>

                    <Form.Field
                        name="date"
                        rules={{
                            required: '123',
                        }}
                    >
                        <DateTimeField label="Password" required />
                    </Form.Field>

                    <h2 className="text-2xl">Controlled</h2>
                    <Form.Field name="file">
                        <FileField
                            label="File"
                            {...sharedProps}
                            previewImage
                            // multiple
                            placeholder={
                                <>
                                    Drag 'n' drop some files or{' '}
                                    <u className="underline cursor-pointer group-hover:text-theme-500 transition-colors">
                                        choose files
                                    </u>
                                </>
                            }
                            onChange={console.warn}
                        />
                    </Form.Field>

                    <Form.Field name="name">
                        <StringField label="Name" required widget={MaxLengthTextInput} {...sharedProps} />
                    </Form.Field>

                    <Form.Field name="password">
                        <StringField label="Password" required widget={PasswordInput} {...sharedProps} />
                    </Form.Field>

                    <Form.Field name="date">
                        <DateTimeField
                            label="Date"
                            required
                            {...sharedProps}
                            calendarProps={{
                                fromDate: new Date(),
                                toDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
                                month: month,
                                onMonthChange: setMonth,
                            }}
                        />
                    </Form.Field>

                    <Form.Field name="birthday">
                        <DateField label="Birthday" {...sharedProps} />
                    </Form.Field>

                    <Form.Field name="age">
                        <IntegerField label="Age" required {...sharedProps} />
                    </Form.Field>

                    <Form.Field name="language">
                        <SelectField
                            label="Language"
                            options={LANGUAGE_OPTIONS}
                            // placeholder="Select a language..."
                            // widget={ToggleButton}
                            searchPlaceholder="Search..."
                            emptyLabel="No language"
                            // required
                            hideCheck
                            allowAddOption
                            onAddOption={(value) => {
                                LANGUAGE_OPTIONS.push({ value, label: value });
                                formMethods.setValue('language', value);
                            }}
                            {...sharedProps}
                        />
                    </Form.Field>

                    <Form.Field name="language2">
                        <SelectField
                            label="Language2"
                            options={LANGUAGE_OPTIONS}
                            // placeholder="Select a language..."
                            widget={ToggleButton}
                            {...sharedProps}
                        />
                    </Form.Field>

                    <Form.Field name="language3">
                        <SelectField
                            label="Language3"
                            options={LANGUAGE_OPTIONS}
                            // placeholder="Select a language..."
                            widget={RadioGroup}
                            {...sharedProps}
                        />
                    </Form.Field>

                    <Form.Field name="animals">
                        <MultiSelectField
                            label="Animals"
                            options={ANIMAL_OPTIONS}
                            // placeholder="Select an animal..."
                            {...sharedProps}
                        />
                    </Form.Field>

                    <Form.Field name="animals2">
                        <MultiSelectField
                            required
                            label="Animals 2"
                            options={ANIMAL_OPTIONS}
                            // placeholder="Select an animal..."
                            widget={CheckboxGroup}
                            {...sharedProps}
                        />
                    </Form.Field>

                    <Form.Field name="terms">
                        <BooleanField
                            label="I agree to the terms and conditions"
                            required
                            helpText="Please read the terms and conditions before agreeing."
                            widget={Switch}
                            reverse
                            {...sharedProps}
                        />
                    </Form.Field>

                    <Form.Field name="terms2">
                        <BooleanField
                            label="I agree to the terms and conditions"
                            helpText="Please read the terms and conditions before agreeing."
                            {...sharedProps}
                        />
                    </Form.Field>

                    <Form.Field name="notes">
                        <TextField label="Notizen" {...sharedProps} />
                    </Form.Field>

                    <Button type="submit" loading={formMethods.formState.isSubmitting}>
                        Submit
                    </Button>
                </Form>

                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl">Uncontrolled</h2>

                    <StringField label="Name" required widget={MaxLengthTextInput} {...sharedProps} />

                    <StringField label="Password" required widget={PasswordInput} {...sharedProps} />

                    <DateField label="Date" id="uncontrolled-date" required {...sharedProps} />

                    <DateField label="Birthday" {...sharedProps} />

                    <IntegerField label="Age" required {...sharedProps} />

                    <SelectField
                        label="Language"
                        options={LANGUAGE_OPTIONS}
                        // placeholder="Select a language..."
                        required
                        {...sharedProps}
                        optionsNote="123"
                    />

                    <SelectField
                        label="Language2"
                        options={LANGUAGE_OPTIONS}
                        // placeholder="Select a language..."
                        widget={ToggleButton}
                        {...sharedProps}
                    />

                    <SelectField
                        label="Language3"
                        options={LANGUAGE_OPTIONS}
                        // placeholder="Select a language..."
                        widget={RadioGroup}
                        {...sharedProps}
                    />

                    <MultiSelectField
                        label="Animals"
                        options={ANIMAL_OPTIONS}
                        // placeholder="Select an animal..."
                        {...sharedProps}
                    />

                    <MultiSelectField
                        label="Animals 2"
                        options={ANIMAL_OPTIONS}
                        // placeholder="Select an animal..."
                        widget={CheckboxGroup}
                        {...sharedProps}
                    />

                    <BooleanField
                        label="I agree to the terms and conditions"
                        required
                        helpText="Please read the terms and conditions before agreeing."
                        widget={Switch}
                        reverse
                        {...sharedProps}
                    />

                    <BooleanField
                        label="I agree to the terms and conditions"
                        helpText="Please read the terms and conditions before agreeing."
                        {...sharedProps}
                    />

                    <TextField id="notes" {...sharedProps} />

                    <Button type="submit">Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default Full;
