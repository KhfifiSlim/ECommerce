import React,{useEffect,useState,useContext }from 'react'
import { NavLink } from 'react-router-dom'
import { adddata,deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider';
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import OwlCarousel from 'react-owl-carousel';


function Home() {
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
        /*
        else{
        navigate.push('/Login')
        }
        */
      }, []);

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



    const getdata = async (e) => {
       

        const res = await fetch("http://localhost:8000/product/list?limit=8", {
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

    <div class="humberger__menu__wrapper" >
        <div class="humberger__menu__logo">
            <a href="#"><img src={"/temp-assets/img/logo.png"} alt="" /></a>
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
                <img src={`./language.png`}  alt=""  />
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
    
    </div>

   
    <section class="hero" style={{backgroundColor:"white"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                <div class="header__logo" style={{marginTop:"-20px"}}>
                        <a href="/"><img width="170" src="/assets/images/logo.png" alt=""/></a>
                    </div>

                    <div class="hero__categories">
                        <div class="hero__categories__all">
                            <i class="fa fa-bars"></i>
                            <span>All Categories</span>
                        </div>
                        <ul>
                            <li><a href="/listproductbycat/63c6d7046e9a121b87be4a04">Laptop Gamers</a></li>
                            <li><a href="/listproductbycat/63c6d72a6e9a121b87be4a06">Laptop Pro</a></li>
                            <li><a href="/listproductbycat/63c6d7326e9a121b87be4a08">Laptop en promotion</a></li>
                            <li><a href="/listproductbycat/63c6d73a6e9a121b87be4a0a">PC Gamers</a></li>
                            <li><a href="/listproductbycat/63c6d7426e9a121b87be4a0c">PC Pro</a></li>
                            <li><a href="/listproductbycat/63c6d74a6e9a121b87be4a0e">PC en promotion</a></li>
                           
                        </ul>
                    </div>
                </div>

                <div class="col-lg-9">
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
                    <div class="hero__item set-bg" style={{backgroundImage: `url("/assets/images/computers.jpg")`}}>
                        <div class="hero__text" style={{marginLeft:"-40px",marginTop:"-240px"}}>
                            <span>TOP PC's</span>
                            <h2>OUR TEK </h2>
                            <p style={{color:"black"}}> Free Pickup and Delivery Available</p>
                            <a href="#" class="primary-btn">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section class="categories" style={{backgroundColor:"white"}}>
    <div class="section-title">
                        <h2>Our Categories</h2>
                    </div>
        <div class="container">
            <div class="row">
               <OwlCarousel autoplay={true} loop={true} autoplayTimeout={2000} margin={10}>
                        
                       

                        <div class="categories__item set-bg" style={{backgroundImage: `url("/assets/images/pc-gamers.jpg")`}}>
                            <h5><a href="/listproductbycat/63c6d7046e9a121b87be4a04">Laptop Gamers</a></h5>
                        </div>
                        <div class="categories__item set-bg" style={{backgroundImage: `url("/assets/images/laptop_pro.jpg")`}}>
                            <h5><a href="/listproductbycat/63c6d72a6e9a121b87be4a06">Laptop Pro</a></h5>
                        </div>
                        <div class="categories__item set-bg" style={{backgroundImage: `url("/assets/images/22.jpeg")`}}>
                            <h5><a href="/listproductbycat/63c6d7326e9a121b87be4a08">Laptop en promotion</a></h5>
                        </div>
                  
                        <div class="categories__item set-bg" style={{backgroundImage: `url("/assets/images/laptopGAMER.jpg")`}}>
                            <h5><a href="/listproductbycat/63c6d73a6e9a121b87be4a0a">PC Gamers</a></h5>
                        </div>
                  
                           
                    
                        <div class="categories__item set-bg" style={{backgroundImage: `url("/assets/images/pc-pro.jpg")`}}>
                            <h5><a href="/listproductbycat/63c6d7426e9a121b87be4a0c">PC Pro</a></h5>
                        </div>
                   
                  
                        <div class="categories__item set-bg" style={{backgroundImage: `url("/assets/images/aa.png")`}}>
                            <h5><a href="/listproductbycat/63c6d74a6e9a121b87be4a0e">PC en promotion</a></h5>
                        </div>
            
                    </OwlCarousel>
            </div>
        </div>
    </section>
  
    <section class="featured spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Featured Product</h2>
                    </div>
                  
                </div>
            </div>
            <div class="row featured__filter">

            {
    products.filter((product)=>{
        if (searchTerm == "") {
            return product
          }
          let title;
       
            title = product.title;
                               
           if (title.includes(searchTerm)) {
           return product
          }
    })
    
    .map((element, index) => (

                <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <div class="featured__item">
                    <Link  to={`viewproduct/${element._id}`}>
                        <div class="featured__item__pic set-bg" style={{backgroundImage: `url(${str1.concat(element.image)})`}}>
                            
                        </div>
                        </Link>
                        <div class="featured__item__text">
                            <h6><a href="#">{element.title}</a></h6>
                            <h5>{element.price} TND</h5>
                        </div>
                    </div>
                </div>
))}
               
                
                
               
               
               
               
            </div>
        </div>
    </section>
   
    
   
    
 
   
  
   
    






    </React.Fragment>
    
  )
}

export default Home