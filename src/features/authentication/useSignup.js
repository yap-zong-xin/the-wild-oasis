import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

const isDemo = import.meta.env.VITE_IS_DEMO;

export function useSignup() {
    const { mutate: signup, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            if (!isDemo) {
                console.log(user);
                toast.success(
                    "Account successfully created! Please verify the new account from the user's email address."
                );
            }
        },
    });

    return { signup, isLoading };
}
