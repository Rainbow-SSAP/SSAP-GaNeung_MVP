// CategoryItem.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react";
import CategoryItem, { CategoryItemProps } from "./CategoryItem";
import { categoryImage } from "../../../assets/categoryImages";
export default {
  title: "Components/CategoryItem",
  component: CategoryItem,
} as Meta;

const Template: Story<CategoryItemProps> = (args) => <CategoryItem {...args} />;

export const Delivery = Template.bind({});
Delivery.args = {
  icon: categoryImage.delivery,
  label: "배달-퀵",
  onClick: () => alert("Clicked!"),
};

export const Cleaning = Template.bind({});
Cleaning.args = {
  icon: categoryImage.cleaning,
  label: "청소",
  onClick: () => alert("Clicked!"),
};

export const Repair = Template.bind({});
Repair.args = {
  icon: categoryImage.repair,
  label: "운반·수리 ",
  onClick: () => alert("Clicked!"),
};

export const Accompany_parenting = Template.bind({});
Accompany_parenting.args = {
  icon: categoryImage.accompany_parenting,
  label: "동행·육아",
  onClick: () => alert("Clicked!"),
};

export const Pet = Template.bind({});
Pet.args = {
  icon: categoryImage.pet,
  label: "펫",
  onClick: () => alert("Clicked!"),
};

export const Agency = Template.bind({});
Agency.args = {
  icon: categoryImage.agency,
  label: "역할대행",
  onClick: () => alert("Clicked!"),
};

export const Part_time = Template.bind({});
Part_time.args = {
  icon: categoryImage.part_time,
  label: "알바",
  onClick: () => alert("Clicked!"),
};

export const Bug = Template.bind({});
Bug.args = {
  icon: categoryImage.bug,
  label: "벌레 잡기",
  onClick: () => alert("Clicked!"),
};

export const Other = Template.bind({});
Other.args = {
  icon: categoryImage.other,
  label: "기타",
  onClick: () => alert("Clicked!"),
};
