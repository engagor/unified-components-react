import React, { FormEvent, PropsWithChildren, ReactElement } from "react";

type Props = {
    method?: string;
    action?: string;
    onSubmit?: (event: FormEvent) => void;
    className?: string;
}

const Form = (props: PropsWithChildren<Props>): ReactElement => {
    return (
        <form
            method={props.method}
            action={props.action}
            onSubmit={props.onSubmit}
            className={`box-sizing-box ${props.className || ''}`}
        >
            {props.children}
        </form>
    );
}

export default Form;
