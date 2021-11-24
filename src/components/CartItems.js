import React from "react";
import shirt from "../components/Assets/shirt.png";
import "./cart.css";

const CartItems = () => {
  return (
    <>
      <tr>
        <td>
          <div className="row">
            <div className="col-lg-2 Product-img">
              <img
                src={shirt}
                alt="shirt"
                className="img-responsive Product-img1"
              />
            </div>
            <div className="col-lg-10">
              <h5 className="nomargin">
                {" "}
                <b> White Shirt </b>{" "}
              </h5>
              <p> Cotton </p>
            </div>
          </div>
        </td>
        <td>
          {" "}
          <strong> 10,000 </strong>{" "}
        </td>
        <td data-th="Quantity">
          <b>
            {" "}
            <input
              type="number"
              className="form-control text-center"
              value="1"
            />{" "}
          </b>
        </td>
        <td>
          {" "}
          <strong> 10,000 </strong>{" "}
        </td>
      </tr>
    </>
  );
};

export default CartItems;
