
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


import Register from './components/Register';
import {Switch,Route} from "react-router-dom"
import Edit from './components/Edit';




import FavorisListe from './components/FavorisListe';

import Home from './components/Home';
import ShowProduct from './components/ShowProduct';
import ProductByCategory from './components/ProductByCategory';
import EspaceAdmin from './components/EspaceAdmin';
import LoginAdmin from './components/LoginAdmin';
import Dashboard from './components/Dashboard';
import Search from './components/Search';
function App() {
  return (
    <>
    
    
    <Switch> 
      <Route exact path="/" component={Home} />
      <Route exact path="/viewproduct/:id" component={ShowProduct} />
      <Route exact path="/listproductbycat/:id" component={ProductByCategory} />
      <Route exact path="/search/:id" component={Search} />

      <Route exact path="/listproductbycat/viewproduct/:id" component={ShowProduct} />
      <Route exact path="/HomeAdmin" component={EspaceAdmin} />
      <Route exact path="/LoginAdmin" component={LoginAdmin} />
      <Route exact path="/Dashborad" component={Dashboard} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/favoris" component={FavorisListe} />
    </Switch>
  

    
    </>
  );
}

export default App;
