import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllTeamsApi, getTeamApi } from "../../services/apiTeam";
import toast from "react-hot-toast";
import { useSubscribeToTeamChanges } from "./useSubscribeToTeams";

export function useGetTeams() {
  const queryClient = useQueryClient();
  useSubscribeToTeamChanges(); // Centralized subscription logic

  const {
    isLoading,
    data: teams,
    error,
  } = useQuery({
    queryKey: ["teams"],
    queryFn: getAllTeamsApi,
  });

  if (error) {
    toast.error(error.message);
  }

  return { isLoading, teams };
}
