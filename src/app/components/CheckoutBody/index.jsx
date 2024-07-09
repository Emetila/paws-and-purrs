import React from "react";
import style from './style.module.css';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { CustomButton } from "../Button";
import { Link } from "react-router-dom";
import { CustomInput } from "./input";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { Products } from "./product";
import { useNavigate } from "react-router-dom";

export const CheckoutSection = () => {
    // const getTotalPrice = () => {
    //     return Products.reduce((total, products) => total + products.amount * products.quantity, 0);
    // };
    const navigate = useNavigate();
  const goToPayment = () => {
    navigate('/payment')
  };
    return (
        <section>
            <main className={style.container}>
                <div className={style.checkout}>
                    <div className={style.title}>
                        <h2>Express Checkout</h2>
                        <div className={style.buttons}>
                            <CustomButton className={style.social} onClick={() => { }} type="secondary">
                                <div><FcGoogle className={style.google} /></div>
                                Pay
                            </CustomButton>
                            <CustomButton className={style.social} onClick={() => { }} type="secondary">
                                <div><FaApple className={style.apple} /></div>
                                Pay
                            </CustomButton>
                        </div>
                    </div>
                    <div className={style.signin}>
                        <p>Have an account?</p>
                        <Link className={style.account} to="/signin">Sign In</Link>
                    </div>
                    <div className={style.contact}>
                        <h2>Contact</h2>
                        <div className={style.inputbox}>
                            <label>Email address</label>
                            <CustomInput type="email" name="email" placeholder="abc@email.com" />
                        </div>
                        <div className={style.checkbox}>
                            <input type="checkbox" name="reminder" id="reminder"checked />
                            <label className={style.emailme}>Email me with news and offers</label>
                        </div>
                    </div>

                    <div className={style.containerinputbox}>
                        <h2>Shipping Address</h2>
                        <div>
                            <label>Country/Region</label>
                            <div className={style.location}>
                                <CustomInput className={style.locationbox} type="text" name="location" placeholder="Nigeria" />
                                <div><IoMdArrowDropdown className={style.dropwnicon} /></div>
                            </div>
                        </div>
                        <div>
                            <label>Full Name</label>
                            <CustomInput type="text" name="name" placeholder="Enter your full name" />
                        </div>
                        <div>
                            <label>Full Name</label>
                            <CustomInput type="text" name="name" placeholder="Enter your full name" />
                        </div>
                        <div>
                            <label>Address Line 1</label>
                            <div className={style.searchbox}>
                            <div>
                                <CustomInput type="text" name="address1" placeholder="Enter your street address" />
                            </div>
                            <IoMdSearch className={style.search} />
                            </div>
                        </div>
                        <div>
                            <label>Address Line 2</label>
                            <CustomInput type="address" name="address2" placeholder="Apartment, suite, unit, building, floor, etc." />
                        </div>
                        <div className={style.statebox}>
                            <div>
                                <label>City</label>
                                <CustomInput type="text" name="city" placeholder="Enter your city" />
                            </div>
                            <div>
                                <label>State/Province</label>
                                <CustomInput type="text" name="state" placeholder="Enter your state" />
                            </div>
                            <div>
                                <label>Postal Code</label>
                                <CustomInput type="text" name="postal code" placeholder="Enter your postal/zip code" />
                            </div>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <CustomInput type="text" name="phone number" placeholder="Enter your phone number" />
                        </div>
                    </div>

                    <div className={style.options}>
                        <h2>Shipping Options</h2>
                        <div>
                            <div className={style.checkbox}>
                                <div>
                                    <input type="radio" name="standard" id="standard"  checked/>
                                    <label>Standard Shipping (5 - 7 Business days)</label>
                                </div>
                                <p>$4.99</p>
                            </div>
                            <div className={style.checkbox}>
                                <div>
                                    <input type="radio" name="express" id="express" />
                                    <label>Express Shipping (2 - 3 Business days)</label>
                                </div>
                                <p>$9.99</p>
                            </div>
                            <div className={style.checkbox}>
                                <div>
                                    <input type="radio" name="overnight" id="overnight" />
                                    <label>Overnight Shipping (1 Business day)</label>
                                </div>
                                <p>$19.99</p>
                            </div>
                            <div className={style.checkbox}>
                                <div>
                                    <input type="radio" name="free" id="free" />
                                    <label>Free Shipping (Orders Over $300)</label>
                                </div>
                                <p>Free</p>
                            </div>
                        </div>

                        <div className={style.return}>
                            <Link className={style.returncart} to="/cart">
                                <div><IoMdArrowDropleft className={style.icon} /></div>
                                Return to Cart
                            </Link>
                            <CustomButton onClick={goToPayment}>Proceed to Payment</CustomButton>
                        </div>

                        <div className={style.paybox}>
                            <p>Payment</p>
                            <IoMdArrowDropdown className={style.dropwnicon} />
                        </div>
                    </div>
                </div>
            </main>

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
                        <CustomInput type="number" name="phone number" placeholder="Discount Code or Gift Card" />
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