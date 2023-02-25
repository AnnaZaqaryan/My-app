
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDelateId, changeCountry, changeFoundKey, changeIsQualified, changeMake, changePage, changeSort, deleteCars, exportData, getAllCars, getAllCountry, getAllMakes, removeDelatedId, selectAllCountryValues, selectAllMakeFilterValues, selectCarPage, selectFilterParam } from '../car/carSlice';

import { DataGrid } from '@mui/x-data-grid';

import { Button, Checkbox, Grid, InputLabel, MenuItem, Select, Tooltip } from '@mui/material';
import { CalcParamComponent } from '../calcParams/calcParamComponent';
import { CrawlerParamComponent } from '../crawlerParams/crawlerParamComponent';

import { CrawlerStatusComponent } from '../crawlerStatus/crawlerStatusComponent';

import './styles.css';
import { getAllKeys, selectAllKeys } from '../key/keySlice';


export function CarComponent() {

  const page = useSelector(selectCarPage);
  const filterParams = useSelector(selectFilterParam);
  //const makeValues = useSelector(selectAllMakeFilterValues);
  const countryValues = useSelector(selectAllCountryValues);
  const kyes =  useSelector(selectAllKeys);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars())
    dispatch(getAllCountry());
    dispatch(getAllKeys())
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

    {
      field: 'first',
      headerAlign: 'center',
      field: 'webUrl', headerName: 'Website', width: 300,
      renderCell: (params) => (
        <Tooltip title={params.row.webUrl} >
          <a href={params.row.webUrl} target='_blank' className="table-cell-trucate">{params.row.id}</a>
        </Tooltip>
      ),
    },
    {
      headerAlign: 'center', field: 'country', headerName: 'Country', width: 240,
      renderCell: (params) => (
        <Tooltip title={params.row.country} >
          <span className="table-cell-trucate">{params.row.country}</span>
        </Tooltip>
      ),
    },
    {
      headerAlign: 'center', field: 'countryFlag', headerName: 'Flag', width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row.countryFlag} >
          <img width='20' height='20' className="table-cell-trucate" src={params.row.countryFlag}></img>
        </Tooltip>
      ),
    },
    {
      headerAlign: 'center', field: 'created', headerName: 'Scraped', width: 230,
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
      <Grid container spacing={2} className="container">
        <Grid item xs={6} md={6} xl={6}>
          <CrawlerParamComponent />
        </Grid>
        <Grid item xs={6} md={6} xl={6}>
          <CrawlerStatusComponent />
        </Grid>
      </Grid>

      <div style={{ height: 700, width: '100%',  maxWidth: '980px',  fontSize: '18px' }}>
        <div className='car_component'>
          <div className="car_component_item">
            Country <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterParams.country}
              label="Make"
              className="car_component_select"
              onChange={event => dispatch(changeCountry(event.target.value))}
            >
              <MenuItem key={'All'} value={''}>{'All'}</MenuItem>
              {countryValues.map(e => <MenuItem key={e} value={e}>{e}</MenuItem>)}
            </Select>

            Found Keyword 
            
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterParams.foundKey}
              label="Make"
              className="car_component_select"
              onChange={event => dispatch(changeFoundKey(event.target.value))}
            >
              <MenuItem key={'All'} value={''}>{'All'}</MenuItem>
              {kyes.map(e => <MenuItem key={e} value={e}>{e}</MenuItem>)}
            </Select>
          </div>

      <div>
      {/* <Button variant="outlined" color="error" onClick={handDelete}>Delete</Button> */}
      <Button  variant="contained" className="add_btn" onClick={e => dispatch(exportData())}>Export</Button>

      </div>
        </div>
        <DataGrid
          rows={rows}
          rowCount={page.total}
          page={filterParams.currentPage}
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
