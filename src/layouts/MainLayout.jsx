import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen h-full flex flex-col overflow-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
