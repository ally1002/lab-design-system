import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
    title: 'Component/Button',
    component: Button,
    args: {
        asChild: false,
        children: 'Create Account',
    },
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
