import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
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
      <Router>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Story />
          </ThemeProvider>
        </RecoilRoot>
      </Router>
    ),
  ],
};

export default preview;
