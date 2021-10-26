import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox'

export default function AdminProductListScreen(props) {
  // require('react-dom');
  // window.React2 = require('react');
  // console.log(window.React1 === window.React2);
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  const deleteHandler = () => {
   // dispatch delete action
  }
  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>PRICE</td>
              <td>CATEGORY</td>
              <td>BRAND</td>
              <td>ACTIONS</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product)=>(
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={()=>
                      props.history.push(`/product/${product._id}/edit`)
                    }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={()=> deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
      }
    </div>
  )
}
