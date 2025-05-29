import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface AuthUser {
  user: User;
}

export function useAuth() {
  const { data, isLoading, error } = useQuery<AuthUser>({
    queryKey: ["/api/auth/me"],
    retry: false,
  });

  return {
    user: data?.user,
    isAuthenticated: !!data?.user,
    isLoading,
    error,
  };
}

export function useLogout() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/auth/logout", {});
      if (!response.ok) {
        throw new Error("Logout failed");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.clear();
      toast({
        title: "Goodbye!",
        description: "You've been logged out successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem logging out.",
        variant: "destructive",
      });
    },
  });
}