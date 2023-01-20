import React, { useContext, useState,useEffect } from 'react'
import { NavLink, useHistory,useParams } from 'react-router-dom'
import { updatedata } from './context/ContextProvider';
import jwt_decode from "jwt-decode"
import SideBar from "./SideBar";

const Edit = () => {
    let navigate = useHistory()
  useEffect(() => {
       

    let token = localStorage.getItem("token");
    if(token){
    var decoded = jwt_decode(token);
   
    
    }else{
    navigate.push('/LoginAdmin')
    }
    
  }, []);

    const {updata, setUPdata} = useContext(updatedata)

 

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const [inpval, setINP] = useState({
        title: "",
        price: "",
        cat: "",
        description: "",
        qty: "",
        info:""
    })
    
    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const { id } = useParams("");
    console.log(id);

    const history = useHistory("");

    const getdata = async (e) => {
       

        const res = await fetch(`http://localhost:8000/product/${id}`, {
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
            setINP(data)
            console.log("get data");
        }
    }
    useEffect(()=>{
        getdata();
    },[]);


    const updateproduct = async (e)=>{
        e.preventDefault();

        const {title, price,cat, description,qty,info} = inpval;

       const res2 = await fetch(`http://localhost:8000/product/${id}`, {
            method: "PUT",
            headers: {
                 "Content-Type": "application/json"
            },
            body:JSON. stringify({
                title, price,cat, description,qty,info
        })
    });

    const data2 = await res2.json();
    console.log(data2);
    if(res2.status === 422 || !data2) {
        alert("fill the data");
    }else{
        //alert("produit modifié avec succès");
        history.push("/HomeAdmin");
        setUPdata(data2);

    }
}

    return (

        <React.Fragment>
    
        <link rel="stylesheet" href="../assets/css/style.css"></link>
    <link rel="stylesheet" href="../assets/css/colors/blue.css"></link>
        <div id="wrapper">
                
    
    
    
     
        <div class="dashboard-container" style={{marginTop:"-85px"}}>
    
        <SideBar/>
    
    <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner" >
        
      
    <div class="row" style={{marginTop:"80px"}}>
                  <div class="col-xl-12" >
                    {/* <form enctype="multipart/form-data"> */}
                    <div class="dashboard-box margin-top-0" >
                      <div class="headline">
                        <h3>
                          <i class="icon-feather-folder-plus"></i> Product
                          Form
                        </h3>
                      </div>
  
                      <div class="content with-padding padding-bottom-10">
                        <div class="row" style={{marginLeft:"-280px"}}>
                          <div class="col-xl-6">
                            <div class="submit-field">
                              <h5>Product Title</h5>
                              <input
                                type="text"
                                class="with-border"
                                name="title"
                                value={inpval.title}
                                 onChange={setdata} 
                               
                                
                               
                                required
                              />
                            </div>
                          </div>
  
                          
  
                          <div class="col-xl-6">
                            <div class="submit-field">
                              <h5>Product Category</h5>
                              <select
                                name="cat"
                                onChange={setdata}
                                title="Select Category"
                              >
                                <option value="">
                                --{inpval.cat}--
                                </option>
                                
                               
                
                                <option value="63c6d7046e9a121b87be4a04">Laptop Gamers</option>
                                <option value="63c6d72a6e9a121b87be4a06">Laptop Pro</option>
                                <option value="63c6d7326e9a121b87be4a08">Laptop en promotion</option>
  
  
                                <option value="63c6d73a6e9a121b87be4a0a">PC Gamers</option>
                                <option value="63c6d7426e9a121b87be4a0c">PC Pro</option>
                                <option value="63c6d74a6e9a121b87be4a0e">PC en promotion</option>
                               
                              </select>
                            </div>
                          </div>
  
  
                        
                      
  
                         
  
  
                          <div class="col-xl-6">
                            <div class="submit-field">
                              <h5>Price</h5>
                              <div class="row">
                                <div class="col-xl-12">
                                  <div class="input-with-icon">
                                    <input
                                      class="with-border"
                                      type="text"
                                      placeholder="Salary"
                                      name="price"
                                      value={inpval.price}
                                        onChange={setdata}
                                      required
                                    />
                                    <i class="currency">TND</i>
                                  </div>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="submit-field">

                              <h5>Quantity</h5>
                              <div class="row">
                                <div class="col-xl-12">
                                  <div class="input-with-icon">
                                    <input
                                      class="with-border"
                                      type="number"
                                      placeholder="Quantity"
                                      name="qty"
                                      value={inpval.qty}
                                      onChange={setdata}
                                      required
                                    />
                                 
                                  </div>
                                </div>
                                
                                </div>
                            </div>
                            </div>

                                  {/*
                          <div class="col-xl-4">
                            <div class="submit-field">
                              <h5>Product category</h5>
                              <input
                                type="text"
                                class="with-border"
                                name="cat"
                                value={cat}
                                onChange={(e) => onInputChange(e)}
                                required
                              />
                            </div>
                          </div>
                              */}
                         
                         
                          
                          
  
                          <div class="col-xl-12">
                            <div class="submit-field">
                              <h5>Product Description</h5>
                              <textarea
                                cols="30"
                                rows="5"
                                class="with-border"
                                name="description"
                                value={inpval.description}
                                onChange={setdata}
                                required
                              />
                               <h5>Product Infomations</h5>
                              <textarea
                                cols="30"
                                rows="5"
                                class="with-border"
                                name="info"
                                value={inpval.info}
                                onChange={setdata}
                                required
                              />
                              
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </form> */}
                  </div>
  
                  <div class="col-xl-12">
                    
                    {/* <a href="#" class="button ripple-effect big margin-top-30"><i class="icon-feather-plus"></i> Post a Job</a> */}
                    <button
                    type='submit'
                       onClick={updateproduct}
                      class="button ripple-effect big margin-top-30"
                    >
                      <i class="icon-feather-edit"></i>  Edit Product{" "}
                    </button>
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

export default Edit