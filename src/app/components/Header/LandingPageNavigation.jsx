import React from "react";
import './LandingPageNavigation.css';
import {ReactComponent as LogoImage} from '../../assets/logo.svg';
import { HeaderNavigation } from "./HeaderNavigation";

export const LandingPageNavigation = () => {
    return (<>
        <header className='header'>
            <div>
            <LogoImage className='logo' />
            </div>

            <div className='menu'>
                <HeaderNavigation />
            </div>

            <div className='menu2'>
                <nav>
                    <ul>
                        <li>
                            <a href="/accont">Accounts</a>
                        </li>
                        <li>
                            <a href="/help">Help</a>
                        </li>
                        <li>
                            <a href="/cart">Cart</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <div className='search'>
            <input type="text" 
            placeholder="Find the best for your pet"/>
        </div>
        </>
    )
}