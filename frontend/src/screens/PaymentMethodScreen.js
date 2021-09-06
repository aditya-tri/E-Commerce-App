import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartAction';
import CheckOutSteps from '../components/CheckOutSteps';

export default function PaymentMethodScreen(props) {
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;
  if(!shippingAddress.address){
    props.history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('Paypal');
  const dispatch = useDispatch();
  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/placeorder');
  }
  return (
    <div>
      <CheckOutSteps step1 step2 step3></CheckOutSteps>
      <form className="form" onSubmit={submitHandler}>
        <h1>
          Payment Method
        </h1>
        <div>
          <div>
            <input 
            type="radio" 
            id="paypal" 
            value="Paypal" 
            name="paymentMethod" 
            required 
            checked 
            onChange={(e)=> setPaymentMethod(e.target.value)}/>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input 
            type="radio" 
            id="stripe" 
            value="Stripe" 
            name="paymentMethod" 
            required  
            onChange={(e)=> setPaymentMethod(e.target.value)}/>
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>
        <div>
          <button className="primary" type="submit">Continue</button>
        </div>
      </form>
    </div>
  )
}
