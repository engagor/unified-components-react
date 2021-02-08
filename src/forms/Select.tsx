import React, { ChangeEvent, PropsWithChildren, ReactElement } from 'react';

type Props = {
    id: string;
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
    className?: string;
}

const Select = (props: PropsWithChildren<Props>): ReactElement => {
    const classNames = ['form-control'];

    if (props.className) {
        classNames.push(props.className);
    }

    let disabled = false;
    if (props.disabled) {
        disabled = props.disabled;
    }

    return (
        <select
            className={classNames.join(' ')}
            value={props.value}
            name={props.name}
            id={props.id}
            disabled={disabled}
            onChange={props.onChange}
        >
            {props.children}
        </select>
    );
}

export default Select;
