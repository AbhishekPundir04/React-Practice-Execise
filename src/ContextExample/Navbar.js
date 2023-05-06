import { NavLink } from "react-router-dom";

const Navbar = props =>{
    return <nav>
        <NavLink to='/Home'>Home</NavLink>
        <NavLink to ='/ContactUs'>ContactUs</NavLink>
        <NavLink to='/Profile'>Profile</NavLink>
    </nav>
}

export default Navbar;