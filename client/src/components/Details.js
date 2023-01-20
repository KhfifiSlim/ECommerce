import React, { useEffect, useState } from 'react'

import { NavLink, useParams, useHistory } from 'react-router-dom';


const Details = () => {

    const [getuserdata, setUserdata] = useState([]);
    const[img,setImg]= useState("");
    


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
        const str1="../uploads/";
        setImg(str1.concat(data.image)); 
        console.log(data);
       
        if (res.status === 404 || !data) {
            console.log("error ");
        } else {
            setUserdata(data)
            console.log("get data");
        }
    }
    useEffect(()=>{
        getdata();
    },[])

  

    return (
        <React.Fragment>

       
<link rel='stylesheet' id='prolancer-style-css' href='../../public/assets/serv/wp-content/themes/prolancer/stylec8d8.css?ver=5.8.3' type='text/css' media='all' />
      <link rel='stylesheet' id='bootstrap-css' href='../../public/assets/serv/style.css' type='text/css' media='all' />
      <link rel='stylesheet' id='prolancer-dashboard-css' href='../../public/assets/serv/wp-content/plugins/prolancer-element/assets/css/dashboardc8d8.css?ver=5.8.3' type='text/css' media='all' />

     

      <div class="col-lg-4 " style={{marginLeft:"860px",marginTop:"130px"}}>
                <div class="widget-area">
                  <div class="service-widget mb-30" style={{height:"550px"}}>
                    <div class="mb-30" >
                      <div class="price-tab" >
                        
                        <div class="tab-content" style={{height:"488px"}}>
                          <div
                            class="tab-pane fade active show"
                            id="tab-0"
                            role="tabpanel"
                          >
                            <h1 class="price" data-price="5">
                              &#36;<span>{getuserdata.price}</span>
                            </h1>
                            <p>
                            {getuserdata.title}
                            </p>
                            <ul class="list-unstyled">
                              <li class="mb-2">
                                <i class="far fa-fw fa-clock"></i>
                                <b>1-{getuserdata.cat}</b>
                              </li>
                              <li>
                                <i class="far fa-fw fa-times"></i>
                                Source File{" "}
                              </li>
                              <li>
                                <i class="far fa-fw fa-check"></i>
                                Social Media Kit{" "}
                              </li>
                              <li>
                                <i class="far fa-fw fa-check"></i>
                                High Resolution{" "}
                              </li>
                              <li>
                                <i class="far fa-fw fa-times"></i>
                                Project Upload{" "}
                              </li>
                            </ul>
                           
                           
                          </div>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                  
                 
                  
                 
                  
    
      
                </div>
              </div>
       

        <div id="wrapper" style={{marginLeft:"-470px",marginTop:"-630px"}}>
          <div class="container">
            <div class="row justify-content-center">

              <div class="col-lg-8">
                <div class="row service-meta-cards mb-3">
                  <div class="col-xl-4 col-md-6">
                    <div class="service-meta">
                      <div class="my-auto">
                        <i class="fad fa-id-card-alt"></i>
                      </div>
                      <div class="my-auto">
                        <span>Delivery Time</span>
                        <h6>1-{getuserdata.title} </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6">
                    <div class="service-meta">
                      <div class="my-auto">
                        <i class="fad fa-language"></i>
                      </div>
                      <div class="my-auto">
                        <span>English Level</span>
                        <h6>{getuserdata.cat}</h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6">
                    <div class="service-meta">
                      <div class="my-auto">
                        <i class="fad fa-globe-europe"></i>
                      </div>
                      <div class="my-auto">
                        <span>Location</span>
                        <h6>{getuserdata.title}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="service-slider">
                  <div>
                    <img
                      
                      src={img}
                      alt="Img"
                     id="detimg"
                    />
                  </div>
                </div>
                

                <div class="service-single-content">
                  <h4 style={{}}>Description</h4>
                  <p>
                   {getuserdata.description}
                  </p>
                 
                  
                </div>

              

                
         
    


        


              </div>
              
            </div>
          </div>
        </div>
      


        <div id="backtotop">
        <i class="fal fa-lg fa-arrow-up"></i>
        <link
          rel="stylesheet"
          id="elementor-frontend-css"
          href="../../public/assets/serv/wp-content/uploads/elementor/css/custom-frontend.min536e.css?ver=1640721044"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-1803-css"
          href="../../public/assets/serv/wp-content/uploads/elementor/css/post-1803536e.css?ver=1640721044"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-css"
          href="../../public/assets/serv/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min05c8.css?ver=5.13.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-1806-css"
          href="../../public/assets/serv/wp-content/uploads/elementor/css/post-1806536e.css?ver=1640721044"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-global-css"
          href="../../public/assets/serv/wp-content/uploads/elementor/css/global536e.css?ver=1640721044"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="e-animations-css"
          href="../../public/assets/serv/wp-content/plugins/elementor/assets/lib/animations/animations.min1aae.css?ver=3.5.3"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="google-fonts-1-css"
          href="https://fonts.googleapis.com/css?family=Rubik%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CPoppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;display=auto&amp;ver=5.8.3"
          type="text/css"
          media="all"
        />
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-includes/js/dist/vendor/regenerator-runtime.minb36a.js?ver=0.13.7"
          id="regenerator-runtime-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-includes/js/dist/vendor/wp-polyfill.min2c7c.js?ver=3.15.0"
          id="wp-polyfill-js"
        ></script>
        <script type="text/javascript" id="contact-form-7-js-extra"></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/contact-form-7/includes/js/index5697.js?ver=5.5.3"
          id="contact-form-7-js"
        ></script>
        <script
          type="text/javascript"
          src="../../../../www.gstatic.com/charts/loaderce14.js?ver=1.0.8"
          id="charts-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/prolancer-element/assets/js/ratingce14.js?ver=1.0.8"
          id="rating-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/prolancer-element/assets/js/sweetalert.mince14.js?ver=1.0.8"
          id="sweetalert-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/prolancer-element/assets/js/select2.mince14.js?ver=1.0.8"
          id="prolancer-select2-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/prolancer-element/assets/js/cookie.mince14.js?ver=1.0.8"
          id="cookie-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/prolancer-element/assets/js/pluginsce14.js?ver=1.0.8"
          id="prolancer-plugins-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-includes/js/jquery/ui/core.min35d0.js?ver=1.12.1"
          id="jquery-ui-core-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-includes/js/jquery/ui/mouse.min35d0.js?ver=1.12.1"
          id="jquery-ui-mouse-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-includes/js/jquery/ui/sortable.min35d0.js?ver=1.12.1"
          id="jquery-ui-sortable-js"
        ></script>
        <script type="text/javascript" id="prolancer-app-js-extra"></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/prolancer-element/assets/js/appce14.js?ver=1.0.8"
          id="prolancer-app-js"
        ></script>
        <script type="text/javascript" id="prolancer-main-js-extra"></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/themes/prolancer/assets/js/maince14.js?ver=1.0.8"
          id="prolancer-main-js"
        ></script>
        <script type="text/javascript" id="prolancer-plugin-js-extra"></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/prolancer-element/assets/js/plugince14.js?ver=1.0.8"
          id="prolancer-plugin-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/prolancer-element/inc/mega-menu/assets/js/mega-menuce14.js?ver=1.0.8"
          id="prolancer-mega-menu-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.mine7fe.js?ver=2.7.0-wc.6.1.0"
          id="jquery-blockui-js"
        ></script>
        <script type="text/javascript" id="wc-add-to-cart-js-extra"></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min42c6.js?ver=6.1.0"
          id="wc-add-to-cart-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.minfaf0.js?ver=2.1.4-wc.6.1.0"
          id="js-cookie-js"
        ></script>
        <script type="text/javascript" id="woocommerce-js-extra"></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min42c6.js?ver=6.1.0"
          id="woocommerce-js"
        ></script>
        <script type="text/javascript" id="wc-cart-fragments-js-extra"></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min42c6.js?ver=6.1.0"
          id="wc-cart-fragments-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/themes/prolancer/assets/js/bootstrap.mince14.js?ver=1.0.8"
          id="bootstrap-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/themes/prolancer/assets/js/jquery.magnific-popup.mince14.js?ver=1.0.8"
          id="magnific-popup-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/themes/prolancer/assets/js/skip-link-focus-fixce14.js?ver=1.0.8"
          id="prolancer-skip-link-focus-fix-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-includes/js/wp-embed.minc8d8.js?ver=5.8.3"
          id="wp-embed-js"
        ></script>
        <script
          type="text/javascript"
          defer
          src="../../public/assets/serv/wp-content/plugins/mailchimp-for-wp/assets/js/forms81db.js?ver=4.8.6"
          id="mc4wp-forms-api-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/elementor/assets/js/webpack.runtime.min1aae.js?ver=3.5.3"
          id="elementor-webpack-runtime-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/elementor/assets/js/frontend-modules.min1aae.js?ver=3.5.3"
          id="elementor-frontend-modules-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min05da.js?ver=4.0.2"
          id="elementor-waypoints-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/elementor/assets/lib/swiper/swiper.min48f5.js?ver=5.3.6"
          id="swiper-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/elementor/assets/lib/share-link/share-link.min1aae.js?ver=3.5.3"
          id="share-link-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/elementor/assets/lib/dialog/dialog.mind227.js?ver=4.9.0"
          id="elementor-dialog-js"
        ></script>
        <script
          type="text/javascript"
          id="elementor-frontend-js-before"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/elementor/assets/js/frontend.min1aae.js?ver=3.5.3"
          id="elementor-frontend-js"
        ></script>
        <script
          type="text/javascript"
          src="../../public/assets/serv/wp-content/plugins/elementor/assets/js/preloaded-modules.min1aae.js?ver=3.5.3"
          id="preloaded-modules-js"
        ></script>
      </div>
        </React.Fragment>
    )
}

export default Details;