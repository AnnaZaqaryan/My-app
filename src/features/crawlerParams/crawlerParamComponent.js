
import { Button, Chip, TextareaAutosize  } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCountryValues } from '../car/carSlice';
import { addNewKey, getAllKeys, removeKey, scrap, selectAllKeys, stop } from '../key/keySlice';


import {
    selectCrawlerParams, selectMakeValues
} from './crawlerParamsSlice';
import './styles.css';


export function CrawlerParamComponent() {

  const crawlerParams = useSelector(selectCrawlerParams);
  const keys = useSelector(selectAllKeys);

  const [make, setMake] = useState('');

  const makeValues = useSelector(selectMakeValues);
  const countryValues = useSelector(selectAllCountryValues);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getCrawlerParams())
    
    dispatch(getAllKeys())
  }, []);


  // const handleDelete = (make) => {

  //   dispatch(removeKey(make));
 
  // };


  return (
    <div className="crawler_param_component">
      <div className="make_item">
        <div className="crawler_param_item">
          <p>Scrape Keywords</p>
          <TextareaAutosize 
            label="by new line"
            minRows="10"
            id="filled-hidden-labeld-istanceKm"
            value={make}
            onChange={event => setMake(event.target.value)}
            variant="filled"
          />
        </div>
        <div>
          <Button  variant="outlined" className="add_btn_key" onClick={e => dispatch(scrap(make))}>Scrape</Button>
        </div>

        <div>
          <Button  variant="outlined" className="add_btn_key" onClick={e => dispatch(stop(make))}>Stop</Button>
        </div>
        <div>
          {/* <Button  variant="outlined" className="add_btn_key" onClick={e => dispatch(addNewKey(make))}>Stop</Button> */}
        </div>

      </div>
      <div className="crawler_item">

        <div className="chip">
          {/* {keys.map((e) => (
            <Chip key={e}
              label={e}
              variant="outlined"
              className="crawler_param_chip"
              // onDelete={event => handleDelete(e)} 
              />
          ))} */}

        </div>
      </div>
    </div>
  );
}
