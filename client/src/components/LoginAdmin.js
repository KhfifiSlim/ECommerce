import React, { useState , useEffect } from "react";
import { Link,useHistory } from 'react-router-dom'

import axios from 'axios';

function LoginAdmin() {

    const [error,setError]= useState("");
    let navigate = useHistory();
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  return (
    <React.Fragment>
<link rel="stylesheet" type="text/css" href="/admin-assets/css/pages/authentication.css"></link>

<link rel="stylesheet" type="text/css" href="/adminassets/css/style.css"></link>
        <link rel="stylesheet" type="text/css" href="/admin-assets/css/pages/authentication.css"></link>
        <div  class="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static  " data-open="click" data-menu="vertical-menu-modern" data-col="blank-page">
            
<div class="app-content content ">
  <div class="content-overlay"></div>
  <div class="header-navbar-shadow"></div>
  <div class="content-wrapper">
    <div class="content-header row">
    </div>
    <div class="content-body"><div class="auth-wrapper auth-basic px-2">
<div class="auth-inner my-2">
<div class="card mb-0">
  <div class="card-body">
  
     
       
      <center><h2 class="brand-text text-primary ms-1">Our Tek</h2></center>
 


    <form class="auth-login-form mt-2" >
      <div class="mb-1">
        <label for="login-email" class="form-label">Email</label>
        <input
          type="text"
          class="form-control"
          id="emailaddress"
          name="emailaddress"
          placeholder="Email"
          aria-describedby="login-email"
          onChange={(e) => setEmail(e.target.value)}
          tabindex="1"
          autofocus
        />
      </div>

      <div class="mb-1">
        <div class="d-flex justify-content-between">
          <label class="form-label" for="login-password">Password</label>
          <a href="auth-forgot-password-basic.html">
            
          </a>
        </div>
        <div class="input-group input-group-merge form-password-toggle">
          <input
            type="password"
            class="form-control form-control-merge"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            tabindex="2"
            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
            aria-describedby="login-password"
          />
        
        </div>
      </div>
      <div class="mb-1">
        
      </div>
      <button class="btn btn-primary w-100" tabindex="4" style={{marginTop:"30px"}}
        onClick={async(e)=>{
            e.preventDefault();
            const config = {
                header: {
                  "Content-Type": "application/json",
                },
              };
            
        try {
            const {data} = await axios.post(
                "http://localhost:8000/user/login",
                {email,password},
                config
                );
              
                console.log(data);
                
                if (data.result === 'success') {
                    localStorage.setItem("token",data.token)
                    alert('Login successful')
                    navigate.push('/Dashborad')
                } else {
                    alert('Please check your username and password')
                }
               

                } catch(err){
                    console.log({email,password})
                    setError(err.response.data.error);
                    setTimeout(() => {
                        setError("");
                      }, 5000);
                    
                };

        }}
      >Sign in</button>
    </form>

    <p class="text-center mt-2">
      <span>{error}</span>
      
    </p>


    
  </div>
</div>
</div>
</div>

    </div>
  </div>
</div>
</div>
<script src="/admin-assets/vendors/js/vendors.min.js"></script>

<script src="/admin-assets/vendors/js/forms/validation/jquery.validate.min.js"></script>

<script src="/admin-assets/js/core/app-menu.min.js"></script>
<script src="/admin-assets/js/core/app.min.js"></script>

<script src="/admin-assets/js/scripts/pages/auth-login.js"></script>
    </React.Fragment>
  )
}

export default LoginAdmin