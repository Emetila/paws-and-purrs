import React from "react";
import style from './style.module.css';
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const CheckoutHeaderTwo = () => {
    const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout')
  };

    return (<div className={style.body}>
        <header>
            <Logo />
            <div className={style.cart}>
            <MdOutlineShoppingCart className="icon" />
            <Link className={style.account} to="/cart">Cart</Link>
            </div>
        </header>

        <div className={style.submenu}>
            <p onClick={goToCheckout} className={style.shipping2}>Shipping</p>
            <IoIosArrowRoundForward className={style.arrow}/>
            <p className={style.pay2}>Payment</p>
        </div>
    </div>
    )
}