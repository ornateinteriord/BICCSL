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
        localStorage.setItem("userRole", response?.role);
        if(response?.role === "USER"){
          localStorage.setItem("userId", response?.user?._id); 
        }else {
          localStorage.setItem("userId", response?.user?.username); 
        }
        localStorage.setItem("userData", JSON.stringify(response?.user));

        window.dispatchEvent(new Event("storage"));  

        toast.success(response.message);

        if (response.role === "USER") {
          navigate("/user/dashboard");
        } else {
          navigate("/admin/dashboard");
        }
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
