import { Outlet } from "react-router-dom";
import AuthProvider from "./AuthProvider";

export default function RootProvider() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
