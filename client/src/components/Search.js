import React,{useEffect,useState,useContext }from 'react'
import { NavLink } from 'react-router-dom'
import { adddata,deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider';
import { Link,useHistory,useParams } from "react-router-dom";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import OwlCarousel from 'react-owl-carousel';


function Search() {

    const { id } = useParams("");
    console.log(id);

    const [searchTerm ='', setSearchTerm] = useState();
    const [products, setProducts] = useState([]);
 
    const str1="/uploads/";
    const [getuserdata, setUserdata] = useState([]);

    const [nb, setnb] = useState([]);

    console.log(getuserdata);

    
    let navigate = useHistory()
    
   
    useEffect(() => {
       

        let token = localStorage.getItem("token");
        if(token){
        var decoded = jwt_decode(token);
       
        
        }
        /*
        else{
        navigate.push('/Login')
        }
        */
      }, []);

      const [inpval, setINP] = useState({
        title: "",
        price: "",
        

    })
      const onInputChange = (e) => {
        //setINP({ ...inpval, [e.target.name]: e.target.value });
        //console.log(inpval);
       
        navigate.push(`${id}?price=`);
        
      };





    const getdata = async (e) => {
       

        const res = await fetch(`http://localhost:8000/product/list?s=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
      

        const data = await res.json();
        setnb(data.length)
        console.log(data.result);
        if (data.result === "No product") {
            console.log("error ");
            setProducts([]);
        } else {
            setUserdata(data);
            setProducts(data);
            console.log("get data");
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
        
         navigate.push(`/search/${textsearch}`);
       };
 ///////// SEARCH
 
    useEffect(()=>{
        getdata();
    },[]);

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


    <script src="./js/jquery-3.3.1.min.js" type="text/javascript"></script>
    <script src="./js/bootstrap.min.js" type="text/javascript"></script>
    <script src="./js/jquery.nice-select.min.js" type="text/javascript"></script>
    <script src="./js/jquery-ui.min.js" type="text/javascript"></script>
    <script src="./js/jquery.slicknav.js" type="text/javascript"></script>
    <script src="./js/mixitup.min.js" type="text/javascript"></script>
    <script src="./js/owl.carousel.min.js" type="text/javascript"></script>
    <script src="./js/main.js" type="text/javascript"></script>



    <div class="humberger__menu__overlay" style={{marginTop:"50px"}}></div>
    
   
 
   

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
    

    <section class="product spad" style={{backgroundColor:"white"}}>
        <div class="container">
            <div class="row">
              
                <div class="col-lg-9 col-md-7">
                    <div class="product__discount">
                        <div class="section-title product__discount__title">
                            <h2>Result</h2>
                        </div>
                     
                       
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                            <div class="filter__found">
                                    <h6><span>{nb}</span> Products found</h6>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 text-right">
                                
<div class="input-with-icon" style={{ width:"300px" , marginLeft : "2px" , marginTop : "2.5px"}} >
<input type="text" placeholder="Search" style={{ width : "300px" , marginTop:"-25px"}} 
      onChange={(event) =>{
      setSearchTerm(event.target.value)
      }}
      />
                      <i class="icon-material-outline-search"></i>
                  </div>
    
</div>
                        </div>
                 
                    
                    </div>
                    <div class="row">
                    {
    products.filter((product)=>{
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
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product__item">
                            <Link  to={`viewproduct/${element._id}`}>
                                <div class="product__item__pic set-bg" style={{backgroundImage: `url(${str1.concat(element.image)})`}}>
                                 
                                </div>
                                </Link>
                                <div class="product__item__text">
                                    <h6><a href="#">{element.title}</a></h6>
                                    <h5>{element.price} TND</h5>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                  
                </div>
            </div>
        </div>
    </section>
    
    
   </React.Fragment>
  )
}

export default Search