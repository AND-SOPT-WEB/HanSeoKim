import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/loginPage/LoginPage";
import SignUpPage from "./pages/signupPage/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
