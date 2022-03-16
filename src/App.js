import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LogIn from "./Component/Log/index.js"
import Signup from "./Component/Log/index2.js"
import Home from "./Component/Home/index.js"
import Product from "./Component/Product";
import Checkout from "./Component/Checkout";
import Profile from "./Component/Profile";
import Admin from "./Component/Admin/Admin";
import OrderList from "./Component/Lists/orderList";
import AdminOrderList from "./Component/Admin/AdminOrderList";
import AddProduct from "./Component/Admin/AddProduct";
import ProductList from "./Component/Admin/ProductList";
import UsersList from "./Component/Admin/UsersList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/regester' element={<Signup />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/product' element={<Product />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/orderlist' element={<OrderList />} />
            <Route path='/adminorderlist' element={<AdminOrderList />} />
            <Route path='/productlist' element={<ProductList />} />
            <Route path='/userslist' element={<UsersList />} />
            <Route path='/addproduct' element={<AddProduct />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
