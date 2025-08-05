import React from 'react'

const Cart = ({name, image, catagory, option, description}) => {
  const addCart = async () => {
    const data = await fetch("http://localhost:4000/addcart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }});
    }
  return (
    <div>
      {/* main card loading here     */}
      <div className="card mt-3" style={{ width: "18rem", minHeight: "360px" }}>
        <img src={image} className="card-img-top" style={{ height: "180px", objectFit: "cover" }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description} 
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
              {
                Object.keys(option).map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))
              }
            </select>
            {/* total price  */}
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
          <button onClick={addCart} className={`btn btn-info justify-content-center mt-3 w-100 hover:bg-white`}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
