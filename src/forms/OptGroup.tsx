import React, { PropsWithChildren, ReactElement } from 'react';

type Props = {
    label: string;
}

const OptGroup = (props: PropsWithChildren<Props>): ReactElement => {
    return (
        <optgroup label={props.label}>
            {props.children}
        </optgroup>
    );
}

export default OptGroup;
