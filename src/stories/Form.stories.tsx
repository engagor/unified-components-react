// Forms.stories.tsx

import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import Form from "../forms/Form";
import FieldSet from "../forms/FieldSet";
import Legend from "../forms/Legend";
import FormGroup from "../forms/FormGroup";
import FixedLabel from "../forms/FixedLabel";
import Input from "../forms/Input";

import '../css/form.css';
import Label from "../forms/Label";
import Select from "../forms/Select";
import OptGroup from "../forms/OptGroup";
import Option from "../forms/Option";
import TextArea from "../forms/TextArea";

export default {
    title: 'Forms/Form',
    component: Form,
    subcomponents: { FieldSet, Legend, FormGroup, FixedLabel, Label, TextArea, Input, Select, OptGroup, Option},
} as Meta;

const Template: Story<{}> = (args) =>
    <Form {...args}>
        <FieldSet className='mb-16'>
            <Legend>This is a legend</Legend>
            <FormGroup>
                <FixedLabel htmlFor='text-input'>This is a fixed label</FixedLabel>
                <Input id="text-input" type='text' placeholder='This is a text input' />
            </FormGroup>
            <FormGroup>
                <FixedLabel htmlFor='text-area'>This is a fixed label</FixedLabel>
                <TextArea id='text-area' name='text-area' value=''>Placeholder</TextArea>
            </FormGroup>
            <FormGroup>
                <Label className='mr-8' htmlFor='text-input1'>This is a regular label</Label>
                <Input id="text-input1" type='text' placeholder='This is a text input' />
            </FormGroup>
        </FieldSet>
        <FieldSet className='mb-16'>
            <Legend>This is a legend</Legend>
            <FormGroup>
                <FixedLabel htmlFor='text-input'>This is a fixed label</FixedLabel>
                <Select id='select-id' name='select-name' value='' onChange={() => {}}>
                    <OptGroup label='This is an option groupp'>
                        <Option value='value'>This an option</Option>
                    </OptGroup>
                </Select>
            </FormGroup>
        </FieldSet>
    </Form>;

export const BasicForm = Template.bind({});
