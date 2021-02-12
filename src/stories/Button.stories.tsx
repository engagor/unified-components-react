import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";

import '../css/form.css';
import Button, {ButtonProps} from "../buttons/Button";

export default {
    title: 'Button',
    component: Button,
    args: {
        mode: 'primary',
        size: 'normal',
        type: 'button',
    },
} as Meta;

const TemplateButton: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Default = TemplateButton.bind({});
export const Primary = TemplateButton.bind({});
export const Secondary = TemplateButton.bind({});
export const Danger = TemplateButton.bind({});

export const Small = TemplateButton.bind({});

Default.args = { mode: 'default' };
Primary.args = { mode: 'primary' };
Secondary.args = { mode: 'secondary' };
Danger.args = { mode: 'danger' }

Small.args = { mode: 'primary', size: 'small' };
