import React, { ChangeEvent, ReactElement } from "react";

type Props = {
    id: string;
    name: string;
    value: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    readOnly?: boolean;
}

const TextArea = (props: Props): ReactElement => {
    const textAreaClassNames = ['form-control', 'form-textarea', 'p-relative'];

    if (props.className) {
        textAreaClassNames.push(props.className);
    }

    return (
        <textarea
            required={props.required === true}
            id={props.id}
            className={textAreaClassNames.join(' ')}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            name={props.name}
            readOnly={props.readOnly}
        />
    );
}

export default TextArea;
