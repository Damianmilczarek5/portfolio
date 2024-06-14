import logo from "../assets/DMlogo3.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
     <div className="flex flex-shrink-0 items-center">
     <img className="mx-1 w-13" src={logo} alt="logo"></img>
     </div>
     <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
     </div>
     
    </nav>
  )
}

export default Navbar;