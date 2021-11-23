import React, { useEffect, useState } from "react";
import "./Home.css";
import ItemSearch from "./MainPage";

const Home = () => {
  let [list, setList] = useState([]);
  console.log("3", list);

  useEffect(() => {
    fakestore();
  }, []);

  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log("1", response);
    const jsonData = await response.json();
    console.log("2", jsonData);
    setList(jsonData);
  };
  // fakestore();
  // const addtoCart{}

  return (
    <>
      <div className="container products-list">
        <ItemSearch />
        {list.map((values) => {
          return (
            <>
              <div className="box">
                <div className="content">
                  <p>{values.id}</p>
                  <h5>{values.title}</h5>
                  <p>Product description - {values.description}</p>
                </div>
                <img src={values.image} alt="" />
                <p className="text-center">Price - {values.price}</p>
                <p className="text-center">Category - {values.category}</p>
                <p className="text-center">Rating - {values.rating.rate}</p>

                <p className="text-center">Rating - {values.rating.count}</p>

                <div className="text-center">
                  <button className="btn btn-success btn-sm mt-3">
                    {/* <button className="btn btn-success btn-sm mt-3" onClick={addtoCart.bind(this, values)}> */}{" "}
                    + Add To Cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
