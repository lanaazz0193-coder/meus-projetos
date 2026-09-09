import { Outlet } from "react-router";
import NavBar from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const PortalPublico = () => {
  return (
    <>
      <NavBar/>
      
      <main>
        <Outlet/>
      </main>

      <Footer/>
    </>
  );
};

export default PortalPublico;