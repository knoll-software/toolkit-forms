import React from 'react';
import { classnames } from '@nicoknoll/utils';

export interface Slottable {
    asChild?: true;
}

const Slot = ({
    children,
    ...props
}: React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
}) => {
    if (React.isValidElement(children)) {
        return React.cloneElement(children, {
            ...props,
            ...children.props,
            style: {
                ...props.style,
                ...children.props.style,
            },
            className: classnames(props.className, children.props.className),
        });
    }
    if (React.Children.count(children) > 1) {
        React.Children.only(null);
    }
    return null;
};

export default Slot;
