import React from "react";
import { NavLink as Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import './style.css';

const Signup = () => {
  return (
    <div className='form-container'>
      <Box>
        <h1>Sign up</h1>
        <div>
          <TextField required id='outlined-required'
            label='Username' defaultvalue=''
            style={{ width: '400px', marginBottom: '20px' }} />
        </div>
        <div>
          <TextField required id='outlined-required'
            label='Email' defaultvalue=''
            style={{ width: '400px', marginBottom: '20px' }} />
        </div>
        <div>
          <TextField required id='outlined-password-input'
            label='Password' type='password' autoComplete="current-password"
            style={{ width: '400px', marginBottom: '20px' }} />
        </div>
        <div>
          <TextField required id='outlined-password-input'
            label='Confirm Password' type='password' autoComplete="current-password"
            style={{ width: '400px', marginBottom: '20px' }} />
        </div>

        <Link to='/login' className='link'>
          <Button variant='contained' type='submit'
            className='form-btn' style={{ width: '400px', fontSize: '18px' }}> Regester </Button>
        </Link>

        <Link to='/login' className='form-link link'> Already has an account </Link>

      </Box>
    </div>
  )
}

export default Signup;
