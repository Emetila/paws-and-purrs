import React from "react";
import { SideSection } from "../SideList";
import style from './style.module.css';
import { IoMdArrowDropdown } from "react-icons/io";
import { Products } from "./product";
import { CustomButton } from "../Button";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export const ProductSection = () => {
    return (
        <main className={style.container}>
            <aside className={style.container}>
                <SideSection />
            </aside>

            <article>
                <div className={style.headcotainer}>
                    <p className={style.containertext}>1 - 15 of 1551 results</p>
                    <div className={style.inputbox}>
                        <p>Sort by</p>
                        <div className={style.dropdown}>
                            <p>Relevance</p>
                            <IoMdArrowDropdown className={style.dropdownicon} />
                        </div>
                    </div>
                </div>

                <div className={style.products}>
                    {Products.map((Products) => (
                        <div className={style.productbox}>
                            <div>
                                <img className={style.productsimages} src={Products.Image} />

                            </div>
                            <div className={style.wrap}>
                                <div className={style.name}>
                                    <h5 className={style.heading}>{Products.title}</h5>
                                    <p className={style.description}>{Products.description}</p>
                                    <div className={style.ratingbox}>
                                        <img className={style.rating} src={Products.rating} />
                                        <p className={style.description2}>{Products.ratingnumber}</p>
                                    </div>
                                    <h2 className={style.amount}>{Products.amount}</h2>
                                </div>
                                <CustomButton className={style.button} onClick={() => { }} type="secondary">Add to cart</CustomButton>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={style.naviation}>
                    <MdKeyboardArrowLeft className={style.lefticon}/>
                    <div className={style.number}>
                        <p className={style.active}>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>...</p>
                        <p>50</p>
                    </div>
                    <MdKeyboardArrowRight className={style.righticon} />
                </div>
            </article>
        </main>
    )
}