import AuthContext from "@/contexts/auth.context";
import AuthService from "@/services/auth.service";
import Service from "@/services/service";
import ProfileResponse from "@/types/response/profile";
import { PropsWithChildren, useEffect, useState } from "react";

const authService = AuthService.getInstance();

export default function AuthProvider({ children }: PropsWithChildren) {
  const [profile, setProfile] = useState<ProfileResponse>();

  const loginUsernamePassword = async (username: string, password: string) => {
    const tokenData = await authService.loginBasic({ username, password });
    Service.AuthScheme = "Basic";
    Service.Token = tokenData.token;
  };

  const fetchProfile = async () => {};

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ loginUsernamePassword, profile }}>
      {children}
    </AuthContext.Provider>
  );
}
