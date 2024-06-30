 import NavLinks from "./NavLinks";
 import './NavBar.css';

 const DesktopNavigation = () =>{
    return(
        <nav className="DesktopNavigation">
            <h2 className="logo">Blog</h2>
            <NavLinks />
        </nav>
    )
 }

 export default DesktopNavigation;