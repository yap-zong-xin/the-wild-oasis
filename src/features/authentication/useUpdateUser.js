import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

const isDemo = import.meta.env.VITE_IS_DEMO;

export function useUpdateUser() {
    const queryClient = useQueryClient();

    const { mutate: updateUser, isLoading: isUpdating } = useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: ({ user }) => {
            if (!isDemo) {
                toast.success("User account successfully updated");
                queryClient.setQueryData(["user"], user);
            }
        },
        onError: (err) => {
            if (!isDemo) {
                toast.error(err.message);
            }
        },
    });

    return { updateUser, isUpdating };
}
