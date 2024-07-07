import React from "react";
import style from './style.module.css';
import {ReactComponent as Image} from '../../assets/images/hero.svg';
import { CustomButton } from "../Button";
import { ProductPage } from "../../pages/Product";
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
    const navigate = useNavigate();

  const goToProduct = () => {
    navigate('/product');
  };
    return (
        <div className={style.hero}>
            <Image className={style.image} />
            <div className={style.textbox}>
                <div className={style.text}>
                <h1>Spoil your furry friend with love</h1>
                <p>Discover unique pet products that make a difference. We have Everything your pet needs for 
                    a happy life.</p>
                </div>
                <CustomButton onClick={goToProduct}>Shop Paws and Purrs</CustomButton>
            </div>
        </div>
    )
}