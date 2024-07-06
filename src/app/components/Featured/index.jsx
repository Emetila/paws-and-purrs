import React from "react";
import style from './style.module.css';
import { Title } from "./title";
import { featuredProduct } from "./product";
import { CustomButton } from "../Button";


export const FeaturedProduct = () => {
    return (
        <section className={style.container}>
            <Title />
            <div className={style.products}>
                {featuredProduct.map((featuredProduct) => (
                    <div className={style.productbox}>
                        <div>
                            <img className={style.productsimages} src={featuredProduct.Image} />

                        </div>
                        <div className={style.wrap}>
                            <div className={style.name}>
                                <h5 className={style.heading}>{featuredProduct.title}</h5>
                                <p className={style.description}>{featuredProduct.description}</p>
                                <div className={style.ratingbox}>
                                    <img className={style.rating} src={featuredProduct.rating} />
                                    <p className={style.description2}>{featuredProduct.ratingnumber}</p>
                                </div>
                                <h2 className={style.amount}>{featuredProduct.amount}</h2>
                            </div>
                            <CustomButton className={style.button} onClick={() => { }} type="secondary">Add to cart</CustomButton>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}