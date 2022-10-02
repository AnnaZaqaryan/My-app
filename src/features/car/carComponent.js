
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsQualified, changeMake, changePage, changeSort, exportData, getAllCars, getAllMakes, selectAllMakeFilterValues, selectCarPage, selectFilterParam } from '../car/carSlice';

import { DataGrid } from '@mui/x-data-grid';

import { Button, Checkbox, Grid, InputLabel, MenuItem, Select, Tooltip } from '@mui/material';
import { CalcParamComponent } from '../calcParams/calcParamComponent';
import { CrawlerParamComponent } from '../crawlerParams/crawlerParamComponent';
// import { ShowCrawlingComponent } from '../showCrawling/showCrawlingComponent';
import './styles.css';
import { CrawlerStatusComponent } from '../crawlerStatus/crawlerStatusComponent';
import { PopupComponent } from '../popup/poupComponent';


export function CarComponent() {

  const page = useSelector(selectCarPage);
  const filterParams = useSelector(selectFilterParam);
  const makeValues = useSelector(selectAllMakeFilterValues);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars())
    dispatch(getAllMakes())

  }, []);


  const columns = [

    {
      field: 'make', headerName: 'Make', width: 80,
      renderCell: (params) => (
        <a href={`${params.row.carUrl}`} target="_blank">{params.row.make}</a>
      )
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
      field: 'vin', headerName: 'Vin', width: 200,

      renderCell: (params) => (
        <Tooltip title={params.row.vin} >
          <span className="table-cell-trucate">{params.row.vin}</span>
        </Tooltip>
      ),
    },
    {
      field: 'mileageKm', headerName: 'Mileage Km', width: 100,
      renderCell: (params) => (
        <Tooltip title={params.row.mileageKm} >
          <span className="table-cell-trucate">{params.row.mileageKm}</span>
        </Tooltip>
      ),
    },
    {
      field: 'mileageMile', headerName: 'Mileage Mile', width: 100,
      renderCell: (params) => (
        <Tooltip title={params.row.mileageMile} >
          <span className="table-cell-trucate">{params.row.mileageMile}</span>
        </Tooltip>
      ),
    },
    {
      field: 'priceCad', headerName: 'Price Cad', width: 100,
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
      field: 'convertedRate', headerName: 'Converted Rate', width: 130,
      renderCell: (params) => (
        <Tooltip title={params.row.convertedRate} >
          <span className="table-cell-trucate">{params.row.convertedRate}</span>
        </Tooltip>
      ),
    },
    {
      field: 'convertedPrice', headerName: 'Converted Price', width: 130,
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
          <span className="table-cell-trucate">{params.row.isQualified}</span>
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
      field: 'scrapedTime', headerName: 'Scraped Time', width: 200,
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
        <Button variant="outlined" className="add_btn" onClick={e => dispatch(exportData())}>Export</Button>

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
