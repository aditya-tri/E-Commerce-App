import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartAction';
import MessageBox from '../components/MessageBox'

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if(productId){
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = () => {
    props.history.push('/signin?redirect=shipping')
  }
  return (
    <div className="row top">
      <div className="col-2">
        <div className="row">
          <h1>Shopping Cart</h1>
          <Link to='/productlist'><h1>Product List</h1></Link>
        </div>
        {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/productList"> Go Shopping</Link>
            </MessageBox>
          )
          :(
            <ul>
              {
                cartItems.map((item)=>(
                  <li key={item.product}>
                    <div className="row">
                      <div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="small"/>
                      </div>
                      <div className="min-30">
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </div>
                      <div>
                        <select
                          value={item.qty}
                          onChange={e=>
                            dispatch(
                              addToCart(item.product, Number(e.target.value)),
                            )
                          }
                        >
                          {
                            [...Array(item.stock).keys()].map((x)=> (
                              <option key={x+1} value={x+1}>
                                {x+1}
                              </option>
                            ))
                          }
                        </select>
                      </div>
                      <div>Rp{item.price}</div>
                      <div>
                        <button
                          type="button"
                          onClick={()=>removeFromCartHandler(item.product)}
                          >Delete</button>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          )
          }
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a,c)=>a + c.qty, 0)} items): Rp
                {cartItems.reduce((a, c)=> a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkOutHandler}
                className="primary block"
                disabled={cartItems.length === 0}>
                  Checkout
                </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
