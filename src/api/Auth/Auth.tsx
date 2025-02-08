import { useMutation } from "@tanstack/react-query";
import { post } from "../Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useLoginMutation = () => {
  const navigate = useNavigate(); 

  return useMutation({
    mutationFn: async (data: { username: string; password: string }) => {
      return post("/auth/login", data);
    },
    onSuccess: (response) => {
      if (response.success) {
        localStorage.setItem("userRole", response.role);
        window.dispatchEvent(new Event("storage")); // Notify useAuth hook

        toast.success(response.message);
        if (response.role === "USER") {
          navigate("/user/dashboard");
        } else {
          navigate("/admin/dashboard");
        }
      } else if(!response.success) {
        toast.error(response.message)
      } else {
        console.error("Login failed:", response.message);
      }
    },
    onError: (err) => {
      console.error("Login error:", err);
    },
  });
};
