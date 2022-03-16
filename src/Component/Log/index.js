import React from "react";
import { NavLink as Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import './style.css';

const LogIn = () => {
  return (
    <div className='form-container'>
      <Box>
        <h1 style={{marginTop: '100px'}}>Log in</h1>
        <div>
          <TextField required id='outlined-required'
            label='Email' defaultvalue=''
            style={{width: '400px', marginBottom: '25px'}} />
        </div>
        <div>
          <TextField required id='outlined-password-input'
            label='Password' type='password' autoComplete="current-password"
            style={{width: '400px', marginBottom: '25px'}} />
        </div>

        <Link to='/' className='link'>
          <Button variant='contained' type='submit'
          className='form-btn' style={{width: '400px', fontSize: '18px', marginBottom: '25px'}}> Log in </Button>
        </Link>

        <Link to='/regester' className='form-link link'> Create a new account </Link>

      </Box>
    </div>
  )
}

export default LogIn;
