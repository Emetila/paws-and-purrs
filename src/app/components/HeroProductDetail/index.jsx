import React, { useState } from "react";
import style from './style.module.css';
import { ReactComponent as Image } from '../../assets/images/dog6.svg';
import { ReactComponent as Rating } from '../../assets/icon/stars.svg';
import { ReactComponent as Circle } from '../../assets/icon/circle.svg';
import { FaCircle } from "react-icons/fa";
import { FiMinusCircle } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { CustomButton } from "../Button";

export const HeroProductDetail = () => {
    // Initialize the state with the useState hook
    const [count, setCount] = useState(1);

    // Function to handle increment
    const increment = () => {
        setCount(count + 1);
    };

    // Function to handle decrement
    const decrement = () => {
        setCount(count - 1);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <section>
            <div className={style.container} key={Image.id}>
                <div className={style.imagecontainer}>
                    <Image className={style.bigimage} />
                    <div className={style.imagebox}>
                        <Image className={style.smallimage} />
                        <Image className={style.smallimage} />
                        <Image className={style.smallimage} />
                        <Image className={style.smallimage} />
                        <Image className={style.smallimage} />
                    </div>
                </div>

                <div className={style.contentbox}>
                    <h1>Cozy Cuddle Cave</h1>
                    <p className={style.text}>The purr-fect hideaway for your furry friend - now available for both cats and dogs!</p>
                    <div className={style.ratebox}>
                        <Rating className={style.rating} key={Rating.id} alt="rating" />
                        <p>290 ratings</p>
                    </div>
                    <p className={style.amount}>$39.99</p>
                    <div className={style.colorbox}>
                        <p>Available Colours:</p>
                        <div className={style.colorcode}>
                            <Circle className={style.colour} />
                            <FaCircle className={style.colour2} />
                            <FaCircle className={style.colour3} />
                            <FaCircle className={style.colour4} />
                            <FaCircle className={style.colour5} />
                        </div>
                    </div>

                    <div className={style.quantity}>
                        <p>Quantity:</p>
                        <div className={style.counter}>
                            <FiMinusCircle className={style.increase} onClick={decrement} />
                            <p className={style.count}>{count}</p>
                            <IoAddCircleOutline className={style.increase} onClick={increment} />
                        </div>
                    </div>

                    <div className={style.inputbox}>
                        <p>Size</p>
                        <div className={style.dropdown}>
                            <p>Medium</p>
                            <IoMdArrowDropdown onClick={toggleDropdown} className={style.dropdownicon} />
                            {isOpen && (
                                <ul className={style.dropdownmenu}>
                                    <li className={style.dropdownitem}>Small</li>
                                    <li className={style.dropdownitem}>Medium</li>
                                    <li className={style.dropdownitem}>Large</li>
                                    <li className={style.dropdownitem}>Extra-Large</li>
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className={style.button}>
                        <CustomButton className={style.addbutton} onClick={() => { }}>Add to Cart</CustomButton>
                        <CustomButton className={style.addbutton} onClick={() => { }} type="secondary">Add to wishlist</CustomButton>
                    </div>
                </div>
            </div>
        </section>
    )
}