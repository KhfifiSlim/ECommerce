import React,{useEffect,useState} from 'react'
import SideBar from './SideBar'
import jwt_decode from "jwt-decode"
import { Link,useHistory } from "react-router-dom";

function Dashboard() {
    const[nb,setnb]= useState("");
    const[nbavis,setnbavis]= useState("");
    let navigate = useHistory()
    const getdata = async (e) => {
       

        const res = await fetch("http://localhost:8000/product/list", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
      

        const data = await res.json();
        console.log(data.length);
        setnb(data.length);
        
    }
    const getavis = async (e) => {
       

        const res = await fetch("http://localhost:8000/avis/allavis", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
      

        const data = await res.json();
        console.log(data.length);
        setnbavis(data.length);
        
    }
    useEffect(() => {
       
        getdata();
        getavis();
        let token = localStorage.getItem("token");
        if(token){
        var decoded = jwt_decode(token);
       
        
        }else{
        navigate.push('/LoginAdmin')
        }
      }, []);

  return (
    <React.Fragment>
    
    <link rel="stylesheet" href="../assets/css/style.css"></link>
<link rel="stylesheet" href="../assets/css/colors/blue.css"></link>
    <div id="wrapper">
            



 
    <div class="dashboard-container" style={{marginTop:"-85px"}}>

    <SideBar/>

<div class="dashboard-content-container" data-simplebar>
<div class="dashboard-content-inner" >
    
  
    <div class="dashboard-headline" style={{marginTop:"125px"}} >
        <h3>Hello, Admin!</h3>
        <span>We are glad to see you again!</span>

      
    </div>

    <div class="fun-facts-container">
        <div class="fun-fact" data-fun-fact-color="#36bd78">
            <div class="fun-fact-text">
                <span>Products</span>
                <h4>{nb}</h4>
            </div>
            <div class="fun-fact-icon"><i class="icon-feather-list"></i></div>
        </div>
        <div class="fun-fact" data-fun-fact-color="#b81b7f">
            <div class="fun-fact-text">
                <span>Categories</span>
                <h4>6</h4>
            </div>
            <div class="fun-fact-icon"><i class="icon-material-outline-dashboard"></i></div>
        </div>
        <div class="fun-fact" data-fun-fact-color="#efa80f">
            <div class="fun-fact-text">
                <span>Avis</span>
                <h4>{nbavis}</h4>
            </div>
            <div class="fun-fact-icon"><i class="icon-material-outline-rate-review"></i></div>
        </div>

        <div class="fun-fact" data-fun-fact-color="#efa80f">
            <div class="fun-fact-text">
                <span>Avis</span>
                <h4>4</h4>
            </div>
            <div class="fun-fact-icon"><i class="icon-material-outline-rate-review"></i></div>
        </div>


     
    </div>
    
    

    

   
   

</div>
</div>


<script src="/assets/js/chart.min.js"></script>
<script src="/assets/js/chart-code.js"></script>




</div>
</div>
</React.Fragment>
  )
}

export default Dashboard