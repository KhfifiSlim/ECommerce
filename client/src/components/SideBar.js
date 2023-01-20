import React from "react";
import {useEffect,useState} from "react";
import { Link ,useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import '../App.css'

const SideBar = () => {
	const [profil, setProfil] = useState([]);

	const [name,setName]=useState("");
	const [id,setId]=useState("");
	const [role,setRole]=useState("");
	const [counts, setCounts] = useState([]);
	let navigate = useHistory()

	

	const logout = () =>{
		localStorage.removeItem("token");
		window.location.reload(false);
		navigate('/LoginAdmin');
	  }

	useEffect(() => {


/*
        let token = localStorage.getItem("token");
         var decoded = jwt_decode(token);  
		 axios.get(`http://localhost:8800/job/findbyuserbycounts/${decoded.username}`).then((res)=>{
		  setCounts(res.data);
	});
         setName(decoded.username);
		 setId(decoded.id);
		 setRole(decoded.Role);
		 LoadProfil(decoded.id);
    */
    },[]);
	
    return(
        <React.Fragment>
            <div class="dashboard-sidebar">
		<div class="dashboard-sidebar-inner" data-simplebar>
			<div class="dashboard-nav-container">

				<a href="#" class="dashboard-responsive-nav-trigger">
					<span class="hamburger hamburger--collapse" >
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
					</span>
					<span class="trigger-title">Dashboard Navigation</span>
				</a>
				
				<nav class="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl" style={{marginTop:"-15px"}}>
      <div class="navbar-container d-flex content">
        <div class="bookmark-wrapper d-flex align-items-center">
         
        
        </div>
        <ul class="nav navbar-nav align-items-center ms-auto">
         
        
          <li class="nav-item dropdown dropdown-user"><a class="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="user-nav d-sm-flex d-none">
                <span class="user-name fw-bolder"><Link class="dropdown-item" onClick={logout} ><i class="me-50" data-feather="power"></i> Logout</Link> </span>
            
              </div>
			  
				<img src={"../../../app-assets/images/portrait/small/avatar-s-11.jpg"}
               alt="avatar" height="40" width="40"/>
			</a>
          
          </li>
        </ul>
      </div>
    </nav>
    
				<div class="dashboard-nav">
					<div class="dashboard-nav-inner">

						<ul data-submenu-title="Start" style={{height:"565px"}}>
							<li><Link  to={`/Dashborad`} id="test"><i class="icon-material-outline-dashboard"></i> Dashboard</Link></li>
							<li><Link  to={`/register`} id="test"><i class="icon-material-outline-add"></i> Add Product</Link></li>
							<li><Link to={`/HomeAdmin`} id="test"><i class="icon-feather-list"></i> Product List 
							{/*counts && counts.Orders != 0 && 
							<span class="nav-tag">{counts.Orders}</span>
*/}
							</Link></li>
						

						
							
							
							
							

							
						</ul>
						

					
						
					</div>
				</div>

			</div>
		</div>
	</div>
        </React.Fragment>
    )
}
export default SideBar;