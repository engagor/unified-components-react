// Forms.stories.tsx

import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";

import Alert, {AlertProps} from "../alerts/Alert";
import Button from "../buttons/Button";
import ButtonGroup from "../buttons/ButtonGroup";

export default {
    title: 'Alert',
    component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) =>
    <Alert {...args}>
        <p>Are you sure?</p>
        <ButtonGroup>
            <Button mode='danger' className='mr-8' type='button'>Yes</Button>
            <Button mode='secondary' type='button'>Cancel</Button>
        </ButtonGroup>
    </Alert>;

export const Danger = Template.bind({});

Danger.args = {
    mode: 'danger',
};
