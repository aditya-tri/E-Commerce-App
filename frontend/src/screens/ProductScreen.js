import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';


export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const productId = props.match.params.id;
  const productDetails = useSelector( state => state.productDetails);
  const {loading, product} = productDetails;
  useEffect(() =>{
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  const addToCartHandler = () =>{
    props.history.push(`/cart/${productId} ? qty=${qty}`);
  }
  return (
    <div>
      {loading ? (
          <LoadingBox></LoadingBox>
        ) : (
          <div>
            <Link to="/productlist">Go Back</Link>
            <div className="row top">
              <div className="col-2">
                <img className="large" src={product.image} alt={product.name}/>
              </div>
              <div className="col-1">
                <ul>
                  <li>
                    <h1 className="product">{product.name}</h1>
                  </li>
                  <li>
                    <h3>Rp{product.price}</h3>
                  </li>
                  <li>
                    <p>{product.name}</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium totam, dolorum incidunt autem optio ab maxime. Voluptate ex asperiores debitis quibusdam tenetur laudantium molestias doloribus odio odit, quia laborum aliquam.</p>
                    <form action="">
                        <label for="size">Size:</label>
                        <select id="size" name="size-chart">
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                    </form>
                  </li>
                </ul>
              </div>
              <div className="col-1">
                <div className="card-product card card-body">
                  <ul>  
                    <li>
                      <div className="row">
                        <div>Price</div>
                        <div className="price">Rp.{product.price}</div>
                      </div>
                      <div className="row">
                        <div>Status</div>
                        <div>
                          {product.stock>0 ?(
                            <span className="succes">In Stock</span>
                          ) : (
                            <span className="danger">Unavailable</span>
                          )}
                        </div>
                      </div>
                    </li>
                    {
                      product.stock > 0 && (
                        <>
                          <li>
                            <div className="row">
                              <div>Qty</div>
                              <div>
                                <select value={qty} onChange={e => setQty(e.target.value)}>
                                  {
                                    [...Array(product.stock).keys()].map((x)=> (
                                      <option key={x+1} value={x+1}>{x+1}
                                      </option>
                                    ))
                                  }
                                </select>
                              </div>
                            </div>
                          </li>
                          <li>
                            <button onClick={addToCartHandler} className="primary block">Add to cart</button>
                          </li>
                        </> 
                      )
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
    
  )
}
