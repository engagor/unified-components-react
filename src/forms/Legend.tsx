import React, { PropsWithChildren, ReactElement } from "react";

type Props = {
    className?: string;
}

const Legend = (props: PropsWithChildren<Props>): ReactElement => {
    return (
        <legend className={`legend ${props.className || ''}`}>
            {props.children}
        </legend>
    );
}

export default Legend;
