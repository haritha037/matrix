import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTeamApi } from "../../services/apiTeam";

export function useUpdateTeam() {
  const queryClient = useQueryClient();

  // mutation for editing the team
  const { isLoading: isUpdating, mutate: updateTeamMu } = useMutation({
    mutationFn: updateTeamApi,

    onSuccess: () => {
      // toast.success("Setting successfully Edited!");
      // queryClient.invalidateQueries({
      //   queryKey: ["settings"],
      // });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateTeamMu };
}
