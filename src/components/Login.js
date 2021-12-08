import React, {useState} from "react";

const UserLogin = () => {
  const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');

  const handleLogin = () =>{
    if (auth === null){
      alert ('no user found');
    }


    const same = auth.filter(d=>d.username === username);

    if(same.length !==0){
      setUserName('');
      setPassword('');
    }
    else{
      alert(username + 'user not exist!');
    }
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h2 className="text-center text-info">Login</h2>
            <div className="p-3 border">
              <div className="form-group mt-3">
                <label>User Name</label>
                <input type="text" className="form-control" 
                value={username}
                onChange={e=>setUserName(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input type="text" className="form-control" 
                value={password}
                onChange={e=>setPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-danger btn-block mt-3" onClick={handleLogin}>Login</button>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
