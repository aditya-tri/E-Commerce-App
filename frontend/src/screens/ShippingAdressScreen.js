import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartAction';
import CheckOutSteps from '../components/CheckOutSteps'

export default function ShippingAdressScreen(props) {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;
  if(!userInfo) {
    props.history.push('/signin')
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({fullName, address, city, postalCode, country})
    );
    props.history.push('/payment');
    // dispatch shipping addres action
  }

  return (
    <div>
      <CheckOutSteps step1 step2></CheckOutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Addres</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full name</label>
          <input 
            type="text" 
            id="fullName" 
            placeholder="Enter full name" 
            value={fullName} 
            onChange={(e)=> setFullName(e.target.value)}
            required/>
        </div>
        <div>
          <label htmlFor="fullName">Addres</label>
          <input 
            type="text" 
            id="address" 
            placeholder="Enter address" 
            value={address} 
            onChange={(e)=> setAddress(e.target.value)}
            required/>
        </div>
        <div>
          <label htmlFor="fullName">City</label>
          <input 
            type="text" 
            id="city" 
            placeholder="Enter city" 
            value={city} 
            onChange={(e)=> setCity(e.target.value)}
            required/>
        </div>
        <div>
          <label htmlFor="fullName">Postal Code</label>
          <input 
            type="text" 
            id="postalcode" 
            placeholder="Enter postalcode" 
            value={postalCode} 
            onChange={(e)=> setPostalCode(e.target.value)}
            required/>
        </div>
        <div>
          <label htmlFor="fullName">Country</label>
          <input 
            type="text" 
            id="country" 
            placeholder="Enter country" 
            value={country} 
            onChange={(e)=> setCountry(e.target.value)}
            required/>
        </div>
        <div>
          <label/>
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}
