import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../test/Context';
import Modal from '../components/Model';
import { BiTrash } from 'react-icons/bi';
import { jwtDecode } from 'jwt-decode';





const MyCart = () => {
    const {state, dispatch} = useContext(Context);
    const totalAmount = state.reduce((acc, item) => acc + item.price, 0);
    const auth = localStorage.getItem("authtoken");
    const dataJWT = jwtDecode(auth);

    const placeOrder = async()=>{
      try{
        const orderDetails = {
        name: dataJWT.name,
        email: dataJWT.email,
        state,
        TotalAmount: totalAmount
      }
        const res = await fetch("http://localhost:4000/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderDetails),
        });
        const data = await res.json();
        console.log(data);
      }catch(err){
        console.log(err)
      }
    }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Checkout</h2>
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Option</th>
            <th>Amount</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {
            state.map((item, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.size}</td>
                    <td>{item.price}</td>
                    <td className='d-flex justify-content-center'><BiTrash  onClick={() => dispatch({type: "REMOVE_CART", payload: {item, index}})}/></td>
                </tr>
            ))
          }
          <tr>
            <td colSpan="4" className="text-end">Total Amount</td>
            <td className="text-success fs-5">৳ {totalAmount}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-success" onClick={placeOrder}>
        Check Out
      </button>

     
    </div>
  );
}

export default MyCart
