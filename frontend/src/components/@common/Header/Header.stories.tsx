import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: "@common/Header",
  component: Header,
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderDefault: Story = {
  args: {
    // title: "페이지 제목",
  },
};
