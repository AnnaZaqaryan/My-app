
import { Box, Button, Chip, MenuItem, Paper, Popper, Select, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import {
  addNewMake,
  changeDistanceKm, changeMaxMileageKm, changeMaxYear, changeMinMileageKm, changeMinYear, changePostalCode, closePopup, getAllMakes,
  getCrawlerParams, removeMake, selectCrawlerParams, selectMakeValues, selectShowPopup, updateCrawlerParams
}
  from './crawlerParamsSlice';
import './styles.css';


export function CrawlerParamComponent() {

  const crawlerParams = useSelector(selectCrawlerParams);
  const showPopup = useSelector(selectShowPopup);

  const [make, setMake] = useState('');

 const makeValues = useSelector(selectMakeValues);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCrawlerParams())
    dispatch(getAllMakes())
  }, []);


  const handleDelete = (make) => {
    console.info('You clicked the delete icon. ' + make);
    dispatch(removeMake(make))
  };


  return (
    <div className="crawler_param_component">
      <div className="crawler_param_item">
        <p>Postal Code</p>
        <TextField
          label="Postal code"
          id="filled-hidden-label-postal"
          value={crawlerParams.postalCode}
          variant="filled"
          onChange={event => dispatch(changePostalCode(event.target.value))}
        />
      </div>

      <div className="crawler_param_item">
        <p>Distance (KM)</p>
        <TextField
          label="DistanceKm"
          id="filled-hidden-labeld-istanceKm"
          value={crawlerParams.distanceKm}
          onChange={event => dispatch(changeDistanceKm(event.target.value))}
          variant="filled"
        />
      </div>

      <div className="crawler_param_item">
        <p>Min Year</p>
        <TextField
          label="Min Year"
          id="filled-hidden-labeld-istanceKm"
          value={crawlerParams.minYear}
          onChange={event => dispatch(changeMinYear(event.target.value))}
          variant="filled"
        />
      </div>

      <div className="crawler_param_item">
        <p>Max Year</p>
        <TextField
          label="Max Year"
          id="filled-hidden-labeld-istanceKm"
          value={crawlerParams.maxYear}
          onChange={event => dispatch(changeMaxYear(event.target.value))}
          variant="filled"
        />
      </div>

      <div className="crawler_param_item">
        <p>Min Mileage (KM)</p>
        <TextField
          label="Min MileageKm"
          id="filled-hidden-labeld-istanceKm"
          value={crawlerParams.minMileageKm}
          onChange={event => dispatch(changeMinMileageKm(event.target.value))}
          variant="filled"
        />
      </div>
      <div className="crawler_param_item">
        <p>Max Mileage (KM)</p>
        <TextField
          label="Max MileageKm"
          id="filled-hidden-labeld-istanceKm"
          value={crawlerParams.maxMileageKm}
          onChange={event => dispatch(changeMaxMileageKm(event.target.value))}
          variant="filled"
        />
      </div>

      <div className="make_item">
        <div className="crawler_param_item">
          <p>Make</p>
          <TextField
            label="Make"
            id="filled-hidden-labeld-istanceKm"
            value={make}
            onChange={event => setMake(event.target.value)}
            variant="filled"
          />
        </div>
        <div>
          <Button variant="outlined" className="add_btn" onClick={e => dispatch(addNewMake(make))}>Add</Button>
        </div>

      </div>
      <div className="crawler_item">

        <div className="chip">
          {crawlerParams.makes.map((e) => (
              <Chip key={e}
                label={e}
                variant="outlined"
                className="crawler_param_chip"
                onDelete={event => handleDelete(e)} />
          ))}

        </div>

        <Button variant="outlined" className="crawler_param_btn" onClick={e => dispatch(updateCrawlerParams())}>Update</Button>

        <Popper  open={showPopup} >
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              The content of the Popper.
            <Button variant="outlined" className="crawler_param_btn" onClick={e => dispatch(closePopup())}>Close Diaglog</Button>
            </Box>
        </Popper>
      </div>

    </div>
  );
}
