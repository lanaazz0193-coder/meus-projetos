import { Outlet } from "react-router";
import SideBar from "../../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="d-flex vh-100 overflow-hidden">
      <SideBar />
      <main className="flex-grow-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

