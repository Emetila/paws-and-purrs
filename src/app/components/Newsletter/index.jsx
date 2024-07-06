import React from "react";
import style from './style.module.css';
import { CustomButton } from "../Button";
import {ReactComponent as LineIcon} from '../../assets/icon/line.svg';
import {ReactComponent as PlayStore} from '../../assets/images/playstore.svg';
import {ReactComponent as AppleStore} from '../../assets/images/apple.svg';

export const Newsletter = () => {
    return (
        <section className={style.container}>
            <div className={style.textbox}>
                <h1>Subscribe to our newsletter</h1>
                <div className={style.inputbox}>
                    <label>Email Address</label>
                    <input type="email" 
                    placeholder="Enter your email" />
                </div>
                <div>
                <CustomButton className={style.button} onClick={() => { }}>Subscribe</CustomButton>
                </div>
            </div>

            <LineIcon />

            <div className={style.downloadbox}>
                <h1>Download our free mobile app to shop for your pets anytime, anywhere</h1>
                <div className={style.downloadbutton}>
                    <PlayStore className={style.image} />
                    <AppleStore className={style.image} />
                </div>
            </div>
        </section>
    )
}