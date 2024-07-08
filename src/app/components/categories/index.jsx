import React from "react";
import style from './style.module.css';
import { categoryProduct } from "./product";
import { CustomButton } from "../Button";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
    const navigate = useNavigate();
  const goToProduct = () => {
    navigate('/product');
  };
    return (
        <section className={style.container}> 
            <h2 className={style.title}>Categories</h2>

            <div className={style.products}>
                {categoryProduct.map((categoryProduct) => (
                    <div className={style.productbox}>
                        <div>
                            <img className={style.productsimages} src={categoryProduct.Image} />
                        </div>
                        <div className={style.wrap}>
                            <div className={style.name}>
                                <h5 className={style.heading}>{categoryProduct.title}</h5>
                                <CustomButton className={style.button} onClick={goToProduct} type="secondary">Shop Now</CustomButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}