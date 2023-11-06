import React from "react";
import { ThemeProvider } from "styled-components";
import type { Preview } from "@storybook/react";
import theme from "../src/styles/theme";
import GlobalStyle from "../src/styles/globalStyle";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // 스토리북에서 테마를 제공하도록 설정
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
