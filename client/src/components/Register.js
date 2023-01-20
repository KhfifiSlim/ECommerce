import React, { useContext, useState,useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from './context/ContextProvider';
import axios from "axios";
import SideBar from "./SideBar";
import jwt_decode from "jwt-decode"

const Register = () => {
  const[getCategory,setGetCategory]= useState([]);
  let navigate = useHistory()

  const loadCategory = async () => {
     const result = await fetch("http://localhost:8000/category/list", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
      const data = await result.json();
      console.log(data[1]._id);
      //setGetCategory(data[0]._id);
    //console.log(getCategory);
        
  };
  useEffect(() => {
    loadCategory();

    let token = localStorage.getItem("token");
    if(token){
    var decoded = jwt_decode(token);
   
    
    }else{
    navigate.push('/LoginAdmin')
    }
    
  }, []);
    const { udata, setUdata } = useContext(adddata);
    const [file, setFile] = useState("");
    const [slim, setSlim] = useState("");
    const [error, setError] = useState("");
    const [filename, setFilename] = useState(
        "Images or documents that might be helpful in describing your product"
      )

 

    const [inpval, setINP] = useState({
        title: "",
        price: "",
        cat: "",
        image: "",
        description:"",
        qty:"",
        info:""

    })
    const {
       
        title,
        price,
        cat,
        image,
        description,
        info,
        qty
      } = inpval;

    const history = useHistory("");
  
    const onChangeUpload = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
        
        
      };
      

      const onInputChange = (e) => {
        setINP({ ...inpval, [e.target.name]: e.target.value });
     
      };
    const addinpdata = async(e)=>{
        
        e.preventDefault();
        const config = {
          header: {
            "Content-Type": "application/json",
          },
          };

          const fromData = new FormData();
          fromData.append("title", title);
          fromData.append("price", price)
          fromData.append("cat", cat);
          fromData.append("image", file)
          fromData.append("description", description)
          fromData.append("info", info)
          fromData.append("qty", qty)
          console.log(cat);
         
          axios.post(
            "http://localhost:8000/product/add",
             fromData,
             config).then((result) => {
               if(result){
                history.push(`/HomeAdmin`);
               }
             }).catch((err)=>{
               setError(err.response.data.error);
                 setTimeout(() => {
                   setError("");
                 }, 5000);
               
             })
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
                              value={title}
                              onChange={(e) => onInputChange(e)}
                             
                              required
                            />
                          </div>
                        </div>

                        

                        <div class="col-xl-6">
                          <div class="submit-field">
                            <h5>Product Category</h5>

                            <select
                              name="cat"
                              onChange={(e) => onInputChange(e)}
                              title="Select Category"
                            >
                              <option value="">
                                --Please choose a category
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
                                    placeholder="Price"
                                    name="price"
                                    value={price}
                                    onChange={(e) => onInputChange(e)}
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
                                    value={qty}
                                    onChange={(e) => onInputChange(e)}
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
                              value={description}
                              onChange={(e) => onInputChange(e)}
                              required
                            />
                             <h5>Product Infomations</h5>
                            <textarea
                              cols="30"
                              rows="5"
                              class="with-border"
                              name="info"
                              value={info}
                              onChange={(e) => onInputChange(e)}
                              required
                            />
                            
                            <div class="uploadButton margin-top-30">
                              <input
                                class="uploadButton-input"
                                type="file"
                                name="image"
                                value={image}
                                id="upload"
                                multiple
                                onChange={onChangeUpload}
                                required
                              />
                              <label
                                class="uploadButton-button ripple-effect"
                                for="upload"
                              >
                                Upload Files
                              </label>
                              <span class="uploadButton-file-name">
                                {filename}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </form> */}
                </div>

                <div class="col-xl-12">
                  {error && (
                    <div class="notification error closeable">
                      {" "}
                      <p> {error}</p>
                    </div>
                  )}
                  {/* <a href="#" class="button ripple-effect big margin-top-30"><i class="icon-feather-plus"></i> Post a Job</a> */}
                  <button
                  type='submit'
                     onClick={addinpdata}
                    class="button ripple-effect big margin-top-30"
                  >
                    <i class="icon-feather-plus"></i>Add Product{" "}
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
export default Register

