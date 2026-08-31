import SideBar from "./SideBar";

const Header = ({children}) => {
  return (
   <header>
    <SideBar/>
    {children}
   </header>
  );
};

export default Header;