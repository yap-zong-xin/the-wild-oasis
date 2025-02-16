import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // Remove all login data from the cache
      queryClient.removeQueries();
      // { replace: true } is to erase the place we were earlier to ensure the back button works
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
