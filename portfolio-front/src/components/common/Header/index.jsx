import NavBar from "./NavBar/NavBar";

const Header = ({children}) => {
  return (
   <header>
    <NavBar/>
    {children}
   </header>
  );
};

export default Header;