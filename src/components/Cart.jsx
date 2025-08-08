import React, {useContext, useEffect, useRef, useState} from 'react'
import { Context } from "../test/Context";

const Cart = ({cardData}) => {
  const sizeref = useRef()
  const {name, img, options, description, CategoryName} = cardData;
  const {state , dispatch} = useContext(Context);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);

  const addCart = async () => {
    const exist = state.some(item => item._id === cardData._id);
    const indexi = state.findIndex(obj => obj._id === cardData._id);
    if(exist) {
    await dispatch({
      type: "UPDATE_CART",
      payload: {
        ...cardData,
        quantity,
        size,
        price: finalPrice == 0 ? options[0][size] * quantity : finalPrice,
        indexi
      },
    });
    }else{
    await dispatch({
      type: "ADD_CART",
      payload: {
        ...cardData,
        quantity,
        size,
        price: finalPrice == 0 ? options[0][size] * quantity : finalPrice,
      },
    });
  }
  }
  useEffect(() => {
    setSize(sizeref.current.value);
  }, [])
  const proprice = options[0][size] * quantity;
  return (
    <div>
      {/* main card loading here     */}
      <div className="card mt-3" style={{ width: "18rem", minHeight: "360px" }}>
        <img src={img} className="card-img-top" style={{ height: "180px", objectFit: "cover" }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description} 
          </p>
          <div className="container w-100">
            {/* quantity of food */}
            <select onChange={(e) => {
              setQuantity(e.target.value)
              setFinalPrice(options[0][size] * e.target.value);
            }} className="m-2 h-100 bg-info outline-none">
              {
                Array.from({ length: 6 }, (_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>))
              }
            </select>
            {/* half or full */}
            <select className="m-2 h-100 bg-info outline-none" ref={sizeref} onChange={(e) => {
              setSize(e.target.value)
              setFinalPrice(options[0][e.target.value] * quantity)
            }}>
              {
                Object.keys(options[0]).map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))
              }
            </select>
            {/* total price  */}
            <div className="d-inline h-100 fs-5">৳ {finalPrice == 0 ? proprice : finalPrice}/-</div>
          </div>
          <button onClick={addCart} className={`btn btn-info justify-content-center mt-3 w-100 hover:bg-white`}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
