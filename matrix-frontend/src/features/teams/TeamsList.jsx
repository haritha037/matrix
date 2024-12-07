import { useQueryClient } from "@tanstack/react-query";
import { useGetTeams } from "./useGetTeams";
import { Mosaic } from "react-loading-indicators";
import { useUpdateTeam } from "./useUpdateTeam";
import { useGetTeam } from "./useGetTeam";
import LoadingIndicator from "../../UI/LoadingIndicator";

const timeSpentInMinutes = (timeSpent) => {
  const minutes = Math.floor(timeSpent / 60000); // Convert milliseconds to minutes
  const seconds = Math.floor((timeSpent % 60000) / 1000); // Get remaining seconds
  return `${minutes}m ${seconds}s`;
};

function TeamsList() {
  const { isLoading: isLoadingTeams, teams } = useGetTeams();

  // const queryClient = useQueryClient();
  // const myTeam = queryClient.getQueryData(["team"]);
  const { isLoading: isLoadingTeam, team: myTeam } = useGetTeam();

  // const { isUpdating, updateTeamMu } = useUpdateTeam();
  const isLoading = isLoadingTeam && isLoadingTeams;

  if (isLoading) {
    return <LoadingIndicator />;
  }

  // Separate finished and unfinished teams
  const finishedTeams = teams
    ?.filter((team) => team.isFinished)
    .sort((a, b) => a.timeSpent - b.timeSpent); // Shorter time first

  const unfinishedTeams = teams
    ?.filter((team) => !team.isFinished)
    .sort((a, b) => b.currentQuestionId - a.currentQuestionId);

  // Medal icons for top 3 places
  const medals = ["🥇", "🥈", "🥉"];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mt-10 mb-6 text-primary">
        Ascend to the Top, The Matrix Awaits
      </h1>
      <div className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-4 bg-gray-700 p-4 text-sm font-semibold">
          <div></div>
          <div className="col-span-2">Team Name</div>
          <div>Time Spent</div>
        </div>

        {/* Finished Teams */}
        {finishedTeams?.map((team, index) => (
          <div
            key={team.id}
            className={`grid grid-cols-4 items-center p-4 ${
              index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
            } ${
              myTeam && team.id === myTeam.id
                ? "border-2 rounded-xl border-yellow-400"
                : ""
            }`}
          >
            <div>
              <span className="text-2xl">
                {medals[index] ? medals[index] : index + 1}
              </span>
            </div>
            <div className="col-span-2">{team.teamName}</div>
            <div>{timeSpentInMinutes(team.timeSpent)}</div>
          </div>
        ))}

        {/* Unfinished Teams */}
        {unfinishedTeams?.map((team, index) => (
          <div
            key={team.id}
            className={`grid grid-cols-4 items-center p-4 ${
              (finishedTeams.length + index) % 2 === 0
                ? "bg-gray-900"
                : "bg-gray-800"
            } ${
              myTeam && team.id === myTeam.id
                ? "border-2 rounded-xl border-yellow-400"
                : ""
            }`}
          >
            <div>
              <span>{finishedTeams.length + index + 1}</span>
            </div>
            <div className="col-span-2">{team.teamName}</div>
            <div>In Progress</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamsList;
