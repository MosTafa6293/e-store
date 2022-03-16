import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { NavLink as Link } from "react-router-dom";
import Nav from "../Header";

const Profile = () => {

    return (
        <div className='form-container'>
            <Box>
                <h1>Profile</h1>
                <div>
                    <TextField required id='outlined-required'
                        label='Username' defaultvalue=''
                        style={{ width: '400px', marginBottom: '40px' }} />
                </div>
                <div>
                    <TextField required id='outlined-required'
                        label='Email' defaultvalue=''
                        style={{ width: '400px', marginBottom: '40px' }} />
                </div>
                <div>
                    <TextField required id='outlined-password-input'
                        label='Password' type='password' autoComplete="current-password"
                        style={{ width: '400px', marginBottom: '40px' }} />
                </div>
                <div>
                    <TextField required id='outlined-password-input'
                        label='Confirm Password' type='password' autoComplete="current-password"
                        style={{ width: '400px', marginBottom: '40px' }} />
                </div>
            </Box>
        </div>
    )
}

export default Profile;