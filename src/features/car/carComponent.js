
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDelateId, changeCountry, changeFoundKey, changeIsQualified, changeMake, changePage, changeSort, deleteCars, exportData, getAllCars, getAllCountry, getAllMakes, removeDelatedId, selectAllCountryValues, selectAllMakeFilterValues, selectCarPage, selectFilterParam } from '../car/carSlice';

import { DataGrid } from '@mui/x-data-grid';

import { Button, Checkbox, Grid, InputLabel, MenuItem, Select, Tooltip } from '@mui/material';
import { CalcParamComponent } from '../calcParams/calcParamComponent';
import { CrawlerParamComponent } from '../crawlerParams/crawlerParamComponent';

import { CrawlerStatusComponent } from '../crawlerStatus/crawlerStatusComponent';

import './styles.css';


export function CarComponent() {

  const page = useSelector(selectCarPage);
  const filterParams = useSelector(selectFilterParam);
  const makeValues = useSelector(selectAllMakeFilterValues);
  const countryValues = useSelector(selectAllCountryValues);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars())
    dispatch(getAllCountry())
    // dispatch(getAllMakes())
  }, []);


  const handleDelateCheckbox = (event, id) => {

    if (event.target.checked) {

      dispatch(addDelateId(id))
    } else {
      dispatch(removeDelatedId(id))
    }
  };

  const columns = [
    // {
    //   field: 'id', headerName: '', width: 80,
    //   renderCell: (params) => (
    //     <Checkbox
    //       onChange={event => handleDelateCheckbox(event, params.row.id)}
    //       inputProps={{ 'aria-label': 'controlled' }}
    //     />
    //   ),
    // },
    {
      field: 'id', headerName: 'id', width: 130,
      renderCell: (params) => (
        <Tooltip title={params.row.id} >
          <span className="table-cell-trucate">{params.row.id}</span>
        </Tooltip>
      ),
    },
    {
      field: 'webUrl', headerName: 'webUrl', width: 230,
      renderCell: (params) => (
        <Tooltip title={params.row.webUrl} >
          <span className="table-cell-trucate">{params.row.webUrl}</span>
        </Tooltip>
      ),
    },
    {
      field: 'country', headerName: 'country', width: 90,
      renderCell: (params) => (
        <Tooltip title={params.row.country} >
          <span className="table-cell-trucate">{params.row.country}</span>
        </Tooltip>
      ),
    },
    {
      field: 'countryFlag', headerName: 'countryFlag', width: 90,
      renderCell: (params) => (
        <Tooltip title={params.row.countryFlag} >
          <span className="table-cell-trucate">{params.row.countryFlag}</span>
        </Tooltip>
      ),
    },
    {
      field: 'created', headerName: 'created', width: 90,
      renderCell: (params) => (
        <Tooltip title={params.row.created} >
          <span className="table-cell-trucate">{params.row.created}</span>
        </Tooltip>
      ),
    }
  
  ];


  const rows = page.websites;

  function handleChange(event) {
    dispatch(changeIsQualified(event.target.checked))
  }

  function handDelete(event) {
    dispatch(deleteCars())
  }

  return (
    <>
      <Grid container spacing={2}>
        {/* <Grid item xs={6} md={4}>
          <CalcParamComponent />
        </Grid> */}
        <Grid item xs={6} md={4} xl={6}>
          <CrawlerParamComponent />
        </Grid>
        <Grid item xs={6} md={4} xl={6}>
          <CrawlerStatusComponent />
        </Grid>
      </Grid>

      <div style={{ height: 700, width: '100%', fontSize: '18px' }}>
        <div className='car_component'>
          <div className="car_component_item">
            Country <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterParams.country}
              label="Make"
              // defaultValue={''}
              className="car_component_select"
              onChange={event => dispatch(changeCountry(event.target.value))}
            >
              <MenuItem key={'All'} value={''}>{'All'}</MenuItem>
              {countryValues.map(e => <MenuItem key={e} value={e}>{e}</MenuItem>)}
            </Select>

            Found key  <input  className="car_component_input" onChange={event => dispatch(changeFoundKey(event.target.value))}></input>
            {/* 
            Is Qualified <Checkbox
              checked={filterParams.isQualified}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            /> */}
          </div>

      <div>
      {/* <Button variant="outlined" color="error" onClick={handDelete}>Delete</Button> */}
      <Button variant="outlined" className="add_btn" onClick={e => dispatch(exportData())}>Export</Button>

      </div>
        </div>
        <DataGrid
          rows={rows}
          rowCount={page.total}
          page={1}
          columns={columns}
          pageSize={10}
          paginationMode="server"
          pagination
          onPageChange={(newPage) => dispatch(changePage(newPage))}

          onSortModelChange={(model) => {
            const s = {
              field: model[0].field,
              dir: model[0].sort
            };
            dispatch(changeSort(s));
          }}
        />
      </div>
    </>
  );
}
