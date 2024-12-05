import supabase from "./supabase";

export async function getQuestionsApi() {
  let { data: questions, error } = await supabase.from("questions").select("*");

  if (error) {
    console.log(error);
    throw new Error("Questions could not be loaded");
  }

  console.log(questions);

  return questions;
}
