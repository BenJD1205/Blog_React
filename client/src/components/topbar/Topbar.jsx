import React from 'react'
import './topbar.css'
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { Context} from "../../context/Context";

export default function Topbar() {
    const {user, dispatch} = useContext(Context)

    const handleLogout = () => {
        dispatch({type:"LOGOUT"})
    }

    return (
        <div className="topbar">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest"></i>
                <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">

                    <li className="topListItem">
                        <Link to="/" className="link" >
                            Home
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link" >
                            About
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/settings"  className="link">
                            Contact
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write"  className="link">
                            Write
                        </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to="/settings">
                            <img 
                                className="topImg"
                                src={user.profilePic}
                                alt=""
                            />
                        </Link>
                    ) :  (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link to="/login" className="link" >
                                    Login
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link to="/register" className="link" >
                                    Register
                                </Link>
                            </li>
                        </ul>
                    )
                }
                
                <i className="searchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
