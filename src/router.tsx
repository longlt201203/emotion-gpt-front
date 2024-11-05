import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/Home";
import RootProvider from "./providers/RootProvider";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootProvider />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <ChatPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "error/:code",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
