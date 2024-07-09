import React from "react";
import style from './style.module.css';
import { ReactComponent as FooterLogo } from '../../assets/footerlogo.svg';
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { infoMenu, legalUrls, petMenu, shopMenu } from "./navigation";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.menu}>
                <div className={style.logocontainer}>
                    <FooterLogo className={style.logo} />
                    <h2>Follow Us</h2>
                    <div className={style.social}>
                        <CiInstagram className={style.icon} />
                        <FaFacebook className={style.icon} />
                        <FaPinterest className={style.icon} />
                        <FaXTwitter className={style.icon} />
                    </div>
                </div>
                <div className={style.flex}>
                    <Menu title="Pet" options={petMenu} />
                    <Menu title="Shop" options={shopMenu} />
                    <Menu title="Info" options={infoMenu} />
                    <Menu title="Legal" options={legalUrls} />
                </div>

                {/* <div className={style['legal-urls']}>
                    <h5>Legal</h5>
                    <ul>
                    {
                        legalUrls.map(({ url, name }) => <a href={url}>{name}</a>)
                    }
                    </ul>
                </div> */}
            </div>

            <div className={style.copyright}>
                <div className={style.copy}>
                    <p>© 2024 Designed and Developed with love</p>
                </div>
            </div>
        </footer >
    )
}

export const Menu = ({ title, options}) => {
    return (
        <nav className={style.nav}>
            <h5>{title || <>&nbsp;</>}</h5>
            <ul>
                {
                    options && options.map((options)=>{
                        return (<li><a href={options.url}>{options.name}</a></li>)
                    })
                }
            </ul>
        </nav>
    )
}