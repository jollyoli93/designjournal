'use client';

import NavLinks from "./NavLinks";
import { useState } from "react";
import './NavBar.css';

// icons
import { RxComponent1 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { CgCloseR } from "react-icons/cg";

     

const MobileNavigation = () =>{
    const [click, setClick] = useState(false);

    const Hamburger = <IoIosMenu className="HamburgerMenu"
            size="30px"
            color="black"
            onClick={() => setClick(!click)} />

    const Close = <CgCloseR className="HamburgerMenu"
            size="25px"
            color="black"
            onClick={() => setClick(!click)} />  

    const CloseMenu = () => setClick(false);
    
    return(
        <nav className="MobileNavigation">
            <RxComponent1 />
            <h2 className="logo text-lg font-bold">Untitled UI</h2>
            {click ? Close : Hamburger}
            {click && <NavLinks isClicked={true} CloseMenu={CloseMenu}/>}
        </nav>
    )
}

export default MobileNavigation;