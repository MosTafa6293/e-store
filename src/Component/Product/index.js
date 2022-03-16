import React from "react";
import { Rating, Stack, Button, TextField } from "@mui/material";
import Nav from "../Header";
import './style.css';
import { NavLink } from "react-router-dom";

const details = [
    { name: 'John Smith', rate: 4, comment: 'Good Item to buy' },
    { name: 'Miles Morales', rate: 3, comment: 'Good' },
    { name: 'Saul Godman', rate: 5, comment: 'Very Good Item I recommend it' },
    { name: 'Arthur', rate: 2, comment: 'It is just a bad item do not try it' },
]

const Product = () => {

    return (
        <div>
            <Nav />
            <div className="grid-container">
                <div>
                    <img src="/img/pc.jpg" alt="product" className="prod-img" />
                </div>
                <div className="desc">
                    <h2>Product Name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et pharetra pharetra massa massa. Mattis molestie a iaculis at erat. Non tellus orci ac auctor augue mauris augue neque gravida. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Nisl tincidunt eget nullam non nisi est sit amet. Imperdiet massa tincidunt nunc pulvinar sapien et.</p>
                    <span className="price">Price : 20$</span>
                    <TextField id="outlined" label="Add Comment" className="cmnt" style={{ marginBottom: '20px' }} />
                    <Rating name="half-rating" defaultValue={0} precision={0.5} />
                    <NavLink to="/checkout" className="link">
                        <Button variant="contained">Order</Button>
                    </NavLink>
                </div>
            </div>

            <div className="reveiws">
                <h2>Latest Comments</h2>
                {details.map(({ name, rate, comment }) => (
                    <div className="grid">
                        <div className="item">
                            <img src="/img/man.jpg" />
                        </div>
                        <div className="item">
                            <p className="name">{name}</p>
                            <p className="comment">{comment}</p>
                            <Rating name="half-rating" defaultValue={rate} readOnly />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product;