import React, { ChangeEvent, ReactElement } from "react";

type Props = {
    id?: string;
    name?: string;
    type: string;
    value?: string;
    maxLength?: number;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    checked?: boolean;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    readOnly?: boolean;
}

const Input = (props: Props): ReactElement => {
    const inputClassNames = ['form-control', 'p-relative'];

    if (props.className) {
        inputClassNames.push(props.className);
    }

    return (
        <input
            checked={props.checked === true}
            required={props.required === true}
            id={props.id}
            type={props.type}
            maxLength={props.maxLength}
            className={inputClassNames.join(' ')}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            name={props.name}
            readOnly={props.readOnly}
            disabled={props.disabled}
        />
    );
}

export default Input;
