import React, { useState } from 'react';
import { CartItem } from './cartitem';
import { Products } from './product';
import style from './style.module.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiMinusCircle } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { CustomButton } from '../../Button';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
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

  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout')
  };
  const goToProduct = () => {
    navigate('/product')
  }

  return (
    <div className={style.container}>
      <div className={style.containhead}>
        <h2>Your Cart</h2>
        <p onClick={goToProduct}>Continue Shopping</p>
      </div>

      <div className={style.body}>
        <div className={style.content}>
          <div className={style.products}>
            {Products.map((Products) => (
              <div className={style.productbox}>
                <div>
                  <img className={style.productimage} src={Products.Image} />
                </div>
                <div className={style.wrap}>
                  <div className={style.name}>
                    <h5 className={style.heading}>{Products.title}</h5>
                    <div className={style.quantity}>
                      <p>Quantity:</p>
                      <div className={style.counter}>
                        <FiMinusCircle className={style.increase} onClick={decrement} />
                        <p className={style.count}>{count}</p>
                        <IoAddCircleOutline className={style.increase} onClick={increment} />
                      </div>
                    </div>
                    <p className={style.amount}>{Products.amount}</p>
                  </div>
                </div>
                <CustomButton className={style.button} onClick={() => { }} type="secondary">
                <div><RiDeleteBin6Line className={style.deleteicon} /></div>
                  Delete
                  </CustomButton>
              </div>
              
            ))}
          </div>

          <div className={style.amountbox}>
            <div className={style.headbox}>
              <h2>Estimated total</h2>
              <h3>$125.97</h3>
            </div>
            <p className={style.describe}>Taxes, discounts and shipping are calculated at checkout</p>
            <div className={style.inputboxbox}>
              <div className={style.inputbox}>
                <input type="checkbox" name="protection" id="shipping" />
                <label>Shipping Protection</label>
                <IoIosInformationCircleOutline className={style.infoicon} />
              </div>
              <p>$5.65</p>
            </div>
            <div className={style.buttons}>
              <CustomButton className={style.btn} onClick={goToCheckout}>Checkout</CustomButton>
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
        </div>
      </div>
    </div>
  );
};

