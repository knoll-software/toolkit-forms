import { FieldProps, SimpleField } from './Field.tsx';
import React from 'react';
import TimeInput from '../widgets/TimeInput.tsx';

const TextField = (props: FieldProps<string> & React.ComponentPropsWithRef<typeof TimeInput>) => (
    <SimpleField widget={TimeInput} {...props} />
);

export default TextField;
