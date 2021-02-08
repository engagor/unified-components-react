import React, { PropsWithChildren, ReactElement } from 'react';

type Props = {
    value: string;
    disabled?: boolean;
}

const Option = (props: PropsWithChildren<Props>): ReactElement => {
    return (
        <option value={props.value} disabled={props.disabled}>{props.children}</option>
    );
}

export default Option;
