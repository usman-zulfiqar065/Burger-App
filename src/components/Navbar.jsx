import { useState } from "react";
import NavbarLink from "./navbarLink";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Burger Builder')

  return (
    <div className="bg-[#703B0A] p-1 px-5 flex flex-row justify-between">
      <div className="bg-white w-16 p-2 rounded"><img src="burger-app-logo.png" alt="Italian Trulli"></img></div>
      <div className="self-center">
        <ul class="flex">
          <li><NavbarLink active={activeLink == 'Burger Builder'} onClick={setActiveLink}>Burger Builder</NavbarLink></li>
          <li><NavbarLink active={activeLink == 'Login'} onClick={setActiveLink}>Login</NavbarLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;