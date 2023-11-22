import React from "react";
import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: "@common/Header",
  component: Header,
  argTypes: {
    title: { control: "text" },
    alignItems: {
      control: {
        type: "select",
        options: ["flex-start", "center", "flex-end"],
      },
    },
    justifyContent: {
      control: {
        type: "select",
        options: ["flex-start", "center", "space-between", "flex-end"],
      },
    },
    titleAlign: {
      control: {
        type: "select",
        option: ["center", "left", "right"],
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderComponent: Story = {
  args: {
    title: "페이지 제목",
    onBack: action("back-icon-clicked"),
    onMenu: action("menu-icon-clicked"),
    alignItems: "center",
    justifyContent: "space-between",
    titleAlign: "center",
  },
};

// export default {
//   title: "Header",
//   component: Header,
//   argTypes: {
//     title: { control: "text" },
//     alignItems: {
//       control: {
//         type: "select",
//         options: ["flex-start", "center", "flex-end"],
//       },
//     },
//     justifyContent: {
//       control: {
//         type: "select",
//         options: ["flex-start", "center", "space-between", "flex-end"],
//       },
//     },
//   },
// };

// const Template = (args: HeaderProps) => <Header {...args} />;

// export const HeaderComponent = Template.bind({});
// HeaderComponent.args = {
//   title: "페이지 제목",
//   onBack: action("back-icon-clicked"),
//   onMenu: action("menu-icon-clicked"),
//   alignItems: "center",
//   justifyContent: "space-between",
// };
