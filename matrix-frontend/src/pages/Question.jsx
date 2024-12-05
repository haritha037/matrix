import { useGetQuestions } from "../features/questions/useGetQuestions";

function Question() {
  const { isLoading, questions } = useGetQuestions();

  return <div>Question</div>;
}

export default Question;
