import { Box, TextField, Button } from '@mui/material'
import React from 'react'
import Nav from '../Header'

const AddProduct = () => {
    return (
        <div>
            <Nav />
            <Box className='add-inputs'>
                <h1 style={{ marginTop: '100px' }}>Add Product</h1>
                <div>
                    <TextField required id='outlined-required'
                        label='ID' defaultvalue=''
                        style={{ width: '400px', marginBottom: '25px' }} />
                </div>
                <div>
                    <TextField required id='outlined-input'
                        label='name' autoComplete="current-password"
                        style={{ width: '400px', marginBottom: '25px' }} />
                </div>
                <div>
                    <TextField required id='outlined-input'
                        label='Quantity' autoComplete="current-password"
                        style={{ width: '400px', marginBottom: '25px' }} />
                </div>

                <Button variant='contained' type='submit'
                    className='form-btn' style={{ width: '400px', fontSize: '18px', marginBottom: '25px' }}> Add Product </Button>
            </Box>
        </div>
    )
}

export default AddProduct