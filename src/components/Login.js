import React, { useState } from "react";
import { useNavigate, Navigate  } from "react-router-dom";

const UserLogin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const navigate = useNavigate();

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
        // navigate({ pathname: "/" });
        setIsLoggedIn(true);
      } else {
        alert("username & password doesnt match");
      }
    } else {
      alert("user not found");
    }
  };

  return (
    <>
    {isLoggedIn && <Navigate  to="/" />}
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
              <button
                className="btn btn-danger btn-block mt-3"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
