import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function UserSignup(props) {
  const [username, setUserName] = useState('')
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');


  var auth = JSON.parse(localStorage.getItem('auth'));

  const handleSignup=()=>{

    if(auth === null){
      auth=[{'username': 'aaa', 'password': 'aaa'}];
    }
    
    if(password1 === password2){

      const same = auth.filter(d=>d.username===username);
      
      if (same.length === 0){
        auth = [...auth, {'username': username, 'password': password1}];
        localStorage.setItem('auth', JSON.stringify(auth));
        setUserName('');
        setPassword1('');
        setPassword2('');
        props.afterSignup(username);
      }else{
        alert('user exists!');
      }
    }

    else{
      alert('Passwords not match')
    }
  }

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h2 className="text-center text-info">Sign Up</h2>
          <div className="p-3 border">
            <div className="form-group">
              <label>User Name</label>
              <input type="text" className="form-control" onChange={e=>setUserName(e.target.value)}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" onChange={e=>setPassword1(e.target.value)}
              value={password1}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="text" className="form-control" onChange={e=>setPassword2(e.target.value)}
              value={password2}
              />
            </div>
            <div className="mt-2">
              <button className="btn btn-danger btn-block" onClick={handleSignup}>Signup</button>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default UserSignup;
