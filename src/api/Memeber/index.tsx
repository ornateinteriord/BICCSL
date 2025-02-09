import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import UserContext from "../../context/user/userContext";
import { toast } from "react-toastify";
import { put } from "../Api";

export const useGetMemberDetails = (userId: string) => {
  const { getUser , setUser } = useContext(UserContext);
  return useQuery({
    queryKey: ["memberDetails", userId], // Cache key
    queryFn: async () => {
      const response = await getUser(userId);
      if (response.success) {
        setUser(response.data);
        return response.data;
      } else {
        throw new Error(response.message || "Failed to fetch member details");
      }
    },
    enabled: !!userId,
  });
};

export const useUpdateMember = () => {
  const userId = localStorage.getItem("userId");
  const queryClient = useQueryClient();
 return useMutation({
     mutationFn: async (data: any) => {
       return put(`/user/member/${userId}`, data);
     },
     onSuccess: (response) => {
       if (response.success) {
          toast.success(response.message);
          queryClient.invalidateQueries({queryKey: ["memberDetails"]});
          return response.data;
       } else {
         console.error("Login failed:", response.message);
       }
     },
     onError: (err: any) => {
       const errorMessage =
         err.response?.data?.message || "An unknown error occurred during login";
       console.error("Login error:", errorMessage);
       toast.error(errorMessage);
     },
   });
}
