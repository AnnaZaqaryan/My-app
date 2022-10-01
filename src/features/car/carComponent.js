
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, getAllCars, selectCarPage, selectFilterParam } from '../car/carSlice';

import { DataGrid } from '@mui/x-data-grid';

import { Grid } from '@mui/material';
import { CalcParamComponent } from '../calcParams/calcParamComponent';
import { CrawlerParamComponent } from '../crawlerParams/crawlerParamComponent';
// import { ShowCrawlingComponent } from '../showCrawling/showCrawlingComponent';
import './styles.css';
import { CrawlerStatusComponent } from '../crawlerStatus/crawlerStatusComponent';


export function CarComponent() {

  const page = useSelector(selectCarPage);
  const filterParams = useSelector(selectFilterParam);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars())

  }, []);

  const columns = [

    { field: 'make', headerName: 'Make', width: 130 , renderCell: (params) => (
      <a href={`${params.row.carUrl}`} target="_blank">{params.row.make}</a>
    )
    },
    { field: 'year', headerName: 'Year', type: 'number', width: 100 },
    { field: 'model', headerName: 'Model', width: 130 },
    { field: 'style', headerName: 'Style', width: 130 },
    { field: 'vin', headerName: 'Vin', width: 130 },
    { field: 'mileageKm', headerName: 'Mileage Km', width: 130 },
    { field: 'priceCad', headerName: 'Price Cad', width: 130 },
    { field: 'mmrPriceUsd', headerName: 'MMR PriceUsd', width: 130 },
    { field: 'convertedRate', headerName: 'Converted Rate', width: 130 },
    { field: 'convertedPrice', headerName: 'Converted Price', width: 130 },
    { field: 'qualifiedTime', headerName: 'Qualified Time', width: 130 },
    { field: 'scrapedTime', headerName: 'Scraped Time', width: 150 },

  ];

  const rows = page.listings;

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
          {/* <ShowCrawlingComponent/> */}

          <CrawlerStatusComponent></CrawlerStatusComponent>
        </Grid>
      </Grid>

      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={rows}
          rowCount={page.total}
          page={filterParams.currentPage}
          columns={columns}
          pageSize={10}
          paginationMode="server"
          pagination
          onPageChange={(newPage) => dispatch(changePage(newPage))}
        />
      </div>

    </>
  );
}
