import React from "react";
import style from './style.module.css';
import { ReactComponent as Mastercard } from '../../assets/icon/mastercard.svg';
import { SiVisa } from "react-icons/si";
import { Products } from "./product";
import { CustomButton } from "../Button";

export const PaymentBody = () => {
    return (
        <section className={style.container}>
            <div>
                <div className={style.headbox}>
                    <p className={style.shiptext}><span>Shipping Details -</span> Standard Shipping</p>
                    <p className={style.text}>Toluwanimi Ogbonna</p>
                    <p className={style.text}>letsuwatoluwanimi@yahoo.com</p>
                    <p className={style.text}>Alcon road, Woji, Port Harcourt</p>
                </div>
                <div className={style.paymentbox}>
                    <h2>Payment</h2>
                    <div className={style.radioboxbox}>
                        <div className={style.paybox}>
                            <input type="radio" name="pay" id="pay" />
                            <label>Pay with USSD or Bank Transfer</label>
                        </div>
                    </div>
                    <div>
                        <div className={style.payboxmain}>
                            <div className={style.radioboxbox}>
                                <div className={style.paybox}>
                                <input type="radio" name="pay" id="pay" checked />
                                <label>Pay with Mastercard and Visa</label>
                                </div>
                            </div>
                            <div className={style.cardicon}>
                                <Mastercard className={style.mastercardicon} />
                                <SiVisa className={style.visa} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div  className={style.cardbox}>
                            <label>Card Number</label>
                            <input type="text" name="card number" placeholder="XXXX XXXX XXXX XXXX" />
                        </div>
                    </div>

                    <div className={style.expirybox}>
                            <div>
                                <label>Expiry Date</label>
                                <input type="date" name="number" placeholder="MM/YY" />
                            </div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <label>CVV</label>
                                        <input type="text" name="cvv" placeholder="***" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <CustomButton className={style.pay} onClick={() => { }}>Pay Now</CustomButton>
                </div>
            </div>

            <aside>
                <div className={style.itembox}>
                    <div className={style.products}>
                        {Products.map((Products) => (
                            <div className={style.productbox}>
                                <div className={style.itemimage}>
                                    <img className={style.productimage} src={Products.Image} />
                                    <img className={style.number} src={Products.number} />
                                </div>
                                <div className={style.wrap}>
                                    <div className={style.name}>
                                        <div className={style.detail}>
                                            <h5 className={style.heading}>{Products.title}</h5>
                                            <p className={style.size}>{Products.size}</p>
                                        </div>
                                        <p className={style.amount}>{Products.amount}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={style.applybox}>
                        <input type="text" name="phone number" placeholder="Discount Code or Gift Card" />
                        <CustomButton className={style.applybtn} onClick={() => { }}>Apply</CustomButton>
                    </div>

                    <div className={style.totalbox}>
                        <div>
                            <p className={style.text}>Subtotal</p>
                            <p className={style.money}>$125.97</p>
                        </div>
                        <div>
                            <p className={style.text}>Shipping</p>
                            <p className={style.shippingaddress}>Enter Shipping Address</p>
                        </div>
                    </div>

                    <div className={style.subtotal}>
                        <p>Subtotal</p>
                        <h3>$125.97</h3>
                    </div>
                </div>
            </aside>
        </section>
    )
}