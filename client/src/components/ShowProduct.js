import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from "axios";

function ShowProduct() {

    const [getuserdata, setUserdata] = useState([]);
    const [avis, setAvis] = useState([]);
    const[img,setImg]= useState("");
    const[stock,setInstock]= useState("");
    const [error, setError] = useState("");

    const { id } = useParams("");
    console.log(id);

    const [inpval, setINP] = useState({
        name: "",
        email: "",
        description:"",
        prod_id:""

    })
    const {
       
        name,
        email,
        description,
        prod_id,
      } = inpval;



    const history = useHistory("");

    const getdata = async (e) => {
       

        const res = await fetch(`http://localhost:8000/product/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            
        });

        const data = await res.json();
        if ( data.qty == 0) {
            setInstock("Out of stock")
          } else {
            setInstock("In stock")
    
        }
        const str1="../../uploads/";
        setImg(str1.concat(data.image)); 
        console.log(data);
       
        if (res.status === 404 || !data) {
            console.log("error ");
        } else {
            setUserdata(data)
            console.log("get data");
        }
    }
    const getavis = async (e) => {
       

        const res = await fetch(`http://localhost:8000/avis/list?prod_id=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            
        });
        console.log(res);
        const data = await res.json();
       
       console.log(data);
       
        if (res.status === 404 || !data) {
            console.log("error ");
            setAvis([])
        } else {
            setAvis(data)
            
        }

    }
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
          fromData.append("name", name);
          fromData.append("email", email)
          fromData.append("description", description)
          fromData.append("prod_id" , id)
          console.log(name);
          console.log(email);
          console.log(description);
          console.log(id);
          console.log(fromData);
          const data = await axios.post(
            "http://localhost:8000/avis/add",
                {"name":name,"email":email,"description" :description,"prod_id":id},
            config
            );
            
            if (data) {
                
                alert('Avis Send')
                window.location.reload(false);
            } else {
                alert('Error')
            }
    }
///////// SEARCH
const [inpvalsearch, setINPSearch] = useState({
       
    textsearch:""

 })
 const {  
     textsearch
   } = inpvalsearch;

   const onSearchChange = (e) => {
     setINPSearch({ ...inpvalsearch, [e.target.name]: e.target.value });
  
   };

   const onSearch = (e) => {
    
     history.push(`/search/${textsearch}`);
   };
///////// SEARCH

    useEffect(()=>{
        getdata();
        getavis();
    },[])
    
    
  return (
   <React.Fragment>
     <link rel="stylesheet" href="/temp-assets/css/bootstrap.min.css" type="text/css" ></link>
    <link rel="stylesheet" href="/temp-assets/css/font-awesome.min.css" type="text/css" ></link>
    <link rel="stylesheet" href="/temp-assets/css/elegant-icons.css" type="text/css" ></link>
    <link rel="stylesheet" href="/temp-assets/css/nice-select.css" type="text/css" ></link>
    <link rel="stylesheet" href="/temp-assets/css/jquery-ui.min.css" type="text/css" ></link>
    <link rel="stylesheet" href="/temp-assets/css/owl.carousel.min.css" type="text/css"></link>
    <link rel="stylesheet" href="/temp-assets/css/slicknav.min.css" type="text/css"></link>
    <link rel="stylesheet" href="/temp-assets/css/style.css" type="text/css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet"></link>


   




    <div class="humberger__menu__overlay" style={{marginTop:"50px"}}></div>
    <div class="humberger__menu__wrapper">
        <div class="humberger__menu__logo">
            <a href="#"><img src="img/logo.png" alt="" /></a>
        </div>
        <div class="humberger__menu__cart">
            <ul>
                <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
                <li><a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
            </ul>
            <div class="header__cart__price">item: <span>$150.00</span></div>
        </div>
        <div class="humberger__menu__widget">
            <div class="header__top__right__language">
                <img src="img/language.png" alt="" />
                <div>English</div>
                <span class="arrow_carrot-down"></span>
                <ul>
                    <li><a href="#">Spanis</a></li>
                    <li><a href="#">English</a></li>
                </ul>
            </div>
            <div class="header__top__right__auth">
                <a href="#"><i class="fa fa-user"></i> Login</a>
            </div>
        </div>
        <nav class="humberger__menu__nav mobile-menu">
            <ul>
                <li class="active"><a href="./index.html">Home</a></li>
                <li><a href="./shop-grid.html">Shop</a></li>
                <li><a href="#">Pages</a>
                    <ul class="header__menu__dropdown">
                        <li><a href="./shop-details.html">Shop Details</a></li>
                        <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                        <li><a href="./checkout.html">Check Out</a></li>
                        <li><a href="./blog-details.html">Blog Details</a></li>
                    </ul>
                </li>
                <li><a href="./blog.html">Blog</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div class="header__top__right__social">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-pinterest-p"></i></a>
        </div>
        <div class="humberger__menu__contact">
            <ul>
                <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
                <li>Free Shipping for all Order of $99</li>
            </ul>
        </div>
    </div>
   
   
    
  
    <section class="hero hero-normal" style={{backgroundColor:"white"}}>
        <div class="container" style={{marginLeft:"275px"}}>
            
            <div class="row">
            <div class="col-lg-3 ">
            <div class="header__logo" style={{marginTop:"-20px",marginLeft:"-220px"}}>
                        <a href="/"><img width="170" src="/assets/images/logo.png" alt=""/></a>
                        </div>
                        </div>


                <div class="col-lg-9" style={{marginLeft:"-200px"}}>
                    <div class="hero__search">
                        <div class="hero__search__form">
                        <form action="#">
                               
                               <input type="text" placeholder="What do yo u need?" style={{width:"650px"}} name="textsearch" onChange={(e) => onSearchChange(e)}/>
                               <button type="submit" class="site-btn" onClick={(e) => onSearch(e)} >SEARCH </button>

                           </form>
                        </div>
                        <div class="hero__search__phone">
                        <Link to={"/favoris"}>
                            <div class="hero__search__phone__icon">
                                <i class="fa fa-heart"></i>
                            </div>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
   

    
    <section class="breadcrumb-section set-bg" style={{backgroundImage: `url("/assets/images/computer.jpg")`}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                    <Link  to={`/`} > <h2>Our Tek</h2> </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="product-details spad" style={{backgroundColor:"white"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__pic">
                        <div class="product__details__pic__item">
                            <img class="product__details__pic__item--large"
                                src={img} alt="" />
                        </div>
                      
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__text">
                        <h3>{getuserdata.title}</h3>
                        <div class="product__details__rating">
                            
                            <span>({avis.length} reviews)</span>
                        </div>
                        <div class="product__details__price">{getuserdata.price} TND</div>
                      
                        <p>{getuserdata.cat}</p>
                      
                   
                        <ul style={{marginTop:"-15px"}}>
                            <li><b>Quantity</b> <span>{getuserdata.qty}</span></li>

                            <li><b>Availability</b> <span>{stock}</span></li>
                          
                            
                           
                        </ul>
                    </div>
                </div>
               
                <div class="col-lg-12" >
                    <div class="product__details__tab" style={{width:"1300px",marginLeft:"-100px"}}>
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                    aria-selected="true">Informations</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                    aria-selected="false">Description</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                                    aria-selected="false">Post A Review</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab"
                                    aria-selected="false">ALL Reviews</a>
                            </li>
                          
                        </ul>
                        <div class="tab-content" style={{marginLeft:"100px"}}>
                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>Products Infomations</h6>
                                    <p>{getuserdata.info}</p>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>Products Descriptions</h6>
                                    <p>{getuserdata.description}</p>
                                </div>
                            
                           
                            </div>
                            <div class="tab-pane" id="tabs-3" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>Avis Clients</h6>
                                    <form >
                                <div class="submit-field" style={{width:"250px"}}>
                            <h5>Name</h5>
                            <input
                              type="text"
                              class="with-border"
                              name="name"
                              
                              value={name}
                              onChange={(e) => onInputChange(e)}
                             
                              required
                            />
                          </div>
                          <div class="submit-field" style={{width:"250px"}}>
                            <h5>Email</h5>
                            <input
                              type="text"
                              class="with-border"
                              name="email"
                              
                              value={email}
                              onChange={(e) => onInputChange(e)}
                             
                              required
                            />
                          </div>
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
                            <button
                            type='submit'
                            onClick={addinpdata}
                            class="button ripple-effect big margin-top-30"
                            >
                             Post Rate{" "}
                  </button>
                          </form>
                                </div>
                            
                              
                            </div>
                            <div class="tab-pane" id="tabs-4" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>ALL Avis</h6>
                                    <table class="table">
                        <thead>
                            <tr className='table-info'>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Description</th>
                              
                            </tr>
                        </thead>
                        <tbody>

{
    
    
    avis.map((element, id) => {
        return (
            <>
                <tr>
                    
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.description}</td>
                   
                  
                </tr>
            </>
        )
    })
}
</tbody>
                    </table>
                                </div>
                            
                           
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  


    <script src="./js/jquery-3.3.1.min.js" type="text/javascript"></script>
    <script src="./js/bootstrap.min.js" type="text/javascript"></script>
    <script src="./js/jquery.nice-select.min.js" type="text/javascript"></script>
    <script src="./js/jquery-ui.min.js" type="text/javascript"></script>
    <script src="./js/jquery.slicknav.js" type="text/javascript"></script>
    <script src="./js/mixitup.min.js" type="text/javascript"></script>
    <script src="./js/owl.carousel.min.js" type="text/javascript"></script>
    <script src="./js/main.js" type="text/javascript"></script>
   </React.Fragment>
  )
}

export default ShowProduct