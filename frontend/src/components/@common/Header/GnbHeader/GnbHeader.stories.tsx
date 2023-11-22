import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { GnbHeader } from "./GnbHeader";

const meta = {
  title: "@common/GnbHeader",
  component: GnbHeader,
  argTypes: {
    leftItems: {
      control: {
        type: "select",
        options: ["back", "home"],
      },
    },
  },
} satisfies Meta<typeof GnbHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GnbHeaderDefault: Story = {
  args: {
    title: "페이지 제목",
    leftItems: "back",
  },
};
