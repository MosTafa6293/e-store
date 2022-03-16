import React from "react";
import { Rating, Stack, Button, TextField } from "@mui/material";
import Nav from "../Header";
import './style.css';
import { NavLink } from "react-router-dom";

const Checkout = () => {

    return (
        <div className="checkout">
            <Nav />
            <div className="grid-container">
                <div>
                    <img src="/img/pc.jpg" alt="product" className="prod-img" />
                </div>
                <div className="desc">
                    <h2>Product Name</h2>
                    <span className="price">Price : 20$</span>
                    <TextField required id="outlined-required" label="Adrress" style={{ marginBottom: '20px', width: '80%' }} />
                    <TextField required id="outlined-required" label="Phone Number" style={{ marginBottom: '20px', width: '80%' }} />
                </div>
            </div>
            <NavLink to="/checkout" className="link">
                <Button variant="contained"
                    style={{ width: '70%', height: '60px', marginLeft: '200px', marginTop: '50px', fontSize: '20px' }}>Checkout</Button>
            </NavLink>
        </div>
    )
}

export default Checkout;