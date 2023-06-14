import { NavLink, Outlet } from "react-router-dom";
import { MdClass, MdHome } from 'react-icons/md';
import useBook from "../hook/useBook";
import { FaUser } from "react-icons/fa";

const Dashboard = () => {
    const [book ] = useBook();

const isAdmin = true

    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
         <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side bg-[#ff8f00]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full text-base-content">
                {
                  isAdmin ? <>
                  <li><NavLink > Admin Home</NavLink></li>
                  <li><NavLink to="/dashboard/allusers"><FaUser></FaUser> All Users</NavLink></li>
           
                  </> : <>
                   <li><NavLink> Payment</NavLink></li>
            <li><NavLink to="/dashboard/myclasses"><MdClass></MdClass> My Classes
             <span className="badge inl badge-secondary"> +{book?.length || 0}</span>
            </NavLink>
            </li>
                </>
                }
            {/* Sidebar content here */}
           
            <div className="divider"></div>
            <li><NavLink to="/"><MdHome></MdHome> Home</NavLink></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;