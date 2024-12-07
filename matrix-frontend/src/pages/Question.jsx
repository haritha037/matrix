import { useEffect, useState } from "react";
import { useGetQuestions } from "../features/questions/useGetQuestions";
import { useGetTeam } from "../features/teams/useGetTeam";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Writer from "../UI/Writer";
import ProgressBar from "../UI/ProgressBar";
import { Mosaic } from "react-loading-indicators";
import { useUpdateTeam } from "../features/teams/useUpdateTeam";
import LoadingIndicator from "../UI/LoadingIndicator";

function findQuestionById(id, questions) {
  if (!questions) {
    return;
  }
  return questions.filter((question) => question.id === id)[0];
}

function Question() {
  const { isLoading: isLoadingQuestion, questions } = useGetQuestions();

  const {
    isLoading: isLoadingTeam,
    team,
    isFetching,
    // team: { currentQuestionId, isFinished } = {},
  } = useGetTeam();

  const { isUpdating, updateTeamMu } = useUpdateTeam();

  const isLoading =
    isLoadingTeam || isLoadingQuestion || isUpdating || isFetching;

  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");

  useEffect(
    function () {
      if (team?.isFinished) {
        navigate("/dashboard");
      }
    },
    [team]
  );

  const totalQuestions = 4;

  // console.log(questions);
  // console.log(currentQuestionId);

  function handleSubmit() {
    // compare the answer and the passkey
    const isPassed =
      findQuestionById(team.currentQuestionId, questions).passkey === answer;

    if (!isPassed) {
      toast.error("Wrong passkey!");
      return;
    }

    if (team.currentQuestionId === totalQuestions) {
      const finishedAt = new Date();
      const startedAt = new Date(team.startedAt);
      const timeSpent = finishedAt - startedAt;

      updateTeamMu({ ...team, isFinished: true, timeSpent, finishedAt });

      toast.success("You have successfully completed all the tasks!");
      navigate("/dashboard");
      return;
    }

    toast.success("Correct!");
    setAnswer("");

    // if they match, update the currentQuestionId globally
    updateTeamMu({ ...team, currentQuestionId: team.currentQuestionId + 1 });
    // refetching is done by realtime subscription
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior
      handleSubmit();
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center z-20 px-5">
      <div className="flex items-center justify-center flex-col mx-24 gap-8 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 w-full max-w-2xl p-8 rounded-2xl">
        <div className="computer bg-gradient-to-r  from-gray-900  to-gray-950  text-crtGlow  rounded-2xl h-96 p-8 w-full border-2 border-t-8  overflow-auto">
          {/* {findQuestionById(team.currentQuestionId, questions).question} */}

          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <Writer
              text={
                findQuestionById(team.currentQuestionId, questions).question
              }
            />
          )}

          {/* {questions && currentQuestionId && (
            // findQuestionById(currentQuestionId, questions).question

            <Writer
              text={findQuestionById(currentQuestionId, questions).question}
            />
          )} */}
        </div>
        <div className="flex flex-col sm:flex-row gap-4  items-center justify-between w-full">
          <ProgressBar
            totalQuestions={questions?.length}
            currentQuestionId={team?.currentQuestionId}
          />
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <input
              type="text"
              disabled={isLoading}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
               border-gray-300 bg-white text-gray-900
               dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
              placeholder="passkey"
              onKeyDown={handleKeyDown}
            />
            <button
              disabled={isLoading}
              className={`px-8 py-2 rounded-lg font-semibold text-white
                bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400
                disabled:bg-green-300 disabled:cursor-not-allowed
                dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500 dark:disabled:bg-green-400 `}
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
