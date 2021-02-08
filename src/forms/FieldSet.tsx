import React, { PropsWithChildren, ReactElement } from "react";

type Props = {
    className?: string;
}

const FieldSet = (props: PropsWithChildren<Props>): ReactElement => {
    return (
        <fieldset className={`fieldset ${props.className || ''}`}>
            {props.children}
        </fieldset>
    );
}

export default FieldSet;
