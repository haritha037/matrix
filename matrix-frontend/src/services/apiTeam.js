import supabase from "./supabase";

export async function getTeamApi() {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  let { data: team, error } = await supabase
    .from("team")
    .select("*")
    // Filters
    .eq("user_id", user.id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Team could not be loaded");
  }
  console.log(team);
  return team;
}
export async function getAllTeamsApi() {
  let { data: teams, error } = await supabase.from("team").select("*");

  if (error) {
    console.log(error);
    throw new Error("Teams could not be loaded");
  }
  console.log(teams);
  return teams;
}

export async function updateTeamApi(newTeam) {
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
    .update(newTeam)
    .eq("user_id", user.id)
    .select();

  if (error) {
    console.log(error);
    throw new Error("Current question could not be updated");
  }
  console.log(data);
  return data;
}
// export async function updateTeamApi({ newQuestionId, isFinished }) {
//   // Get the authenticated user's ID
//   const {
//     data: { user },
//     error: authError,
//   } = await supabase.auth.getUser();

//   console.log(user);

//   if (authError || !user) {
//     throw new Error("User is not authenticated");
//   }

//   const { data, error } = await supabase
//     .from("team")
//     .update({ currentQuestionId: newQuestionId, isFinished })
//     .eq("user_id", user.id)
//     .select();

//   if (error) {
//     console.log(error);
//     throw new Error("Current question could not be updated");
//   }
//   console.log(data);
//   return data;
// }
