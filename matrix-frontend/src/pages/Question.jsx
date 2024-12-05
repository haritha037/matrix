import { useState } from "react";
import { useGetQuestions } from "../features/questions/useGetQuestions";
import { useGetTeam } from "../features/teams/useGetTeam";
import toast from "react-hot-toast";
import { updateCurrentQuestionIdApi } from "../services/apiTeam";
import { useQueryClient } from "@tanstack/react-query";

function findQuestionById(id, questions) {
  if (!questions) {
    return;
  }
  return questions.filter((question) => question.id === id)[0];
}

function Question() {
  const { isLoading: isLoadingQuestion, questions } = useGetQuestions();
  const { isLoading: isLoadingTeam, team: { currentQuestionId } = {} } =
    useGetTeam();

  const [answer, setAnswer] = useState();

  console.log(questions);
  console.log(currentQuestionId);

  function handleSubmit() {
    // compare the answer and the passkey
    const isPassed =
      findQuestionById(currentQuestionId, questions).passkey === answer;

    // if (!isPassed) {
    //   toast.error("Wrong passkey!");
    //   return;
    // }

    // if they match, update the currentQuestionId globally
    updateCurrentQuestionIdApi(currentQuestionId + 1);
    // clear the cache of team, so the data will be refetched
  }

  return (
    <div>
      Question
      <div>
        {questions &&
          currentQuestionId &&
          findQuestionById(currentQuestionId, questions).question}
      </div>
      <button onClick={handleSubmit}>next</button>
    </div>
  );
}

export default Question;
