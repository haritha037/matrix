import { useGetTeams } from "./useGetTeams";

function TeamsList() {
  const { isLoading, teams } = useGetTeams();

  if (isLoading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  // Sort teams by currentQuestionId in descending order
  const sortedTeams = teams
    ?.slice()
    .sort((a, b) => b.currentQuestionId - a.currentQuestionId);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-primary">
        Leaderboard
      </h1>
      <div className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-4 bg-gray-700 p-4 text-sm font-semibold">
          <div>#</div>
          <div className="col-span-2">Team Name</div>
          <div>Score</div>
        </div>
        {sortedTeams?.map((team, index) => (
          <div
            key={team.id}
            className={`grid grid-cols-4 items-center p-4 ${
              index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
            }`}
          >
            <div>{index + 1}</div>
            <div className="col-span-2">{team.teamName}</div>
            <div>{team.currentQuestionId}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamsList;
