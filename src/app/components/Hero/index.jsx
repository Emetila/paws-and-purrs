import React from "react";
import style from './style.module.css';
import {ReactComponent as Image} from '../../assets/images/hero.svg';

export const HeroSection = () => {
    return (
        <div className={style.hero}>
            <Image className={style.image} />
            <div className={style.textbox}>
                <h1>Spoil your furry friend with love</h1>
                <p>Discover unique pet products that make a difference. We have Everything your pet needs for 
                    a happy life.</p>
            </div>
        </div>
    )
}