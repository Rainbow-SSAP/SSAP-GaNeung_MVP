import type { Meta, StoryObj } from "@storybook/react";
import CategoryItem from "./CategoryItem";
import { categoryImage } from "../../../assets/categoryImages";

const meta = {
  title: "@common/CategoryItem",
  component: CategoryItem,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CategoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeliveryRow: Story = {
  args: {
    type: "row",
    icon: categoryImage.delivery,
    text: "배달-퀵",
    onClick: () => alert("Clicked!"),
  },
};

export const Delivery: Story = {
  args: {
    icon: categoryImage.delivery,
    text: "배달-퀵",
    onClick: () => alert("Clicked!"),
  },
};

export const Cleaning: Story = {
  args: {
    icon: categoryImage.cleaning,
    text: "청소",
    onClick: () => alert("Clicked!"),
  },
};

export const Repair: Story = {
  args: {
    icon: categoryImage.repair,
    text: "운반·수리 ",
    onClick: () => alert("Clicked!"),
  },
};

export const Accompany_parenting: Story = {
  args: {
    icon: categoryImage.accompany_parenting,
    text: "동행·육아",
    onClick: () => alert("Clicked!"),
  },
};

export const Pet: Story = {
  args: {
    icon: categoryImage.pet,
    text: "펫",
    onClick: () => alert("Clicked!"),
  },
};

export const Agency: Story = {
  args: {
    icon: categoryImage.agency,
    text: "역할대행",
    onClick: () => alert("Clicked!"),
  },
};

export const Part_time: Story = {
  args: {
    icon: categoryImage.part_time,
    text: "알바",
    onClick: () => alert("Clicked!"),
  },
};

export const Bug: Story = {
  args: {
    icon: categoryImage.bug,
    text: "벌레 잡기",
    onClick: () => alert("Clicked!"),
  },
};

export const Other: Story = {
  args: {
    icon: categoryImage.other,
    text: "기타",
    onClick: () => alert("Clicked!"),
  },
};
