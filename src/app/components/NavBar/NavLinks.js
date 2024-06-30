import './NavBar.css';

const NavLinks = ({ isClicked, CloseMenu }) =>{
return(
    <nav className="NavLinks">
      <ul>
        <li>
          <a href="/" onClick={isClicked ? CloseMenu : null}>Home</a>
        </li>
        <li>
          <a href="/aboutme" onClick={isClicked ? CloseMenu : null}>About Me</a>
        </li>
        <li>
          <a href="/blogpage" onClick={isClicked ? CloseMenu : null}>Blog</a>
        </li>
        <li>
          <a href="/contact" onClick={isClicked ? CloseMenu : null}>Contact Me</a>
        </li>
      </ul>
    </nav>
)
}

export default NavLinks;