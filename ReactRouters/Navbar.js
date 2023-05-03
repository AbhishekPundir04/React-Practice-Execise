import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">Pofile</Link>
      <Link to="/contactus">Contact</Link>
    </div>
  );
};
export default Navbar;
