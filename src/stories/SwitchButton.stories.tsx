import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import '../css/components.css';
import Button, { ButtonProps } from '../buttons/Button';
import ButtonGroup, { ButtonGroupProps } from '../buttons/ButtonGroup';
import SwitchButton, { SwitchButtonProps } from '../buttons/SwitchButton';

export default {
    title: 'SwitchButton',
    component: SwitchButton,
    args: {},
} as Meta;

const TemplateSwitchButton: Story<SwitchButtonProps> = (args) => <SwitchButton {...args}/>;

export const Default = TemplateSwitchButton.bind({});
