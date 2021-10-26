import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../actions/productActions';

export default function ProductScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;
  useEffect(() => {
    dispatch(listProducts())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      {loading ? (
          <LoadingBox></LoadingBox>
        ) : (
          <div className="row center">
            {products.map((product) =>(
                <Product key={product._id} product={product}></Product>
            ))}
          </div>
        )}
    </div>
  )
}
