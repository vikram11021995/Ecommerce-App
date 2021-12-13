import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserSignup(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  let auth = JSON.parse(localStorage.getItem("auth"));

  const handleSignup = () => {
    if (auth === null) {
      auth = [{ username: "username", password: "password" }];
    }

    if (password === password2) {
      const same = auth.filter((d) => d.username === username);
      console.log("same", same);
      if (same.length === 0) {
        auth = [...auth, { username: username, password: password }];
        localStorage.setItem("auth", JSON.stringify(auth));
        setUserName("");
        setPassword("");
        setPassword2("");
        props.afterSignup(username);
      } else {
        alert("user exists!");
      }
    } else {
      alert("Passwords does not match");
    }
  };

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h2 className="text-center text-info">Sign Up</h2>
          <div className="p-3 border">
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setUserName(e.target.value)}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>confirm Password</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setPassword2(e.target.value)}
                value={password2}
              />
            </div>
            <div className="d-flex justify-content-between">
              <div className="mt-2">
                <button className="btn btn-danger" onClick={handleSignup}>
                  Signup
                </button>
              </div>
              <div className="mt-2">
                <Link className="nav-link" type="button" to={"/login"}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default UserSignup;
