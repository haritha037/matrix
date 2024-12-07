import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <div className="relative flex flex-col h-screen bg-background-dark">
      <NavBar />
      {/* <img src="back.png" className="absolute left-10 right-10 "></img> */}
      <Outlet />
    </div>
  );
}

export default AppLayout;
