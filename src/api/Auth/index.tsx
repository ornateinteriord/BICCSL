import { useMutation } from "@tanstack/react-query";
import { post } from "../Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import TokenService from "../token/tokenService";

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: { username: string; password: string }) => {
      return post("/auth/login", data);
    },
    onSuccess: (response) => {
      if (response.success && response.token) {
       TokenService.setToken(response.token)

        window.dispatchEvent(new Event("storage"));

        toast.success(response.message);

        setTimeout(() => {
          const role = TokenService.getRole();
          

          if (role === "USER") {
            navigate("/user/dashboard");
          } else if (role === "ADMIN") {
            navigate("/admin/dashboard");
          } else {
            console.error("Invalid role:", role);
            toast.error("Invalid user role");
          }
        }, 100);
      } else {
        console.error("Login failed:", response.message);
        toast.error(response.message);
      }
    },
    onError: (err: any) => {
      const errorMessage =
        err.response?.data?.message || "An unknown error occurred during login";
      console.error("Login error:", errorMessage);
      toast.error(errorMessage);
    },
  });
};
