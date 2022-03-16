import { Button, TextField } from "@mui/material";
import { Edit } from "@mui/icons-material";
import React from "react";
import Nav from "../Header";
import './admin.css'
import { NavLink } from "react-router-dom";

const Admin = () => {

    return (
        <div>
            <Nav />
            <div className="profile">
                <img src="/img/man.jpg" className="profile-img" />
                <div className="details">
                    <p>Admin Name</p>
                    <NavLink to='/addproduct' className='link'>
                        <Button variant="contained" type="submit"
                            style={{ textTransform: 'none', height: '80px', width: '80%', marginBottom: '20px', fontSize: '18px' }}
                        >Add Product</Button>
                    </NavLink>
                    <NavLink to='/productlist' className='link'>
                        <Button variant="contained" type="submit"
                            style={{ textTransform: 'none', height: '80px', width: '80%', marginBottom: '20px', fontSize: '18px' }}
                        >Product List</Button>
                    </NavLink>
                    <NavLink to='/adminorderlist' className='link'>
                        <Button variant="contained" type="submit"
                            style={{ textTransform: 'none', height: '80px', width: '80%', marginBottom: '20px', fontSize: '18px' }}
                        >Order List</Button>
                    </NavLink>
                    <NavLink to='/userslist' className='link'>
                        <Button variant="contained" type="submit"
                            style={{ textTransform: 'none', height: '80px', width: '80%', marginBottom: '20px', fontSize: '18px' }}
                        >Users List</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Admin;