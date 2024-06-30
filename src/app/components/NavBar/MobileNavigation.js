'use client';

import NavLinks from "./NavLinks";
import { useState } from "react";
import './NavBar.css';

// icons
import { IoIosMenu } from "react-icons/io";
import { CgCloseR } from "react-icons/cg";

     

const MobileNavigation = () =>{
    const [click, setClick] = useState(false);

    const Hamburger = <IoIosMenu className="HamburgerMenu"
            size="30px"
            color="black"
            onClick={() => setClick(!click)} />

    const Close = <CgCloseR className="HamburgerMenu"
            size="30px"
            color="black"
            onClick={() => setClick(!click)} />  

    const CloseMenu = () => setClick(false);
    
    return(
        <nav className="MobileNavigation">
            {click ? Close : Hamburger}
            {click && <NavLinks isClicked={true} CloseMenu={CloseMenu}/>}
            <h2 className="logo">Blog</h2>
        </nav>
    )
}

export default MobileNavigation;