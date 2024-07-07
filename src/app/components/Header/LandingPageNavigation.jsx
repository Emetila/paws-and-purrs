import React, { useState } from "react";
import './LandingPageNavigation.css';
import { HeaderNavigation } from "./HeaderNavigation";
import { IoSearch } from "react-icons/io5";
import { Logo } from "./Logo";
import { FaRegUser } from "react-icons/fa6";
import { Outlet, Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

export const LandingPageNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    // const [query, setQuery] = useState('');

    // const handleInputChange = (event) => {
    //   setQuery(event.target.value);
    // };

    // const handleSearch = () => {
    //   onSearch(query);
    // };
    return (<>
        <header className='header'>
            <div>
                <Logo />
            </div>

            <div className='menu'>
                <HeaderNavigation />
            </div>

            <div className='menu2'>
                <nav>
                    <ul>
                        <li>
                            <FaRegUser className="icon" />
                            <Link to="/accont">Accounts</Link>
                            <IoMdArrowDropdown onClick={toggleDropdown} className="dropdown-toggle" />
                            {isOpen && (
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">Item 1</li>
                                    <li className="dropdown-item">Item 2</li>
                                    <li className="dropdown-item">Item 3</li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <IoIosHelpCircleOutline className="icon" />
                            <Link to="/help">Help</Link>
                            <IoMdArrowDropdown onClick={toggleDropdown} className="dropdown-toggle" />
                            {isOpen && (
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">Item 1</li>
                                    <li className="dropdown-item">Item 2</li>
                                    <li className="dropdown-item">Item 3</li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <MdOutlineShoppingCart className="icon" />
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <div className='search'>
            <input type="text"
                // value={query}
                // onChange={handleInputChange}
                placeholder="Find the best for your pet" />
            <IoSearch className="searchicon" />
        </div>
    </>
    )
}