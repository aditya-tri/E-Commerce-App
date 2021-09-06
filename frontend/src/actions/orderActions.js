import axios from 'axios';
import { CART_EMPTY } from '../constants/cartConstant';
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCES, ORDER_DETAIL_FAIL, ORDER_DETAIL_REQUEST, ORDER_DETAIL_SUCCESS } from "../constants/orderConstants"

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({type: ORDER_CREATE_REQUEST, payload: order});
  try {
    const {userSignin: {userInfo}} = getState()
    const { data } = await axios.post('/api/orders', order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    });
    dispatch({type: ORDER_CREATE_SUCCES, payload: data.order});
    dispatch({type: CART_EMPTY});
    localStorage.removeItem('cartItems');
  }catch(error){
    dispatch(
      {
        type: ORDER_CREATE_FAIL,
        payload: 
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message,
      }
    )
  }
};

export const detailsOrder = (orderId) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DETAIL_REQUEST, payload: orderId});
  const { 
    userSignin: {userInfo},
  } = getState();
  try {
    const {data} = await axios.get(`/api/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}`}
    });
    dispatch({type: ORDER_DETAIL_SUCCESS, payload: data})
  }catch(error) {
    const message = 
      error.message && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({type: ORDER_DETAIL_FAIL, payload: message})
  }
};