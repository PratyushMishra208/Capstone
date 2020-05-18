import React,{lazy,Suspense} from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './Header'
import Home from './Home';
// import ProductList from './ProductList'
import SignUp from './SignUp'
import SignIn from './SignIn'
import ProductDetail from './ProductDetail'
import AddProduct from './AddProduct'
import UpdateProduct from './updateProduct'
import Footer from './Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import About from './About';
 const ProductList =lazy(()=>import('./ProductList'))

 
 function App() {
  return (
    
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/ProductList">
          <Suspense fallback={<div>Please Wait...! We Processed your request</div>}>
             <ProductList />
          </Suspense>
         
        </Route>
        <Route path="/Add Product">
          <AddProduct />
        
        </Route>
        <Route path="/Update Product">
          <UpdateProduct />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/ProductDetail">
          <ProductDetail />
        </Route>
        <Route path="/AboutUs">
          <About />
        </Route>
        
      </Switch>
     
      <Footer />
    </Router>
  
    
  );
}



export default App;
