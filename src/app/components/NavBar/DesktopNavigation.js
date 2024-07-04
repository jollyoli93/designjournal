 import NavLinks from "./NavLinks";
 import './NavBar.css';

 const DesktopNavigation = () =>{
    return(
        <nav className="DesktopNavigation">
            <h2 className="logo text-xl font-bold">Untitled UI</h2>
            <NavLinks />
        </nav>
    )
 }

 export default DesktopNavigation;