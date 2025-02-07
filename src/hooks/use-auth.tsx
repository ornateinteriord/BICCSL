import { useState, useEffect } from "react";

const useAuth = () => {
  const [userRole, setUserRole] = useState<string | null>(localStorage.getItem("userRole"));
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem("userRole"));

  useEffect(() => {
    const handleStorageChange = () => {
      const role = localStorage.getItem("userRole");
      setUserRole(role);
      setIsLoggedIn(!!role);
    };

    // Update state on render
    handleStorageChange();

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return { isLoggedIn, userRole };
};

export default useAuth;
