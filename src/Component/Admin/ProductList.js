import React from 'react'
import {
    Paper, Table, TableBody as Body, TableCell as Cell,
    TableContainer as Container, TableHead as Head, TableRow as Row
} from '@mui/material';
import Nav from '../Header';

const columns = [
    { id: 'id', label: 'Product ID', minWidth: 100, align: 'center' },
    { id: 'name', label: 'Product name', minWidth: 150, align: 'center' },
    { id: 'qty', label: 'Qvailable Quantity', minWidth: 170, align: 'center' },
    { id: 'price', label: 'Price', minWidth: 170, align: 'center' }
];

function createData(id, name, qty, price) {
    return { id, name, qty, price };
};

const rows = [
    createData(1, 'Mobile', 1, '100$'),
    createData(2, 'PC', 1, '750$'),
    createData(3, 'Camira', 2, '150$'),
    createData(4, 'Bag', 4, '25$'),
    createData(5, 'Laptop', 1, '600$'),
    createData(6, 'Mouse', 3, '50$'),
    createData(7, 'Jacket', 2, '175$'),
    createData(8, 'Dress', 1, '170$'),
    createData(9, 'Shoes', 1, '40$'),
];

const ProductList = () => {
    return (
        <div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <Container sx={{ maxHeight: '440' }}>
                    <Table stickyHeader aria-label='Orders Table'>
                        <Head>
                            <Row>
                                {columns.map((column) => (
                                    <Cell key={column.id} align={column.align} style={{ minWidth: column.minWidth, fontSize: '20px', fontWeight: 'bold' }}>
                                        {column.label}
                                    </Cell>
                                ))}
                            </Row>
                        </Head>
                        <Body>
                            {rows.map((row) => {
                                return (
                                    <Row hover role='checkbox'>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <Cell key={column.id} align={column.align} style={{ fontSize: '18px' }}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value) : value}
                                                </Cell>
                                            )
                                        })}
                                    </Row>
                                )
                            })}
                        </Body>
                    </Table>
                </Container>
            </Paper>
        </div>
    )
}

export default ProductList