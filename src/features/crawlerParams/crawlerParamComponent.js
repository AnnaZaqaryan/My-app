
import { Button, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeDistanceKm, changePostalCode, getCrawlerParams, selectCrawlerParams, updateCrawlerParams } from './crawlerParamsSlice';




export function CrawlerParamComponent() {

  const crawlerParams = useSelector(selectCrawlerParams);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCrawlerParams())
  }, []);
 

  return (
    <div>
          {/* <TextField
            label="Postal code"
            id="filled-hidden-label-postal"
            value={crawlerParams.postalCode}
            variant="filled"
            onChange={event => dispatch(changePostalCode(event.target.value)) }
        />  */}

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
