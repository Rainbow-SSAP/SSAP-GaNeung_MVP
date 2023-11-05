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

export const ArrowInput: Story = {
  args: {
    placeholder: "위치를 입력해 주세요.",
    color: "white",
    align: "left",
  },
};
