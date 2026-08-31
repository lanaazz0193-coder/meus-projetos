import NavBar from "./NavBar";

const Header = ({children}) => {
  return (
   <header>
    <NavBar/>
    {children}
   </header>
  );
};

export default Header;