import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTeamApi } from "../../services/apiTeam";
import supabase from "../../services/supabase";
import { useSubscribeToTeamChanges } from "./useSubscribeToTeams";

export function useGetTeam() {
  const queryClient = useQueryClient();

  const { isLoading, data: team } = useQuery({
    queryKey: ["team"],
    queryFn: getTeamApi,
  });

  useSubscribeToTeamChanges(); // Centralized subscription logic

  // const teamChannel = supabase
  //   .channel("team-channel")
  //   .on(
  //     "postgres_changes",
  //     { event: "*", schema: "public", table: "team" },
  //     (payload) => {
  //       console.log("Change received!", payload);
  //       queryClient.invalidateQueries({ queryKey: ["team"] });
  //       queryClient.invalidateQueries({ queryKey: ["teams"] });
  //     }
  //   )
  //   .subscribe();

  return { isLoading, team };
}
