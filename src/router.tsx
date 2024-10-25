import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import Page from "./pages/v2";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "",
                element: <ChatPage/>
            },
            {
                path: "v2",
                element: <Page/>
            },
            {
                path: "login",
                element: <LoginPage/>
            },
        ]
    }
]);

export default router;