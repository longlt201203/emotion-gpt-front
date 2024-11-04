import ProfileResponse from "@/types/response/profile";
import { createContext, useContext } from "react";

export interface AuthContextProps {
    loginUsernamePassword: (username: string, password: string) => Promise<void>;
    profile?: ProfileResponse;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export default AuthContext;

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("Missing AuthProvider!");
    return context;
}