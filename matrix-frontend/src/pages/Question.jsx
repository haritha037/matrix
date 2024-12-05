import { useEffect, useState } from "react";
import { useGetQuestions } from "../features/questions/useGetQuestions";
import { useGetTeam } from "../features/teams/useGetTeam";
import toast from "react-hot-toast";
import { updateTeamApi } from "../services/apiTeam";
import { useNavigate } from "react-router-dom";

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
    team: { currentQuestionId, isFinished } = {},
  } = useGetTeam();

  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");

  useEffect(
    function () {
      if (isFinished) {
        navigate("/dashboard");
      }
    },
    [isFinished]
  );

  const totalQuestions = 4;

  console.log(questions);
  console.log(currentQuestionId);

  function handleSubmit() {
    // compare the answer and the passkey
    const isPassed =
      findQuestionById(currentQuestionId, questions).passkey === answer;

    if (!isPassed) {
      toast.error("Wrong passkey!");
      return;
    }

    if (currentQuestionId === totalQuestions) {
      updateTeamApi({ newQuestionId: currentQuestionId, isFinished: true });

      toast.success("You have successfully completed the all the tasks!");
      navigate("/dashboard");
      return;
    }

    toast.success("Correct!");
    setAnswer("");

    // if they match, update the currentQuestionId globally
    updateTeamApi({ newQuestionId: currentQuestionId + 1, isFinished: false });
    // refetching is done by realtime subscription
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior
      handleSubmit();
    }
  };

  return (
    <div>
      Question
      <div>
        {questions &&
          currentQuestionId &&
          findQuestionById(currentQuestionId, questions).question}
      </div>
      <input
        type="text"
        disabled={isLoadingTeam}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className=" px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="passkey"
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>next</button>
    </div>
  );
}

export default Question;
