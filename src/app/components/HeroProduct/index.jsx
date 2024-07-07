import React, { useState } from "react";
import style from './style.module.css';
import { heroProduct } from "./product";

export const Hero = () => {
    // const [activeTab, setActiveTab] = useState('product');
    // const renderContent = () => {
    //     switch (activeTab) {
    //         case 'product';
    //         return <heroProduct.title />;
    //     }
    // }
    return (
        <section className={style.container}>
            <div className={style.products}>
                {heroProduct.map((heroProduct) => (
                    <div className={style.productbox}>
                        <div>
                            <img className={style.images} src={heroProduct.Image} />
                        </div>
                        <div className={style.wrap}>
                            <div className={style.name}>
                                <h5 className={style.heading}><a href="/">{heroProduct.title}</a></h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}