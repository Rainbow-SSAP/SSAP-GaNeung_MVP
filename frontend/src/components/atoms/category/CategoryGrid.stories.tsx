// CategoryGrid.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react";
import CategoryGrid, { CategoryGridProps } from "./CategoryGrid";
import { categoryImage } from "../../../assets/categoryImages";
export default {
  title: "Components/CategoryGrid",
  component: CategoryGrid,
} as Meta;

const Template: Story<CategoryGridProps> = (args) => <CategoryGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories: [
    { icon: categoryImage.delivery, label: "배달-퀵" },
    { icon: categoryImage.cleaning, label: "청소" },
    { icon: categoryImage.repair, label: "운반·수리 " },
    { icon: categoryImage.accompany_parenting, label: "동행·육아" },
    { icon: categoryImage.pet, label: "펫" },
    { icon: categoryImage.agency, label: "역할대행" },
    { icon: categoryImage.part_time, label: "알바" },
    { icon: categoryImage.bug, label: "벌레 잡기" },
    { icon: categoryImage.other, label: "기타" },
  ],
  onCategoryClick: (label) => alert(`Clicked on ${label}!`),
};
