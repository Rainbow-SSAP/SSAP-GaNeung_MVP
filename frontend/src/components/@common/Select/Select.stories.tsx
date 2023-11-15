import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { categories } from "../../../constants/errand";

const meta = {
  title: "@common/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectDefualt: Story = {
  args: {
    options: categories,
  },
};
