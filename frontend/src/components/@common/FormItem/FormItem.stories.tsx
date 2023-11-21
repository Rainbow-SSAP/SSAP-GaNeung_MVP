import type { Meta, StoryObj } from "@storybook/react";
import { FormItem } from "./FormItem";

const meta = {
  title: "@common/FormItem",
  component: FormItem,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["input", "button", "buttonGroup"],
      },
    },
  },
} satisfies Meta<typeof FormItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputType: Story = {
  args: {
    label: "제목",
    type: "input",
    inputProps: {},
  },
};

export const ButtonType: Story = {
  args: {
    label: "선택",
    type: "button",
    buttonProps: {
      text: "선택",
    },
  },
};

export const ButtonGroupType: Story = {
  args: {
    label: "선호 헬퍼 선택",
    type: "buttonGroup",
    buttonGroupProps: {
      options: ["없음", "남성", "여성"],
      selectedOption: "없음",
    },
  },
};
