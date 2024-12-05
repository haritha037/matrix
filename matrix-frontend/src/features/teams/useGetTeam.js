import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTeamApi } from "../../services/apiTeam";
import supabase from "../../services/supabase";

export function useGetTeam() {
  const queryClient = useQueryClient();

  const { isLoading, data: team } = useQuery({
    queryKey: ["team"],
    queryFn: getTeamApi,
  });

  const teamChannel = supabase
    .channel("team-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "team" },
      (payload) => {
        console.log("Change received!", payload);
        queryClient.invalidateQueries({ queryKey: ["team"] });
      }
    )
    .subscribe();

  return { isLoading, team };
}
