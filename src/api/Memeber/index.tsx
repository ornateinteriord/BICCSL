import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import UserContext from "../../context/user/userContext";
import { toast } from "react-toastify";
import { get, post, put } from "../Api";
import TokenService from "../token/tokenService";

export const useGetMemberDetails = (userId: string) => {
  const { getUser, setUser } = useContext(UserContext);
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
  const userId = TokenService.getUserId();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      return await put(`/user/member/${userId}`, data);
    },
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
        queryClient.invalidateQueries({ queryKey: ["memberDetails"] });
        return response.data;
      } else {
        console.error("Login failed:", response.message);
      }
    },
    onError: (err: any) => {
      const errorMessage =
        err.response?.data?.message;
      console.error("Login error:", errorMessage);
      toast.error(errorMessage);
    },
  });
};

export const useGetTransactionDetails = () => {
  return useQuery({
    queryKey: ["transactionDetails"],
    queryFn: async () => {
      const response = await get(`/user/transactions`);
      if (response.success) {
        return response.data;
      } else {
        throw new Error(response.message || "Failed to fetch transactions");
      }
    },
  });
};

export const useGetTicketDetails = (userId:string) => {
  return useQuery({
    queryKey: ["TicketDetails", userId],
    queryFn: async () => {
      if (!userId) return [];
      const response = await get(`/user/ticket/${userId}`);
      if (response?.success && Array.isArray(response?.tickets)) {
        return response.tickets;
      } else {
        throw new Error(response.message || "Failed to fetch tickets");
      }
    },
    enabled: !!userId,

  })
}

export const useCreateTicket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (ticketData: any) => {
    return await post("/user/ticket", ticketData);
    },
    onSuccess: (response) => {
      if (response.success){
        toast.success(response.message)
        queryClient.invalidateQueries({ queryKey: ["TicketDetails"] });
        return response.ticket;
      }else{
        throw new Error(response.message)
      } 
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to create ticket. Please try again.");
    },
  });
};


export const getUsedandUnusedPackages = ({memberId , status} : {memberId : string |  null,status : string}) => { 
  return useQuery({
    queryKey: ["usedAndUnusedPackages", memberId, status],
    queryFn: async () => {
      const response = await get("/user/epin" ,{ memberId, status } );
      if (response.success) {
        return response.data;
      } else {
        throw new Error(response.message || "Failed to fetch packages");
      }
    },
  });
}

export const useGetSponsers = () => {
  return useQuery({
    queryKey : ["sponsers"],
    queryFn : async () => {
      const response = await get('/user/sponsers');
      if(response.success){
        return response.sponsoredUsers
      } else {
        throw new Error(response.message || "Failed to fetch sponsers");
      }
    }
  })
}

export const useTransferPackage = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      return await put('/user/transferPackage', data);
    },
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
      } else {
        console.error("Login failed:", response.message);
      }
    },
    onError: (err: any) => {
      const errorMessage =
        err.response?.data?.message;
      console.error("Login error:", errorMessage);
      toast.error(errorMessage);
    },
  });
};

export const useGetPackagehistory = () => {
  const memberId = TokenService.getMemberId();
  return useQuery({
    queryKey : ["package-history", memberId],
    queryFn : async () => {
      const response = await get('/user/package-history');
      if(response.success){
        return response.epins
      } else {
        throw new Error(response.message || "Failed to fetch package history");
      }
    }
  })
}