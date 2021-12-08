import React, { useState, useEffect} from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import "./cart.css";
import shirt from "../components/Assets/shirt.png";
import { useSelector } from "react-redux";

const Cart = () => {
  const addToCartProduct = useSelector((state) => state.addToCartProduct);
  console.log("addToCartProduct", addToCartProduct.list);
  var totalCartPrice = 0;

  return (
    <Fragment>
      <div className="container main-section">
        <div className="row">
          <div className="col-lg-12 pb-2">
            <h2 className="text-center mt-3"> Shoping Cart</h2>
          </div>
          <div className="col-lg-12 pl-3 pt-3">
            <table className="table table-hover border bg-white">
              <thead>
                <tr>
                  <th>
                    {" "}
                    <h4>
                      {" "}
                      <b> Product Details </b>{" "}
                    </h4>{" "}
                  </th>
                  <th>
                    {" "}
                    <h4>
                      {" "}
                      <b> Price </b>{" "}
                    </h4>
                  </th>
                  <th>
                    {" "}
                    <h4>
                      {" "}
                      <b> Quantity </b>{" "}
                    </h4>{" "}
                  </th>
                  <th>
                    {" "}
                    <h4>
                      {" "}
                      <b> Subtotal </b>{" "}
                    </h4>{" "}
                  </th>
                  <th>
                    <h4>Action</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* <CartItems /> */}
                {addToCartProduct.list.map((cval)=>{
                  totalCartPrice += cval.price * cval.qty
                    return <CartItems cval={cval}/>
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td className="text-center">
                    <strong className="total_price">
                      Total Price : {totalCartPrice}
                    </strong>
                  </td>
                  <td>
                    <Link to="#" className="btn btn-success btn-block">
                      Checkout <i className="fa fa-angle-right"> </i>{" "}
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
