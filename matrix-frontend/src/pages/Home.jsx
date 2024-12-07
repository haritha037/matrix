import { useNavigate } from "react-router-dom";
import { useUpdateTeam } from "../features/teams/useUpdateTeam";
import { useGetTeam } from "../features/teams/useGetTeam";
import LoadingIndicator from "../UI/LoadingIndicator";

function Home() {
  const navigate = useNavigate();

  const { isUpdating, updateTeamMu } = useUpdateTeam();

  const {
    isLoading: isLoadingTeam,
    team,
    // team: { currentQuestionId, isFinished } = {},
  } = useGetTeam();

  const isLoading = isLoadingTeam || isUpdating;

  function handleStart() {
    updateTeamMu({ ...team, startedAt: new Date() });

    navigate("/question");
  }

  return (
    <div className="min-h-screen bg-[url('/bg-matrix.jpg')] bg-center bg-cover flex flex-col items-center justify-center text-white text-center">
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div className="content bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to Matrix</h1>
          <h1 className="text-4xl font-bold mb-4 text-green-300">
            {team?.teamName}
          </h1>
          <p className="text-lg mb-6">
            Embark on an exciting journey and test your knowledge. Are you ready
            to start?
          </p>
          <button
            disabled={isLoading}
            onClick={handleStart}
            className="bg-green-700  text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-primary transition duration-300"
          >
            Start Game
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
