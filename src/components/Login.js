import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const UserLogin = ({setisLoggedIn}) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    const storedData = JSON.parse(localStorage.getItem("auth"));
    console.log("storedData", storedData);

    let filteredUsers = storedData.find((d) => d.username === username);
    console.log("filteredUsers", filteredUsers);
    // let filteredPassword = storedData.filter(d=>d.password===password)
    console.log("username", username);
    console.log("password", password);

    if (filteredUsers) {
      if (filteredUsers.password == password) {
        navigate({ pathname: "/" });
        setisLoggedIn(true);
      } else {
        alert("username or password doesn't match");
      }
    } else {
      alert("user not found");
    }
  };

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("auth"));
  //   console.log("storedData2", storedData);
  //   setisLoggedIn(true);
  // }, []);

  return (
    <>
      {/* {isLoggedIn && <Navigate to="/home" />} */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h2 className="text-center text-info">Login</h2>
            <div className="p-3 border">
              <div className="form-group mt-3">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-between">
                <div className="mt-2">
                  <button
                    className="btn btn-danger btn-block mt-3"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
                <div className="mt-2">
                  <Link className="nav-link" to={"/signup"}>
                    Sign up
                  </Link>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
