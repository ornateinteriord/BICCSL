import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import UserContext from "../../context/user/userContext";

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

