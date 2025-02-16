import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

const isDemo = import.meta.env.VITE_IS_DEMO;

export function useDeleteBooking() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
        mutationFn: deleteBookingApi,
        onSuccess: () => {
            if (!isDemo) {
                toast.success("Booking successfully deleted");

                queryClient.invalidateQueries({
                    queryKey: ["bookings"],
                });
            }
        },
        onError: (err) => toast.error(err.message),
    });

    return { isDeleting, deleteBooking };
}
