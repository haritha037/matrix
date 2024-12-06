import TeamsList from "../features/teams/teamsList";

function Dashboard() {
  return (
    <div className="h-full bg-background-dark">
      <div className="">
        <TeamsList />
      </div>
    </div>
  );
}

export default Dashboard;
