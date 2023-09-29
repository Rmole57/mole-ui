import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = (args) => <Button {...args} />;
Solid.args = {
  variant: 'solid',
  text: 'Solid',
};

export const Outlined: Story = (args) => <Button {...args} />;
Outlined.args = {
  variant: 'outlined',
  text: 'Outlined',
};

export const Text: Story = (args) => <Button {...args} />;
Text.args = {
  variant: 'text',
  text: 'Text',
};

export const Disabled: Story = (args) => <Button {...args} />;
Disabled.args = {
  disabled: true,
  text: 'Disabled',
};

export const Small: Story = (args) => <Button {...args} />;
Small.args = {
  size: 'small',
  text: 'Small',
};

export const Medium: Story = (args) => <Button {...args} />;
Medium.args = {
  size: 'medium',
  text: 'Medium',
};

export const Large: Story = (args) => <Button {...args} />;
Large.args = {
  size: 'large',
  text: 'Large',
};
