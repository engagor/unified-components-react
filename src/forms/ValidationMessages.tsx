import React, { ReactElement } from 'react';

export enum ValidationMessageTypes {
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
    SUCCESS = 'success',
}

interface ValidationMessagesProps {
    messages: string[];
    type: ValidationMessageTypes;
    classNames?: string;
}

const ValidationMessages = (props: ValidationMessagesProps): ReactElement => {
    const renderMessages = (): ReactElement => {
        const messagesFormatted = props.messages.map((message): ReactElement => {
            return <li key={message}>{message}</li>
        });

        const classNames = ['list-unstyled', 'mb-0', 'p-24'];

        if (props.type === ValidationMessageTypes.WARNING) {
            classNames.push('bg-warning');
        }

        if (props.type === ValidationMessageTypes.ERROR) {
            classNames.push('bg-danger');
        }

        if (props.type === ValidationMessageTypes.SUCCESS) {
            classNames.push('bg-success');
        }

        if (props.type === ValidationMessageTypes.INFO) {
            classNames.push('bg-info');
        }

        return (
            <ul className={classNames.join(' ')}>
                {messagesFormatted}
            </ul>
        );
    };

    return (
        <div className={`validation-messages text-white rounded-small pt-24 bg-white ${props.classNames || ''}`}>
            {renderMessages()}
        </div>
    );
};

export default ValidationMessages;
