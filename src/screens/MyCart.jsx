import React, { useState, useContext, useEffect } from "react";
import { Context } from "../test/Context";
import Modal from "../components/Model";
import { BiTrash } from "react-icons/bi";
import { jwtDecode } from "jwt-decode";

const MyCart = () => {
  const [sendData, setSendData] = useState(false);
  const { state, dispatch } = useContext(Context);
  const totalAmount = state.reduce((acc, item) => acc + item.price, 0);
  const auth = localStorage.getItem("authtoken");
  const dataJWT = jwtDecode(auth);
  const shouldSend = state.length === 0 ? false : true;
  const [have, setHave] = useState(false);

  const placeOrder = async () => {
    try {
      const exist = await fetch(`${import.meta.env.VITE_HOST_LINK}/order/${dataJWT.email}`);
      const main = await exist.json();
      console.log(main);
      if (main.length > 0) {
        setHave(true);
      }
    } catch (err) {
      console.log(err);
    }


    if (!have) {
      if (shouldSend) {
        try {
          const orderDetails = {
            name: dataJWT.name,
            email: dataJWT.email,
            state,
            TotalAmount: totalAmount,
            date: new Date(),
          };
          const res = await fetch("http://localhost:4000/order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(orderDetails),
          });
          const data = await res.json();
          console.log(data);
          setSendData(true);
        } catch (err) {
          console.log(err);
        }
      } else {
        alert("Cart is empty");
      }
    } else {
      alert("You have already placed an order");
    }


  };

  return (
    <div className="container py-5">
      {sendData ? (
        <div>Data send successfully</div>
      ) : (
        <div>
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
              {state.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.size}</td>
                  <td>{item.price}</td>
                  <td className="d-flex justify-content-center">
                    <BiTrash
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_CART",
                          payload: { item, index },
                        })
                      }
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" className="text-end">
                  Total Amount
                </td>
                <td className="text-success fs-5">৳ {totalAmount}</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-between">
            <button className="btn btn-success" onClick={placeOrder}>
            Check Out
          </button>
          {
            have ? <button className="btn btn-warning text-capitalize">update order</button> : ""
          }
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
