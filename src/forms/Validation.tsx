import React, { PropsWithChildren, ReactElement } from "react";

type Props = {
    errorMessage?: string;
}

const Validation = (props: PropsWithChildren<Props>): ReactElement => {
    const classNames = ['form-validation', 'p-relative', 'd-flex', 'flex-direction-column'];

    let errorMessage = null;

    if (props.errorMessage) {
        errorMessage = <span className="mt-8 color-danger d-inline-block">{props.errorMessage}</span>;
    }

    if (props.errorMessage) {
        classNames.push('form-validation--error')
    }

    return (
        <div className={`${classNames.join(' ') || ''}`}>
            {props.children}
            {errorMessage}
        </div>
    );
}

export default Validation;
