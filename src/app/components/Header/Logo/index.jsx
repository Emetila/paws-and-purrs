import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as LogoImage} from '../../../assets/logo.svg'; // Path to your logo image
import '../LandingPageNavigation.css'

export const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <LogoImage className='logo' />
      </Link>
    </div>
  );
};