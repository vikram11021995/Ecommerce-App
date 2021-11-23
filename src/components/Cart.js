import React, {useState} from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./cart.css";



import shirt from "../components/Assets/shirt.png";


const Cart = () =>{
    return(
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
                            <th> <h4> <b>  Product Details </b> </h4> </th>  
                            <th> <h4> <b> Price  </b> </h4></th>  
                            <th> <h4> <b> Quantity </b> </h4> </th>  
                            <th> <h4> <b> Subtotal </b> </h4> </th>  
                        </tr>  
                    </thead>  
                    <tbody>  
                        <tr>  
                            <td>  
                                <div className="row">  
                                    <div className="col-lg-2 Product-img">  
                                        <img src={shirt} alt="shirt" className="img-responsive Product-img1"/>  
                                    </div>  
                                    <div className="col-lg-10">  
                                        <h5 className="nomargin"> <b>  White Shirt </b> </h5>  
                                        <p> Cotton </p>  
                                    </div>  
                                </div>  
                            </td>  
                            <td> <strong> 10,000 </strong> </td>  
                            <td data-th="Quantity">  
                                <b> <input type="number" className="form-control text-center" value="1"/> </b>  
                            </td>  
                            <td> <strong> 10,000 </strong> </td>    
                        </tr>    
                    </tbody>  
                    <tfoot>  
                        <tr>  
                            <td className="hidden-xs text-center"> <strong className="total_price"> Total Price : 10,000 </strong> </td>  
                            <td> <Link to="#" className="btn btn-success btn-block"> Checkout <i className="fa fa-angle-right"> </i> </Link> </td>  
                        </tr>  
                    </tfoot>  
                </table>  
            </div>  
        </div>  
    </div>  
    </Fragment>
    )
}

export default Cart;