import React from "react";
import style from './style.module.css';
import { ReactComponent as DogImage } from '../../assets/images/dog.svg';
import { ReactComponent as CatImage } from '../../assets/images/cat.svg';
import { CustomButton } from "../Button";
import { useNavigate } from "react-router-dom";

export const BrowseSection = () => {
    const navigate = useNavigate();
    const goToProduct = () => {
        navigate('/product');
    };
    return (
        <section>
            <h2 className={style.titletext}>Browse By</h2>
            <div className={style.container}>
                <div className={style.dogbox}>
                    <DogImage className={style.image} />
                    <div className={style.cat}>
                        <h2 className={style.title}>Pawtastic Companions</h2>
                        <h1>DOGS</h1>
                        <CustomButton onClick={goToProduct}>Browse Dog Products</CustomButton>
                    </div>
                </div>

                <div className={style.catbox}>
                    <div className={style.cat}>
                        <h2>Purrfect Kitties</h2>
                        <h1>CATS</h1>
                        <CustomButton onClick={goToProduct}>Browse Cat Products</CustomButton>
                    </div>
                    <CatImage className={style.image2} />
                </div>
            </div>
        </section>
    )
}