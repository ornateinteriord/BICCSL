import { useQuery } from "@tanstack/react-query";
import { get } from "../Api";

export const useGetAllMembersDetails = () =>{
    return useQuery({
        queryKey:["allMembers"],
        queryFn: async() =>{
            const response = await get("/admin/members")
            if(response.success){
                return response.members
            }else{
                throw new Error(response.message || "Failed to fetch members")
            }
        }
    })
}

export const useGetAllTransactionDetails = () => {
  return useQuery({
    queryKey: ["AllTransactionDetails"],
    queryFn: async () => {
      const response = await get("/admin/transactions");
      if (response.success) {
        return response.data;
      } else {
        throw new Error(response.message || "Failed to fetch all transactions");
      }
    },
  });
};
