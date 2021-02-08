import React, { PropsWithChildren, ReactElement } from "react";

type Props = {
    className?: string;
}

const FormGroup = (props: PropsWithChildren<Props>): ReactElement => {
    return (
        <div className={`form-group d-flex ${props.className || ''}`}>
            {props.children}
        </div>
    );
}

export default FormGroup;
