import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Global } from "@emotion/react";
import App from "./App.tsx";
import { GlobalStyle } from "./styles/GlobalStyle.ts";
import { Theme } from "./styles/theme.ts";
import { ThemeProvider } from "@emotion/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyle}></Global>
      <App />
    </ThemeProvider>
  </StrictMode>
);
