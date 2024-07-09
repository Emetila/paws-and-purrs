import React from "react";
import style from './style.module.css';
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

export const CheckoutHeader = () => {
    return (<div className={style.body}>
        <header>
            <Logo />
            <div className={style.cart}>
            <MdOutlineShoppingCart className="icon" />
            <Link className={style.account} to="/cart">Cart</Link>
            </div>
        </header>

        <div className={style.submenu}>
            <p className={style.shipping}>Shipping</p>
            <IoIosArrowRoundForward className={style.arrow}/>
            <p className={style.pay}>Payment</p>
        </div>
    </div>
    )
}