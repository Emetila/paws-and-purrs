import React, { useState } from "react";
import './LandingPageNavigation.css';
import { HeaderNavigation } from "./HeaderNavigation";
import { IoSearch } from "react-icons/io5";
import { Logo } from "./Logo";
import { FaRegUser } from "react-icons/fa6";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

export const LandingPageNavigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const [showMenu, setMenu] = React.useState(false);

    const toggleMenu = () => {
        setMenu(showMenu === false)
    }

    const navigate = useNavigate();
  const goToCart = () => {
    navigate('/cart');
  };

    return (
    <>
        <header className='header'>
            <div>
                <Logo />
            </div>
            
            <div className="menucart">
            <IoMdMenu className='menu-icon' onClick={toggleMenu} fill='white' />
            <MdOutlineShoppingCart onClick={goToCart} className="iconmenu" />
            </div>
            <div className='menu'>
                
                <HeaderNavigation className={showMenu ? 'mobile' : ''} />
            </div>

            <div className='menu2'>
                <nav className="menu2">
                    <ul>
                        <li>
                            <FaRegUser className="icon" />
                            <Link className="account" to="/accont">Accounts</Link>
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
                            <Link className="account" to="/help">Help</Link>
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
                            <Link className="account" to="/cart">Cart</Link>
                        </li>
                    </ul>

                    <div className="icons">
                        <IoSearch className="searchicon" />
                        <MdOutlineShoppingCart className="icon" />
                    </div>
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