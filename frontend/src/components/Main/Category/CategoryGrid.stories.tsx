import type { Meta, StoryObj } from "@storybook/react";
import CategoryGrid from "./CategoryGrid";
import { categoryImage } from "../../../assets/categoryImages";

const meta = {
  title: "@common/CategoryGrid",
  component: CategoryGrid,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CategoryGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CategoryGridDefualt: Story = {
  args: {
    categories: [
      { icon: categoryImage.delivery, text: "배달-퀵" },
      { icon: categoryImage.cleaning, text: "청소" },
      { icon: categoryImage.repair, text: "운반·수리 " },
      { icon: categoryImage.accompany_parenting, text: "동행·육아" },
      { icon: categoryImage.pet, text: "펫" },
      { icon: categoryImage.agency, text: "역할대행" },
      { icon: categoryImage.part_time, text: "알바" },
      { icon: categoryImage.bug, text: "벌레 잡기" },
      { icon: categoryImage.other, text: "기타" },
    ],
  },
};
