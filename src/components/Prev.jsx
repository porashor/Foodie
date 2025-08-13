import { s } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Prev = ({ data }) => {
  const navigate = useNavigate();
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  ///
  const [timeLeft, setTimeLeft] = useState(0); // in milliseconds

  useEffect(() => {
    const targetTime = new Date(order.date).getTime() + 1000 * 60 * 30;

    const updateTime = () => {
      const now = Date.now();
      const remaining = targetTime - now;
      setTimeLeft(remaining > 0 ? remaining : 0);
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };
  ///
  formatTime(timeLeft);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setErr(null);
      try {
        const res = await fetch(`http://localhost:4000/order/${data.email}`);
        const main = await res.json();
        if (!main || main.length === 0) {
          setErr("No data found");
        } else {
          setErr(null);
          setLoading(false);
          setOrder(main);
        }
      } catch (error) {
        setErr("failded to fetch data");
      }
    };
    getData();
    setInterval(()=>{
      setLoading(false)
    }, 5000);
  }, []);

  const deleteOrder = async () => {
    if(Object.keys(order).length > 0){
    try {
      await fetch(`http://localhost:4000/order/${data.email}`, {
        method: "DELETE",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }else{
    alert("Order not found");
  }
  };
  return (
    <div>
      <div className="container my-5">
        <div className="bg-info py-2 px-2 d-flex justify-content-between">
          <h2>Your orders</h2>
        <button className="btn btn-danger" onClick={deleteOrder}>Delete Order</button>
        </div>
        {/* data loaded here  */}
        {order.state && order.state.length > 0 ? (
          <div>
            <div className="my-3 d-flex justify-content-between flex-column gap-2 fs-5">
              <div>Order Date : {new Date(order.date).getTime()}{timeLeft}</div>
              <div>Name : {order.name}</div>
              <div>Email : {order.email}</div>
              <div>Total Amount : {order.TotalAmount}</div>
            </div>
            <table className="table table-dark table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Option</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {order.state ? (
                  order.state.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.size}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))
                ) : (
                  <div>loading...</div>
                )}
                <tr>
                  <td colSpan="4" className="text-end">
                    Total Amount
                  </td>
                  <td className="text-success fs-5">৳ {order.TotalAmount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <h1>{loading ? "loading..." : <div>{err}</div>}</h1>
        )}
      </div>
      
    </div>
  );
};

export default Prev;
