import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { get, put } from "../Api";
import { toast } from "react-toastify";

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

export const useGetAllTickets = ()=>{
  return useQuery({
    queryKey:["AllTickets"],
    queryFn:async () =>{
      const response = await get("/admin/tickets")
      if(response.success){
        return response.tickets;
      }else{
        throw new Error(response.message || "Failed to fetch all transactions");
      }
    }
  })
}

export const useUpdateTickets = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, reply_details }: { id: string; reply_details: string })=> {
     return put(`/admin/ticket/${id}`, { reply_details });
    },
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
        queryClient.invalidateQueries({queryKey:["AllTickets"]})
      
      } else {
        toast.error(response.message);
      }
    },
    onError: (err: any) => {
      const errorMessage =
        err.response?.data?.message || "An unknown error occurred while updating the ticket";
      toast.error(errorMessage);
    },
  });
};

export const getEpinsSummary = () => {
  return useQuery({
      queryKey: ["epinsSummary"],
      queryFn: async () => {
          const response = await get("/admin/epin-summary");
          if (response.success) {
              return response.data;
          } else {
              throw new Error(response.message || "Failed to fetch E-Pin summary");
          }
      }
  });
};

