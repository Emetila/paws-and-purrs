import React from "react";
import style from './style.module.css';
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { ReactComponent as Stroke1 } from '../../assets/icon/stroke2.svg';
import { ReactComponent as Stroke2 } from '../../assets/icon/stroke3.svg';
import { CustomButton } from "../Button";

export const SideSection = () => {
    return (
        <section className={style.container}>
            <div className={style.type}>
                <h1>Product Type</h1>
                <div className={style.textbox}>
                    <div>
                        <input type="checkbox" id="checkbox" />
                        <p>Collars, Leashes & Harnesses</p>
                    </div>
                    <div className={style.inputcheck}>
                        <input type="checkbox" id="checkbox" />
                        <p className={style.text}>Beds & Furnitures</p>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox" />
                        <p>Toys & Scratchers</p>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox" />
                        <p>Bowls & Feeders</p>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox" />
                        <p>Grooming Supplies</p>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox" />
                        <p>Apparel & Accessories</p>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox" />
                        <p>Treats & Supplements</p>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox" />
                        <p>Litter & Litter Boxes</p>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox" />
                        <p>Carriers & Travels</p>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox" />
                        <p>Drugs</p>
                    </div>
                </div>
            </div>

            <div className={style.age}>
                <h1>Age</h1>
                <div>
                    <input type="checkbox" id="checkbox" />
                    <p>Puppy</p>
                </div>
                <div>
                    <input type="checkbox" id="checkbox" />
                    <p>Kitten</p>
                </div>
                <div>
                    <input type="checkbox" id="checkbox" />
                    <p>Adult</p>
                </div>
                <div>
                    <input type="checkbox" id="checkbox" />
                    <p>Senior</p>
                </div>
                <div>
                    <input type="checkbox" id="checkbox" />
                    <p>All Stages</p>
                </div>
            </div>

            <div className={style.rating}>
                <h1>Ratings</h1>
                <div>
                    <input type="checkbox" id="checkbox" />
                    <div className={style.icon}>
                        <FaStar className={style.star} />
                        <FaStar className={style.star} />
                        <FaStar className={style.star} />
                        <FaStar className={style.star} />
                        <FaStar className={style.star} />
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="checkbox" />
                    <div className={style.icon}>
                        <FaStar className={style.star} />
                        <FaStar className={style.star} />
                        <FaStar className={style.star} />
                        <FaStar className={style.star} />
                        <FaRegStar className={style.star} />
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="checkbox" />
                    <div className={style.icon}>
                        <FaStar className={style.star} />
                        <FaStar className={style.star} />
                        <FaStar className={style.star} />
                        <FaRegStar className={style.star} />
                        <FaRegStar className={style.star} />
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="checkbox" />
                    <div className={style.icon}>
                        <FaStar className={style.star} />
                        <FaStar className={style.star} />
                        <FaRegStar className={style.star} />
                        <FaRegStar className={style.star} />
                        <FaRegStar className={style.star} />
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="checkbox" />
                    <div className={style.icon}>
                        <FaStar className={style.star} />
                        <FaRegStar className={style.star} />
                        <FaRegStar className={style.star} />
                        <FaRegStar className={style.star} />
                        <FaRegStar className={style.star} />
                    </div>
                </div>
            </div>
            <div>
                <h1>Price Range</h1>
                <div className={style.pricebox}>
                    <div className={style.stroke}>
                        <Stroke1 />
                        <Stroke2 />
                    </div>
                    <div className={style.numberbutton}>
                        <CustomButton className={style.button} onClick={() => { }} type="secondary">0</CustomButton>
                        <CustomButton className={style.button} onClick={() => { }} type="secondary">250</CustomButton>
                    </div>
                    <CustomButton onClick={() => { }}>Update</CustomButton>
                </div>
                
            </div>
        </section>
    )
}