import MainLayout from "./components/layout/MainLayout";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Global } from "@emotion/react";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <MainLayout></MainLayout>
    </>
  );
}

export default App;
