import MainLayout from "./components/layout/MainLayout";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Global } from "@emotion/react";

function App() {
  return (
    <Global css={GlobalStyle}>
      <MainLayout></MainLayout>
    </Global>
  );
}

export default App;
