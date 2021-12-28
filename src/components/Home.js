import React, { useEffect, useState } from "react";
import "./Home.css";
import ItemSearch from "./MainPage";
import HomeList from "./HomeList";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions";

const Home = ({setisLoggedIn}) => {
  const [prolist, setProlist] = useState([]);
  // console.log("prolist", prolist);
  const [error, setError] = useState(null);
  const [searchString, setSearchString] = useState([]);
  console.log("searchString", searchString);

  
  let dispatch = useDispatch();
  const productList = useSelector((state) => state.getProduct);
  // console.log("hiii",productList);


  useEffect(() => {
    dispatch(getProduct());
  }, []); //dependency array
  // console.log("getProduct", getProduct)

  useEffect(() => {
    if (productList.list.data) {
      console.log("z",productList)
      setProlist(productList.list.data);
    } else if (productList.list.error) {
      setError(productList.list.error);
    }
  }, [productList.list]);



  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("auth"));
    console.log("storedData2", storedData);
    setisLoggedIn(true);
  }, []);

//
  const handleSearch = (searchStr) =>{
    console.log("initial value",searchStr)
    setSearchString(searchStr);
  }


  return (
    <>
      <div className="container">
        <ItemSearch handle={handleSearch}/>
        <div className="row">
          {error ? (
            <div>{error}</div>
          ) : (
            prolist &&
            prolist.filter((values)=>{
              // console.log("valuzzz", values);
              if (searchString == ""){
                return values
              } else if (values.title.toLowerCase().includes(searchString)){
                return values
              }
            }).map((values) => {
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
