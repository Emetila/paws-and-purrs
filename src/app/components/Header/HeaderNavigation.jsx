import React, { useState } from "react";
import style from './LandingPageNavigation.css';
import { Outlet, Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

export const HeaderNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className={style.navbar}>
            <ul>
                <li className="dropdown">
                    <Link to="/about">
                        About
                        </Link>
                        <IoMdArrowDropdown onClick={toggleDropdown} className="dropdown-toggle"/>
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">Item 1</li>
                            <li className="dropdown-item">Item 2</li>
                            <li className="dropdown-item">Item 3</li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/category">Category</Link>
                    <IoMdArrowDropdown onClick={toggleDropdown} className="dropdown-toggle"/>
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">Item 1</li>
                            <li className="dropdown-item">Item 2</li>
                            <li className="dropdown-item">Item 3</li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/product">Services</Link>
                </li>
            </ul>
        </nav>
    )
}