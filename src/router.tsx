import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import LoginPageV2 from "./pages/LoginPageV2";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "",
                element: <ChatPage/>
            },
            {
                path: "login",
                element: <LoginPage/>
            },
            {
                path: "login-v2",
                element: <LoginPageV2/>
            }
        ]
    }
]);

export default router;