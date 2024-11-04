import AuthContext from "@/contexts/auth.context";
import AuthService from "@/services/auth.service";
import Service from "@/services/service";
import ProfileResponse from "@/types/response/profile";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const authService = AuthService.getInstance();

export default function AuthProvider() {
    const [profile, setProfile] = useState<ProfileResponse>();

    const loginUsernamePassword = async (username: string, password: string) => {
        const tokenData = await authService.loginBasic({ username, password });
        Service.AuthScheme = "Basic";
        Service.Token = tokenData.token;
    }

    const fetchProfile = async () => {
        
    }

    useEffect(() => {  

    }, []);

    return (
        <AuthContext.Provider value={{ loginUsernamePassword, profile }}>
            <Outlet/>
        </AuthContext.Provider>
    )
}