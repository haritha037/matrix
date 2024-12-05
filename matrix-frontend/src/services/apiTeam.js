import supabase from "./supabase";

export async function getTeamApi() {
  let { data: team, error } = await supabase
    .from("team")
    .select("*")
    // Filters
    .single();

  if (error) {
    console.log(error);
    throw new Error("Team could not be loaded");
  }
  console.log(team);
  return team;
}

export async function updateCurrentQuestionIdApi(newId) {
  // Get the authenticated user's ID
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  console.log(user);

  if (authError || !user) {
    throw new Error("User is not authenticated");
  }

  const { data, error } = await supabase
    .from("team")
    .update({ currentQuestionId: newId })
    .eq("user_id", user.id)
    .select();

  if (error) {
    console.log(error);
    throw new Error("Current question could not be updated");
  }
  console.log(data);
  return data;
}
