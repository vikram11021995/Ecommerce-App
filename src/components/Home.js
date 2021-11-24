import React, { useEffect, useState } from "react";
import "./Home.css";
import ItemSearch from "./MainPage";
import HomeList from "./HomeList";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions";

const Home = () => {
  const [prolist, setProlist] = useState([]);
  const [error, setError] = useState(null);

  let dispatch = useDispatch();
  const productList = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    if (productList.list.data) {
      setProlist(productList.list.data);
    } else if (productList.list.error) {
      setError(productList.list.error);
    }
  }, [productList.list]);


  return (
    <>
      <div className="container">
        <ItemSearch />
        <div className="row">
          {error ? (
            <div>{error}</div>
          ) : (
            prolist &&
            prolist.map((values) => {
              return (
                <>
                  <div className="col-md-4 product-items">
                    <HomeList values={values} />
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
