import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Home from './Home';
import ProductList from './ProductList'
import SignUp from './SignUp'
import SignIn from './SignIn'
import ProductDetail from './ProductDetail'
import AddProduct from './AddProduct'
import UpdateProduct from './updateProduct'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/ProductList">
          <ProductList />
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
        
      </Switch>
    </Router>
    
  );
}

export default App;
