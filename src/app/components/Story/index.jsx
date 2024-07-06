import React from "react";
import style from './style.module.css';
import {ReactComponent as Image} from '../../assets/images/dog3.svg';

export const StorySection = () => {
    return (
        <section className={style.container}>
            <div className={style.textbox}>
                <h1>Our Story</h1>
                <p>At Paws and Purrs, we believe that every pet deserves the best. Our mission is to provide 
                    unique, eco-friendly products to ensure that your pets live happy, healthy lives. We’ve 
                    got everything your furry friends need.</p>
            </div>
            <Image className={style.image} />
        </section>
    )
}