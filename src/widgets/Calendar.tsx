import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { classnames } from '@nicoknoll/utils';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { de } from 'date-fns/locale';
import SingleSelect from './SingleSelect.tsx';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const mergeClassNames = (defaultClassNames: Record<string, string>, classNames: Record<string, string>) => {
    // merge by key and use classnames() function, add additional keys
    return Object.keys({ ...defaultClassNames, ...classNames }).reduce((acc, key) => {
        return {
            ...acc,
            [key]: classnames(defaultClassNames[key], classNames[key]),
        };
    }, {});
};

const Calendar = ({
    className,
    classNames = {},
    showOutsideDays = true,
    modifiers = {},
    modifiersClassNames = {},
    ...props
}: CalendarProps) => {
    // highlight weekend days
    const defaultModifiers = {
        weekend: { dayOfWeek: [0, 6] },
    };
    const defaultModifiersClassNames = {
        highlighted: 'bg-theme-100',
    };

    return (
        <DayPicker
            locale={de}
            captionLayout="dropdown"
            showOutsideDays={showOutsideDays}
            weekStartsOn={1}
            // default: +/- 5 years
            startMonth={new Date(new Date().getFullYear() - 5, new Date().getMonth())}
            endMonth={new Date(new Date().getFullYear() + 5, new Date().getMonth())}
            modifiersClassNames={mergeClassNames(defaultModifiersClassNames, modifiersClassNames)}
            modifiers={{ ...defaultModifiers, ...modifiers }}
            className={classnames('p-3', className)}
            classNames={mergeClassNames(
                {
                    months: 'flex flex-col relative',
                    month: 'space-y-4 relative',
                    month_caption: 'flex justify-center font-medium text-sm h-9 relative items-center',
                    caption_label: 'text-sm font-medium',
                    dropdowns: 'flex items-center gap-1', // shadow-sm
                    nav: 'space-x-1 flex items-center justify-between h-9 absolute z-10 w-full pointer-events-none px-0.5',
                    button_previous:
                        'pointer-events-auto inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-neutral-300 text-neutral-900 bg-background shadow-sm hover:bg-neutral-100 hover:text-neutral-800 hover:border-neutral-400 h-[2.175rem] w-7 bg-transparent p-0 [aria-disabled="true"]:pointer-events-none [aria-disabled="true"]:opacity-50',
                    button_next:
                        'pointer-events-auto inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-neutral-300 text-neutral-900 bg-background shadow-sm hover:bg-neutral-100 hover:text-neutral-800 hover:border-neutral-400 h-[2.175rem] w-7 bg-transparent p-0 [aria-disabled="true"]:pointer-events-none [aria-disabled="true"]:opacity-50',
                    month_grid: 'w-full border-collapse space-y-1',
                    weekdays: 'flex',
                    weekday: 'text-neutral-500 rounded-md flex-1 font-normal text-[0.8rem]',
                    week: 'flex w-full',
                    day: 'm-px text-center text-sm p-0 relative [&:has([aria-selected])]:bg-neutral-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 h-9 w-9',
                    day_button:
                        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-neutral-100 hover:text-neutral-800 h-9 w-9 p-0 font-normal aria-selected:opacity-100',
                    selected:
                        '!bg-theme-600 !text-white hover:!bg-theme-600 hover:!text-white focus:!bg-theme-600 focus:!text-white rounded-md',
                    today: 'text-theme-600 rounded-md underline decoration-2 underline-offset-4',
                    outside: 'text-neutral-500 opacity-50',
                    disabled: 'text-neutral-500 opacity-50',
                    range_start: 'aria-selected:bg-theme-600 aria-selected:text-white rounded-l-md',
                    range_middle: 'aria-selected:bg-theme-600 aria-selected:text-white rounded-none',
                    range_end: 'aria-selected:bg-theme-600 aria-selected:text-white rounded-r-md',
                    hidden: 'invisible',
                    vhidden: 'hidden',
                },
                classNames
            )}
            components={{
                Chevron: (props) => {
                    if (props.orientation === 'left') {
                        return <ChevronLeftIcon className="h-4 w-4" {...props} />;
                    }
                    return <ChevronRightIcon className="h-4 w-4" {...props} />;
                },
                Dropdown: ({ ...props }) => {
                    const { name, onChange, value } = props;
                    return (
                        <SingleSelect
                            className={classnames(name === 'months' && 'min-w-[6.75rem]', props.className)}
                            onChange={onChange}
                            value={value?.toString()}
                            name={name}
                            options={
                                props.options?.map((option) => ({
                                    value: option.value.toString(),
                                    label: option.label,
                                })) || []
                            }
                            required
                            hideSearch
                            hideCheck
                        />
                    );
                },
            }}
            {...props}
        />
    );
};

export default Calendar;
