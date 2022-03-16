import React from "react";
import { NavLink as Link } from "react-router-dom";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import Nav from '../Header';
import Cards from './index2';

const desc = [
  { prod: 'Product one', cat: 'Electronics' },
  { prod: 'Product two', cat: 'Fasion' },
  { prod: 'Product three', cat: 'Accessories' },
  { prod: 'Product four', cat: 'Electronics' },
  { prod: 'Product five', cat: 'Electronics' },
  { prod: 'Product six', cat: 'Electronics' },
  { prod: 'Product seven', cat: 'Accessories' },
  { prod: 'Product eight', cat: 'Accessories' },
  { prod: 'Product nine', cat: 'Fasion' },
];

const Home = () => {
  const [filter, setFilter] = React.useState('');

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Grid container direction="column" className="card-container">
      <Nav />
      <Grid item>
        <FormControl style={{ width: '190px', marginLeft: '260px', marginBottom: '20px' }}>
          <InputLabel id="select-filter">Filter</InputLabel>
          <Select labelId="Filter" id="filter" value={filter} label="Filter" onChange={handleChange}>
            <MenuItem className="filter" value={'Elect'}> Electronics </MenuItem>
            <MenuItem className="filter" value={'Acc'}> Accessories </MenuItem>
            <MenuItem className="filter" value={'Fasion'}> Fasion </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Grid container spacing={6}>
            {desc.map(({ prod, cat }) => (
              <Grid item xs={12} sm={4}>
                <Link to='/product' className="link">
                  <Cards name={prod} kind={cat} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  )
}

export default Home;
