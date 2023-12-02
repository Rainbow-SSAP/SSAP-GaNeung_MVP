import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "@common/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["large", "medium", "small"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "grey", "secondary"],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeButton: Story = {
  args: {
    text: "✋ 심부름 지원하기",
    size: "large",
    color: "primary",
  },
};

export const MediumButton: Story = {
  args: {
    text: "❤️‍🔥 심부름 시작하기",
    size: "medium",
  },
};

export const SmallButton: Story = {
  args: {
    text: "버튼",
    size: "small",
    color: "secondary",
    selected: false,
  },
};

export const FixedButton: Story = {
  args: {
    fixed: true,
    text: "🚨 요청하기",
    size: "medium",
  },
};
