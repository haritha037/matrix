import { useQuery } from "@tanstack/react-query";
import { getQuestionsApi } from "../../services/apiQuestions";

export function useGetQuestions() {
  const {
    isLoading,
    data: questions,
    isFetching,
  } = useQuery({
    queryKey: ["questions"],
    queryFn: getQuestionsApi,
  });

  return { isLoading, questions, isFetching };
}
