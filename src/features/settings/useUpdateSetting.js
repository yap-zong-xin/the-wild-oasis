import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

const isDemo = import.meta.env.VITE_IS_DEMO;

export function useUpdateSetting() {
    const queryClient = useQueryClient();

    const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
        mutationFn: updateSettingApi,
        onSuccess: () => {
            if (!isDemo) {
                toast.success("Setting successfully edited");
                queryClient.invalidateQueries({ queryKey: ["settings"] });
            }
        },
        onError: (err) => {
            if (isDemo) {
                toast.error("Data mutations are deactivated in this demo app.");
            } else {
                toast.error(err.message);
            }
        },
        enabled: !isDemo,
    });

    return { isUpdating, updateSetting };
}
