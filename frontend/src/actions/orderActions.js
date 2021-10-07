import axios from 'axios';
import { CART_EMPTY } from '../constants/cartConstant';
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCES, ORDER_DETAIL_FAIL, ORDER_DETAIL_REQUEST, ORDER_DETAIL_SUCCESS, ORDER_MINE_LIST_FAIL, ORDER_MINE_LIST_REQUEST, ORDER_MINE_LIST_SUCCES, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCES } from "../constants/orderConstants"

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

export const payOrder = (order, paymentResult) => async(
  dispatch,
  getState
) => {
  dispatch({ type: ORDER_PAY_REQUEST, payload: { order, paymentResult } });
  const {
    userSignin : { userInfo },
  } = getState();
  try {
    const { data } = axios.put(`/api/orders/${order._id}/pay`, paymentResult, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({type: ORDER_PAY_SUCCES, payload: data})
  } catch (error) {
    const message =
      error.message && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({type: ORDER_PAY_FAIL, payload: message})
  }
}

export const listOrderMine = () => async (dispatch, getState) => {
  dispatch({ type: ORDER_MINE_LIST_REQUEST });
  const { userSignin: { userInfo } } = getState();
  try {
    const { data } = await axios.get('/api/orders/mine', {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: ORDER_MINE_LIST_SUCCES, payload: data})
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
  }
};