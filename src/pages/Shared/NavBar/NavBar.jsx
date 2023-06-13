import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { RiDashboardFill } from 'react-icons/ri';
import useBook from "../../../hook/useBook";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [book] = useBook();

  const handleLoggedOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/instructor">Instructor</Link></li>
    <li><Link to="/classes">Classes</Link></li>
    <li><Link to="/secret">Secret</Link></li>
    <li>
      <Link to='/'>
        Dashboard
       <RiDashboardFill>Dashboard</RiDashboardFill>
       +{book?.length || 0}
      </Link>
    </li>
    {
      user ? <>
        <span className="text-amber-400 flex justify-center items-center ">{user?.displayName}</span>
        <button onClick={handleLoggedOut} className="btn btn-active btn-ghost">LOGOUT</button>
      </> : <>
        <li><Link to="/login">Login</Link></li>
      </>
    }
  </>


  return (
    <div className="navbar bg-base-100 fixed z-10   bg-orange-500 text-black font-semibold bg-opacity-20 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box ">
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"> <img className="h-10" src="https://www.reshot.com/preview-assets/icons/5T8DRAGBJ3/king-dancer-5T8DRAGBJ3.svg" alt="" /> Unick Dance +
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
     
    </div>
  );
};

export default NavBar;