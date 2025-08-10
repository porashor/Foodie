import React, { useEffect, useState } from "react";

const Prev = ({ data }) => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
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
  }, []);
  console.log(order);
  return (
    <div>
      <div className="container my-5">
        <h2 className="bg-info py-2 px-2">Your orders</h2>
        {/* data loaded here  */}
        {order ? (
          <div>
            <div className="my-3 d-flex justify-content-between flex-column gap-2 fs-5">
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
          <h1>{loading ? "loading..." : err}</h1>
        )}
      </div>
    </div>
  );
};

export default Prev;
