import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import userDefaultPic from "../../../assets/user.png"

const NavBar = () => {
    const { dark, setDark } = useContext(AuthContext);

    const handleDark = () => {
        setDark(!dark);
        console.log(dark);
    }

    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#333333',
    };

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/business">Business</Link></li>
    </>



    return (
        <div>
            <div style={containerStyle} className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                            
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl bg-green-600">
                        <span className='uppercase text-red-700 font-extrabold'>Bd</span> Handicraft</a>
                        <input onClick={handleDark} type="checkbox" className="toggle ml-2" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                        user ?
                            <div className="dropdown dropdown-end mr-3 ">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL ? user.photoURL : userDefaultPic} />
                                    </div>
                                </label>
                                <ul style={containerStyle} tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                    <Link className="ml-3 mb-2" to="/profile"><li>Profile</li></Link>
                                    <Link className="ml-3" to="/signup"><li>Register</li></Link>
                                    <li><a onClick={handleLogOut}>Logout</a></li>
                                </ul>
                            </div>
                            :
                            <Link to='/login'><button className="btn text-white bg-green-500">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;