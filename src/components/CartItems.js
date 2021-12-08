import React from "react";
import shirt from "../components/Assets/shirt.png";
import { deleteItem } from "../redux/actions";
import { useDispatch } from "react-redux";



import "./cart.css";

const CartItems = ({ cval }) => {
  // console.log("z", cval);
  let dispatch = useDispatch();


  return (
    <>
      <tr>
        <td>
          <img src={cval.image} style={{width: "49px", height:"55px"}}/>
        </td>
        <td>{cval.price}</td>
        <td>{cval.qty}</td>
        <td>{Number(cval.price) * Number(cval.qty)}</td>
        <td><button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteItem(cval.id))}>Delete Item</button></td>
      </tr>
    </>
  );
};

export default CartItems;
