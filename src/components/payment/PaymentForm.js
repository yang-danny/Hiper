import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import './PaymentForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectEmail, selectUserID } from "../../redux/slice/authSlice";
import {
  CLEAR_CART,
  selectCartItems,
  selectCartTotalAmount,
} from "../../redux/slice/cartSlice";
import { selectShippingAddress } from "../../redux/slice/checkoutSlice";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import spinnerImg from "../../assets/spinner.jpg";
import { toast } from "react-toastify";

const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userID = useSelector(selectUserID);
  const userEmail = useSelector(selectEmail);
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const shippingAddress = useSelector(selectShippingAddress);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const today = new Date();
    const date = today.toDateString();
    const time = today.toLocaleTimeString();
    const orderConfig = {
      userID,
      userEmail,
      orderDate: date,
      orderTime: time,
      orderAmount: cartTotalAmount,
      orderStatus: "Order Placed...",
      cartItems,
      shippingAddress,
      createdAt: Timestamp.now().toDate(),
    };
    console.log(orderConfig);
    try {
      addDoc(collection(db, "orders"), orderConfig);
      dispatch(CLEAR_CART());
      navigate("/checkout-success");
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };
  return (
    
    <div className="App-payment">
      <Cards
       number={state.number}
       expiry={state.expiry}
       cvc={state.cvc}
       name={state.name}
       focused={state.focus}
      />
      <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="tel"
            name="number"
            className="form-control"
            placeholder="Card Number"
            pattern="[\d| ]{16,22}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
    
        </div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
       
          <div className="form-group">
            <input
              type="tel"
              name="expiry"
              className="form-control"
              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="cvc"
              className="form-control"
              placeholder="CVC"
              pattern="\d{3,4}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
  
        <div className="form-actions">
          <button className="--btn btn-pay" id="submit"> <span id="button-text">
                  {isLoading ? (
                    <img
                      src={spinnerImg}
                      alt="Loading..."
                      style={{ width: "20px" }}
                    />
                  ) : (
                    "Pay now"
                  )}
                </span></button>
        </div>
      </form>
      </div> 
  
  );
}

export default PaymentForm;