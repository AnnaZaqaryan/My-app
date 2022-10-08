
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDelateId, changeIsQualified, changeMake, changePage, changeSort, deleteCars, exportData, getAllCars, getAllMakes, removeDelatedId, selectAllMakeFilterValues, selectCarPage, selectFilterParam } from '../car/carSlice';

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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars())
    dispatch(getAllMakes())
  }, []);


  const handleDelateCheckbox = (event, id) => {
    console.log("idddd " + id);
    console.log("evtn  " + event.target.checked)
    if (event.target.checked) {

      dispatch(addDelateId(id))
    } else {
      dispatch(removeDelatedId(id))
    }
  };

  const columns = [
    {
      field: 'id', headerName: '', width: 80,
      renderCell: (params) => (
        <Checkbox
          onChange={event => handleDelateCheckbox(event, params.row.id)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      ),
    },
    {

      field: 'make', headerName: 'Make', width: 80,
      renderCell: (params) => (
        <a href={`${params.row.carUrl}`} target="_blank">{params.row.make}</a>
      ),
    },
    {
      field: 'year', headerName: 'Year',
      renderCell: (params) => (
        <Tooltip title={params.row.year} >
          <span className="table-cell-trucate">{params.row.year}</span>
        </Tooltip>
      ),
    },
    {
      field: 'model', headerName: 'Model', width: 90,
      renderCell: (params) => (
        <Tooltip title={params.row.model} >
          <span className="table-cell-trucate">{params.row.model}</span>
        </Tooltip>
      ),
    },
    {
      field: 'style', headerName: 'Style', width: 330,
      renderCell: (params) => (
        <Tooltip title={params.row.style} >
          <span className="table-cell-trucate">{params.row.style}</span>
        </Tooltip>
      ),
    },
    {
      field: 'vin', headerName: 'VIN', width: 200,

      renderCell: (params) => (
        <Tooltip title={params.row.vin} >
          <span className="table-cell-trucate">{params.row.vin}</span>
        </Tooltip>
      ),
    },
    {
      field: 'mileageKm', headerName: 'KMs', width: 100,
      renderCell: (params) => (
        <Tooltip title={params.row.mileageKm} >
          <span className="table-cell-trucate">{params.row.mileageKm}</span>
        </Tooltip>
      ),
    },
    {
      field: 'mileageMile', headerName: 'Miles', width: 100,
      renderCell: (params) => (
        <Tooltip title={params.row.mileageMile} >
          <span className="table-cell-trucate">{params.row.mileageMile}</span>
        </Tooltip>
      ),
    },
    {
      field: 'priceCad', headerName: 'Website Price (CAD)', width: 150,
      renderCell: (params) => (
        <Tooltip title={params.row.priceCad} >
          <span className="table-cell-trucate">{params.row.priceCad}</span>
        </Tooltip>
      ),
    },
    {
      field: 'priceUsd', headerName: 'Price Usd', width: 100,
      renderCell: (params) => (
        <Tooltip title={params.row.priceUsd} >
          <span className="table-cell-trucate">{params.row.priceUsd}</span>
        </Tooltip>
      ),
    },
    {
      field: 'mmrPriceUsd', headerName: 'MMR PriceUsd', width: 130,
      renderCell: (params) => (
        <Tooltip title={params.row.mmrPriceUsd} >
          <span className="table-cell-trucate">{params.row.mmrPriceUsd}</span>
        </Tooltip>
      ),
    },
    {
      field: 'convertedRate', headerName: 'MMR Price (USD)', width: 130,
      renderCell: (params) => (
        <Tooltip title={params.row.convertedRate} >
          <span className="table-cell-trucate">{params.row.convertedRate}</span>
        </Tooltip>
      ),
    },
    {
      field: 'convertedPrice', headerName: 'Logic Price (CAD)', width: 150,
      renderCell: (params) => (
        <Tooltip title={params.row.convertedPrice} >
          <span className="table-cell-trucate">{params.row.convertedPrice}</span>
        </Tooltip>
      ),
    },

    {
      field: 'isQualified', headerName: 'isQualified', width: 100,
      renderCell: (params) => (
        <Tooltip title={params.row.isQualified} >
          <span className="table-cell-trucate">{'' + params.row.isQualified}</span>
        </Tooltip>
      ),
    },
    {
      field: 'qualifiedTime', headerName: 'Qualified Time', width: 130,
      renderCell: (params) => (
        <Tooltip title={params.row.qualifiedTime} >
          <span className="table-cell-trucate">{params.row.qualifiedTime}</span>
        </Tooltip>
      ),
    },
    {
      field: 'scrapedTime', headerName: 'Crawl Time', width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row.scrapedTime} >
          <span className="table-cell-trucate">{params.row.scrapedTime}</span>
        </Tooltip>
      ),
    },
  ];

  const rows = page.listings;

  function handleChange(event) {
    dispatch(changeIsQualified(event.target.checked))
  }

  function handDelete(event) {
    dispatch(deleteCars())
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <CalcParamComponent />
        </Grid>
        <Grid item xs={6} md={4}>
          <CrawlerParamComponent />
        </Grid>
        <Grid item xs={6} md={4}>
          <CrawlerStatusComponent />
        </Grid>
      </Grid>

      <div style={{ height: 700, width: '100%', fontSize: '18px' }}>
        <div className='car_component'>
          <div className="car_component_item">
            Make <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterParams.make}
              label="Make"
              // defaultValue={''}
              className="car_component_select"
              onChange={event => dispatch(changeMake(event.target.value))}
            >
              <MenuItem key={'All'} value={''}>{'All'}</MenuItem>
              {makeValues.map(e => <MenuItem key={e} value={e}>{e}</MenuItem>)}
            </Select>
            Is Qualified <Checkbox
              checked={filterParams.isQualified}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </div>

      <div>
      <Button variant="outlined" color="error" onClick={handDelete}>Delete</Button>
      <Button variant="outlined" className="add_btn" onClick={e => dispatch(exportData())}>Export</Button>

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
