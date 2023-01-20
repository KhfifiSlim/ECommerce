import React,{useEffect,useState,useContext }from 'react'
import { NavLink } from 'react-router-dom'
import { adddata,deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider';
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import jwt_decode from "jwt-decode"
import SideBar from "./SideBar";
import '../App.css'
function EspaceAdmin() {
    const [searchTerm ='', setSearchTerm] = useState();
    const [products, setProducts] = useState([]);
 
    const str1="uploads/";
    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    
    let navigate = useHistory()
    
   
    useEffect(() => {
       

        let token = localStorage.getItem("token");
        if(token){
        var decoded = jwt_decode(token);
       
        
        }
        
        else{
        navigate.push('/LoginAdmin')
        }
        
      }, []);

    






    const getdata = async (e) => {
       

        const res = await fetch("http://localhost:8000/product/list", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
      

        const data = await res.json();
        console.log(data);
       
        if (res.status === 404 || !data) {
            console.log("error ");
        } else {
            setUserdata(data);
            setProducts(data);
            console.log("get data");
        }
    }
    useEffect(()=>{
        getdata();
    },[]);

    
   

    const deleteproduct =async (id)=>{
        
        
      
        const result = window.confirm("Etes-vous sûr ?");
        if(result){
            const res2 = await fetch(`http://localhost:8000/product/${id}`, {
            method: "DELETE",
            headers: {
                 "Content-Type" : "application/json"
            }
        });

      
        }
        window.location.reload(false);
        
    }

  return (
    <React.Fragment>
  


<div class="dashboard-container">

<SideBar/>

<div class="dashboard-content-container" data-simplebar>
<div class="dashboard-content-inner" >


    <div class="dashboard-headline" style={{marginTop:"90px"}}>
        <h3 style={{marginBottom:"-50px"}}>Product List</h3>
      
        <div className="col-lg-3 mt-2 mb-2" >

<div class="input-with-icon" style={{ width:"300px" , marginLeft : "2px" , marginTop : "2.5px"}} >
<input type="text" placeholder="Search" style={{ width : "300px" , marginTop:"85px"}} 
      onChange={(event) =>{
      setSearchTerm(event.target.value)
      }}
      />
                      <i class="icon-material-outline-search"></i>
                  </div>
    
</div>
                    
            
        
    </div>

    <div class="row">

        <div class="col-xl-12">
            <div class="dashboard-box margin-top-0">

                <div class="headline">
                    <h3><i class="icon-feather-list"></i> Product List</h3>
                </div>

                <div class="content">
                    <ul class="dashboard-box-list">
                   { products.filter((product)=>{
        if (searchTerm == "") {
            return product
          }
          let title;
       
            title = product.title.toUpperCase();
                               
           if (title.includes(searchTerm.toUpperCase())) {
           return product
          }
    })
    
    .map((element, index) => (
                        <li style={{marginLeft:"-288px" ,width:"970px"}} >
                            <div class="job-listing" >

                                <div class="job-listing-details" >

                                    <Link  to={``} class="job-listing-company-logo" >
                                        <img src={str1.concat(element.image)}  id="productimg" alt="" style={{marginTop:"-50px"}} />
                                    </Link>

                                    <div class="job-listing-description" >
                                        <h3 class="job-listing-title" >{element.title}</h3>

                                        <div class="job-listing-footer">
                                            <ul>
                                                <li><i class="icon-material-outline-business"></i> {element.cat}</li>
                                             
                                                <li><i class="icon-feather-money"></i> {element.price} TND</li>
                                            
                                                
                                            </ul>
                                        </div>
                                        <div style={{marginLeft:"700px"}}>
                                        <NavLink to={`edit/${element._id}`}> <button  className='btn btn-primary'><i class="fas fa-pen"></i></button></NavLink>
                                        <button style={{marginLeft:"50px",marginTop:"-63px"}} className='btn btn-danger' onClick={() => deleteproduct(element._id)}><i class="fas fa-trash"></i></button>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                         
                        </li>
                    ))}


                    

                    </ul>
                </div>
            </div>
        </div>

    

    </div>

    <div class="dashboard-footer-spacer"></div>
 

</div>
</div>



</div>



</React.Fragment>
  )
}

export default EspaceAdmin