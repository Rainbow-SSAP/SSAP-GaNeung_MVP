import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "@common/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["white", "grey"],
      },
    },
    align: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    color: "white",
    align: "left",
    isValid: true,
  },
};

export const InvalidDefaultInput: Story = {
  args: {
    isValid: false,
  },
};

export const GreyRightInput: Story = {
  args: {
    color: "grey",
    align: "right",
  },
};
