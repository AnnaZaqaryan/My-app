
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsQualified, changeMake, changePage, changeSort, getAllCars, getAllMakes, selectAllMakeFilterValues, selectCarPage, selectFilterParam } from '../car/carSlice';

import { DataGrid } from '@mui/x-data-grid';

import { Checkbox, Grid, MenuItem, Select, Tooltip } from '@mui/material';
import { CalcParamComponent } from '../calcParams/calcParamComponent';
import { CrawlerParamComponent } from '../crawlerParams/crawlerParamComponent';
// import { ShowCrawlingComponent } from '../showCrawling/showCrawlingComponent';
import './styles.css';
import { CrawlerStatusComponent } from '../crawlerStatus/crawlerStatusComponent';


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
      field: 'make', headerName: 'Make', width: 20, renderCell: (params) => (
        <a href={`${params.row.carUrl}`} target="_blank">{params.row.make}</a>
      )
    },
    { field: 'year', headerName: 'Year', type: 'number', width: 80 },
    { field: 'model', headerName: 'Model', width: 110 },
    { field: 'style', headerName: 'Style', width: 330, 
    renderCell: (params ) =>  (
          <Tooltip title={params.row.style} >
              <span className="table-cell-trucate">{params.row.style}</span>
           </Tooltip>
     ),
  },
    { field: 'vin', headerName: 'Vin', width: 200 },
    { field: 'mileageKm', headerName: 'Mileage Km', width: 90 },
    { field: 'priceCad', headerName: 'Price Cad', width: 80 },
    { field: 'mmrPriceUsd', headerName: 'MMR PriceUsd', width: 80 },
    { field: 'convertedRate', headerName: 'Converted Rate', width: 80 },
    { field: 'convertedPrice', headerName: 'Converted Price', width: 80 },
    { field: 'isQualified', headerName: 'isQualified', width: 80 },
    { field: 'qualifiedTime', headerName: 'Qualified Time', width: 200 },
    { field: 'scrapedTime', headerName: 'Scraped Time', width: 200 },
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


      <div style={{ height: 700, width: '100%', fontSize: '18px'}}>
        Make <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterParams.make}
          label="Make"
          className="car_component_select"
          onChange={event => dispatch(changeMake(event.target.value))}
        >
          {makeValues.map(e => <MenuItem key={e} value={e}>{e}</MenuItem>)}
        </Select>
          Is Qualified <Checkbox
          checked={filterParams.isQualified}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />

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
