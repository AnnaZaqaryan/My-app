
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMake, changePage, getAllCars, getAllMakes, selectCarPage, selectFilterParam, selectMakeValues } from '../car/carSlice';

import { DataGrid } from '@mui/x-data-grid';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { CalcParamComponent } from '../calcParams/calcParamComponent';
import { CrawlerParamComponent } from '../crawlerParams/crawlerParamComponent';
export function CarComponent() {

  const page = useSelector(selectCarPage);
  const filterParams = useSelector(selectFilterParam);
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars())
    
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'make', headerName: 'Make', width: 130 },
    { field: 'model', headerName: 'Model', width: 130 },
    { field: 'year', headerName: 'Year', type: 'number', width: 90, }

  ];


 

  const rows = page.listings;

  return (
    <>

    <CalcParamComponent/>
    <CrawlerParamComponent/>

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
