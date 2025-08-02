import React from 'react'

const Cart = () => {
  return (
    <div>
      {/* main card loading here     */}
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src='https://tse3.mm.bing.net/th/id/OIP.MdUbjdeE9zg-58rFL6ZhsgHaIv?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' className="card-img-top" style={{ height: "180px", objectFit: "cover" }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is some importent food base always follow to us 
          </p>
          <div className="container w-100">
            {/* quantity of food */}
            <select className="m-2 h-100 bg-info outline-none">
              {
                Array.from({ length: 6 }, (_, index) => (
                  <option key={index} value={`#${index + 1}`}>
                    {index + 1}
                  </option>))
              }
            </select>
            {/* half or full */}
            <select className="m-2 h-100 bg-info outline-none">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            {/* total price  */}
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
