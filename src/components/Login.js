import React from "react";

const UserLogin = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h2 className="text-center text-info">Login</h2>
            <div className="p-3 border">
              <div className="form-group mt-3">
                <label>EMail Id</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input type="text" className="form-control" />
              </div>
              <button className="btn btn-danger btn-block mt-3">Login</button>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
