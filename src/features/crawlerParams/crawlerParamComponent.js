
import { Button, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { changeDistanceKm, changePostalCode, getAllMakes, getCrawlerParams, selectCrawlerParams, selectMakeValues, updateCrawlerParams } from './crawlerParamsSlice';




export function CrawlerParamComponent() {

  const crawlerParams = useSelector(selectCrawlerParams);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCrawlerParams())
    dispatch(getAllMakes())
  }, []);
  const makeValues = useSelector(selectMakeValues);

  return (
    <div>

      
<Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
       // value={filterParams.make}
        label="Make"
        // onChange={ event => dispatch(changeMake(event.target.value))}
      >
        {makeValues.map(e => <MenuItem key={e} value={e}>{e}</MenuItem> )}

        
      </Select>
          <TextField
            label="Postal code"
            id="filled-hidden-label-postal"
            value={crawlerParams.postalCode}
            variant="filled"
            onChange={event => dispatch(changePostalCode(event.target.value)) }
        /> 

        <TextField
            label="DistanceKm"
            id="filled-hidden-labeld-istanceKm"
            value={crawlerParams.distanceKm}
            onChange={event => dispatch(changeDistanceKm(event.target.value)) }

            variant="filled"
        />

      <Button variant="outlined" onClick={e => dispatch(updateCrawlerParams())}>Update</Button>
      
    </div>
  );
}
