import React from "react";
import style from './style.module.css';
import { Related } from "./product";
import { CustomButton } from "../Button";
import { IoIosAdd } from "react-icons/io";

export const RelatedProduct = () => {
    return (
        <section className={style.container}>
            <div>
                <h2 className={style.title}>Related Product</h2>
            </div>

            <div className={style.products}>
                    {Related.map((Related) => (
                        <div className={style.productbox}>
                            <div>
                                <img className={style.productsimages} src={Related.Image} />

                            </div>
                            <div className={style.wrap}>
                                <div className={style.name}>
                                    <h5 className={style.heading}>{Related.title}</h5>
                                    <p className={style.description}>{Related.description}</p>
                                    <div className={style.ratingbox}>
                                        <img className={style.rating} src={Related.rating} />
                                        <p className={style.description2}>{Related.ratingnumber}</p>
                                    </div>
                                    <h2 className={style.amount}>{Related.amount}</h2>
                                </div>
                                <CustomButton className={style.button} onClick={() => { }} type="secondary">Add to cart</CustomButton>
                            </div>
                        </div>
                    ))}
                </div>

                <CustomButton className={style.cartbtn} onClick={() => { }}>
                    <div className={style.cartbtnbox}>
                    <IoIosAdd className={style.addicon} />
                    Add to Cart
                    </div>
                 </CustomButton>
        </section>
    )
}