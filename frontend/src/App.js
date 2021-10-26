import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreen from './components/home'
import ProductScreen from './screens/ProductScreen'
import ProductList from './screens/ProductList'
import CartScreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAdressScreen from './screens/ShippingAdressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
// import AdminRoute from './components/AdminRoute';
// import AdminProductListScreen from './screens/AdminProductListScreen';
function App() {

  const cart = useSelector(state=> state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state)=> state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch()
  const signoutHandler = ()=>{
    dispatch(signout);
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              EightyFour
            </Link>
          </div>
          <div>
            <form>
              <input type="text" placeholder="Search Product" />
              <button><i class="fas fa-search"></i></button>
            </form>
          </div>
          <div className="nav">
            <Link to="/cart">
              <i class="fas fa-shopping-cart"></i>
               {cartItems.length > 0 &&(
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.email} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Signout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign in</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">Admin {''} <i className="fa fa-caret-down"></i></Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/adminproductlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen} ></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAdressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
          {/* <AdminRoute path="/adminproductlist">{AdminProductListScreen}</AdminRoute> */}
          <Route path="/productlist" component={ProductList}></Route>
          <Route path="/" component= {HomeScreen} exact></Route>
        </main>
        <footer className="row center">© EightyFour</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
