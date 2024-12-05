import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { isLoading, mutate: loginMu } = useMutation({
    mutationFn: loginApi,

    onSuccess: (user) => {
      console.log(user);
      toast.success("Logged in successfully");
      navigate("/question");
    },

    onError: (error) => toast.error(error.message),
  });

  return { isLoading, loginMu };
}
