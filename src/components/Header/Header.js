import React from "react"
import { NavLink } from "react-router-dom";
import "./Header.css"


const Header = () =>{
    return (
        <div className="header">
            <div className="logo">
                <img src="https://t4.ftcdn.net/jpg/01/05/24/71/240_F_105247118_DYy1s6CKHlQ2GQ9Me7StA93plU8QGUSK.jpg"  alt=""></img>
                <p>Dog Shop</p>
            </div>
            <div className="middle">
                {/* <NavLink to="Home" className={({ isActive }) =>  isActive ? 'text-white-50 font-bold' : 'text-black-50 font-thin'}>Home</NavLink> */}
                <NavLink to="About " className={({ isActive }) =>  isActive ? 'text-white-50 font-bold' : 'text-black-50 font-thin'}>About Us</NavLink>
                <NavLink to="/Service" className={({ isActive }) =>  isActive ? 'text-white-50 font-bold' : 'text-black-50 font-thin'}>Our Service</NavLink>
                <NavLink to="/Contact" className={({ isActive }) =>  isActive ? 'text-white-50 font-bold' : 'text-black-50 font-thin'}>Contact Us</NavLink>

            </div>
            <div className="register">
                {/* <button >Sign Up</button> */}
                <NavLink to="/Signup" className={({ isActive }) =>  isActive ? 'text-orange-50 font-bold' : 'text-black-50 font-thin'} style={{margin: "20px"}} >Signup</NavLink>
            </div>


        </div>
    )
}
export default Header;