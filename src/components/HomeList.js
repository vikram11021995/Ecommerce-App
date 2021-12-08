import React from "react";
import "./Home.css";
import { addToCart } from "../redux/actions";

import { useDispatch } from "react-redux";


const HomeList = ({ values }) => {
  let dispatch = useDispatch();


  const handleSubmit = (values) => {
      dispatch(addToCart({...values, qty: 1}));
    }
  return (
    <>
      <div className="container products-list">
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
            <button className="btn btn-success btn-sm mt-3" onClick={()=>{handleSubmit(values)}}>
              + Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeList;
