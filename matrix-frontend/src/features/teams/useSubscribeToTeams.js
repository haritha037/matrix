import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import supabase from "../../services/supabase";

export function useSubscribeToTeamChanges() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const teamChannel = supabase
      .channel("team-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "team" },
        (payload) => {
          console.log("Change received!", payload);
          // Invalidate related queries
          queryClient.invalidateQueries({ queryKey: ["team"] });
          queryClient.invalidateQueries({ queryKey: ["teams"] });
        }
      )
      .subscribe();

    // Clean up the subscription when the component unmounts
    return () => {
      teamChannel.unsubscribe();
    };
  }, [queryClient]);
}
