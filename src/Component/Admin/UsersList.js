import React from 'react'
import {
    Paper, Table, TableBody as Body, TableCell as Cell,
    TableContainer as Container, TableHead as Head, TableRow as Row
} from '@mui/material';

const columns = [
    { id: 'id', label: 'ID', minWidth: 100, align: 'center' },
    { id: 'name', label: 'Username', minWidth: 150, align: 'center' },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center' }
];

function createData(id, name, email) {
    return { id, name, email };
};

const rows = [
    createData(1, 'John Smith', 'john@smith.com'),
    createData(2, 'Miles Morales', 'miles@morales.com'),
    createData(3, 'Soul Godman', 'soul@godman.com'),
    createData(4, 'Natalie', 'nata@lie.com'),
    createData(5, 'Gary Oldman', 'gary@oldman.com'),
    createData(6, 'Sophia', 'sop@hia.com')
];

const UsersList = () => {
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

export default UsersList