import './App.css';
import React, { useState } from 'react';

function App() {

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [users, setUsers] = useState([]);

  function getUsers() {
    fetch("api/users")
      .then(response => {
        if (response.ok) {
          return response.json();          
        } else {
          throw new Error(
            `Server error: ${response.status}: ${response.statusText}`
          );
        }
      })
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
      });
  }
  
  const addUser = async text => {
    // Create new user obj
    let newUser = { usernameReg, passwordReg, emailReg }; 
    // Define fetch() options
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    };

    try {
      let response = await fetch("/api/users", options);
      if (response.ok) {
        let data = await response.json();
         setUsers(data);
      } else {
        console.log(`Server error: ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };


  return (
    <div className="App">
        <div className="registration">
            <h1>Registration</h1>
            <label>Username</label>
            <input
               type="text"
               onChange={(e) => {
                setUsernameReg(e.target.value);
               }} 
            />
            <br></br>
            <br></br>
            <label>Password</label>
            <input 
              type="text"
              onChange={(e) => {
                setPasswordReg(e.target.value);
               }} 
            />
            <br></br>
            <br></br>
            <label>Email</label>
            <input 
              type="text" 
              onChange={(e) => {
                setEmailReg(e.target.value);
               }} 
            />
            <button>Register</button>
        </div>
        <div className="login">
            <h1>Login</h1>
            <label>Username</label>
            <input type="text" placeholder="Username..."/>
            <br></br>
            <br></br>
            <label>Password</label>
            <input type="password" placeholder="Password..."/>
            <button>Login</button>
        </div>   
    </div>
  );
}

export default App;
