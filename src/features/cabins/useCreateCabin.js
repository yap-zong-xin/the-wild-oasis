import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

const isDemo = import.meta.env.VITE_IS_DEMO;

export function useCreateCabin() {
    const queryClient = useQueryClient();

    const { mutate: createCabin, isLoading: isCreating } = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
            if (!isDemo) {
                toast.success("New cabin successfully created");
                queryClient.invalidateQueries({ queryKey: ["cabins"] });
            }
        },
        onError: (err) => toast.error(err.message),
    });

    return { isCreating, createCabin };
}
