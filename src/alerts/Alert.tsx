import React, { PropsWithChildren, ReactElement } from "react";

export type AlertProps = {
    mode: 'danger' | 'error';
    className?: string;
};

const stylesPerMode: Record<string, Record<string, string[]>> = {
    danger: {
        base: [
            'bg-warning-400',
            'text-white',
            'text-white',
        ],
    },
    error: {
        base: [
            'bg-primary-color-400',
            'border-primary-color-400',
            'text-white',
        ],
    },
}

const Alert = (props: PropsWithChildren<AlertProps>): ReactElement => {

    const alertClasses = [
        'd-flex',
        'flex-direction-column',
        'p-24',
        ...stylesPerMode[props.mode].base
    ];

    return (
        <div {...props} className={`${alertClasses.join(' ')} ${props.className || ''}`}>
            {props.children}
        </div>
    );
}

export default Alert
