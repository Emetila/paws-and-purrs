import React, {useState} from "react";
import style from './LandingPageNavigation.css';

export const HeaderNavigation = () => {
//     const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   }
    return (
        <nav className={style.navbar}>
            <ul>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/category">Category</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
            </ul>
        </nav>
    )
}