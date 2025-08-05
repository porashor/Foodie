import React, { useEffect, useState } from "react";
import Cart from "./Cart";
const MainCard = ({ search }) => {
  // fetching data from server
  const [food, setFood] = useState([]);
  const [catagory, setCatagory] = useState([]);
  useEffect(() => {
    fetch("https://your-app.onrender.com/food")
      .then((response) => response.json())
      .then((json) => setFood(json));
    fetch("https://your-app.onrender.com/catagory")
      .then((response) => response.json())
      .then((json) => setCatagory(json));
  }, []);
  return (
    <div className="container">
      {/* catagory loading here */}
      <div className="">
        {catagory.map((data, index) => (
          <div key={index}>
            <div
              className={`text-dark  cursor-pointer text-decoration-none bg-info my-3 py-3 d-flex justify-content-start gap-3 px-5`}
            >
              {data.CategoryName}
            </div>
            <div className="d-flex flex-wrap justify-content-around">
              {food
                .filter(
                  (item) =>
                    item.name.toLowerCase().includes(search.toLowerCase()) &&
                    item.CategoryName == data.CategoryName
                )
                .map((item, index) => (
                  <div key={index}>
                    <Cart
                      name={item.name}
                      image={item.img}
                      catagory={item.catagory}
                      option={item.options[0]}
                      description={item.description}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      {/* main data loaded here  */}
    </div>
  );
};

export default MainCard;
