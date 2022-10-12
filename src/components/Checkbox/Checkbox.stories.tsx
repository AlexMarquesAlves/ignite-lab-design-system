import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from ".";

export default {
  title: "components/Checkbox",
  component: Checkbox,
  args: {
    children: "Create account",
    size: "md",
  },
  argTypes: {},
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
