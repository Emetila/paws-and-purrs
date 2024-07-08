import React from 'react';
import style from './style.module.css';
import { FaCheck } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Products } from './product';
import { FiMinusCircle } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../Button';

const Sidebar = ({ message }) => {
    const navigate = useNavigate();
    const viewCart = () => {
        navigate('/cart');
    };

    // Function to handle increment
    // const increment = () => {
    //     setCount(count + 1);
    // };

    // Function to handle decrement
    // const decrement = () => {
    //     setCount(count - 1);
    // };
    return (
        <aside>
            <div className="sidebar">
                {message}
                <IoIosCloseCircleOutline />
                <div>
                    <FaCheck />
                    <h3>Item added to your cart</h3>
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
                                <p className={style.size}>{Products.description}</p>
                                {/* <div className={style.quantity}>
                                    <p>Quantity:</p>
                                    <div className={style.counter}>
                                        <FiMinusCircle className={style.increase} onClick={decrement} />
                                        <p className={style.count}>{count}</p>
                                        <IoAddCircleOutline className={style.increase} onClick={increment} />
                                    </div>
                                </div> */}
                                <p className={style.amount}>{Products.amount}</p>
                            </div>
                            <div className={style.buttonbox}>
                                <CustomButton className={style.button} onClick={viewCart} type="secondary">View Cart</CustomButton>
                                <CustomButton className={style.button} onClick={() => { }}>Checkout</CustomButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
