import React, { PropsWithChildren, ReactElement } from "react";

export type ButtonGroupProps = {
    className?: string;
};

const ButtonGroup = (props: PropsWithChildren<ButtonGroupProps>): ReactElement => {
    return (
        <div className={`d-flex ${props.className || ''}`}>
            {props.children}
        </div>
    );
}

export default ButtonGroup;
