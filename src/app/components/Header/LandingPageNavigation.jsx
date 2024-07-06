import React, {useState} from "react";
import './LandingPageNavigation.css';
import {ReactComponent as LogoImage} from '../../assets/logo.svg';
import { HeaderNavigation } from "./HeaderNavigation";
import {ReactComponent as SearchIcon} from '../../assets/icon/search.svg';

export const LandingPageNavigation = () => {
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
            // value={query}
            // onChange={handleInputChange}
            placeholder="Find the best for your pet"/>
            <SearchIcon />
        </div>
        </>
    )
}