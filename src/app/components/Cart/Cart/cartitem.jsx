import React from 'react';
import { CustomButton } from '../../Button';
import style from './style.module.css';
import { Products } from './product';

export const CartItem = ({ items, updateQuantity, removeItem }) => {
    const getTotalPrice = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    return (
        <div>
            <div className="cart">
                {items.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div className={style.products}>
                        {Products.map((Products) => (
                            <div className={style.productbox} key={Products.id}>
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
                                        <h2 className={style.amount}>${Products.amount}</h2>
                                    </div>
                                    <span>
                                        <input
                                            type="number"
                                            min="1"
                                            value={Products.quantity}
                                            onChange={(e) => updateQuantity(Products.id, parseInt(e.target.value))}
                                        />
                                    </span>
                                    <CustomButton className={style.button} onClick={() => removeItem(Products.id)} type="secondary">Remove</CustomButton>
                                </div>
                            </div>
                        ))}
                        <div className="cart-total">
                            <h2>Total: ${getTotalPrice()}</h2>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
};


