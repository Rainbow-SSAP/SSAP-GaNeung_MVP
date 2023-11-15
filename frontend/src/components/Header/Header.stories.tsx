import React from "react";
import { action } from "@storybook/addon-actions";
import Header from "./Header";

export default {
  title: "Header",
  component: Header,
};

export const Default = () => (
  <Header
    title="페이지 제목"
    onBack={action("back-icon-clicked")}
    onMenu={action("menu-icon-clicked")}
  />
);
