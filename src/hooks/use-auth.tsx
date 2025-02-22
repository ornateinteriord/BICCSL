import { useState, useEffect } from "react";
import TokenService from "../api/token/tokenService";

const useAuth = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const updateAuthState = () => {
      const token = TokenService.getToken();
      const role = TokenService.getRole();
      setIsLoggedIn(!!token);
      setUserRole(role);
    };

    updateAuthState(); // Initial check on mount

    window.addEventListener("storage", updateAuthState);
    return () => window.removeEventListener("storage", updateAuthState);
  }, []);

  return { isLoggedIn, userRole };
};

export default useAuth;
