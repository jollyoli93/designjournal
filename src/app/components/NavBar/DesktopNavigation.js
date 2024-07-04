 import NavLinks from "./NavLinks";
 import './NavBar.css';

 import { RxComponent1 } from "react-icons/rx";

 const DesktopNavigation = () =>{
    return(
        <nav className="DesktopNavigation">
            <h2 className="logo text-xl font-bold flex gap-5">
            <RxComponent1 
                size="25px"
            />
                Untitled UI</h2>
            <NavLinks />
        </nav>
    )
 }

 export default DesktopNavigation;