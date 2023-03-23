
import { Button, Chip, TextareaAutosize } from '@mui/material';
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

  const [scrapeKeywords, setScrapeKeywords] = useState('');
  const [ignoreKeywords, setIgnoreKeywords] = useState('');
  const [urlMaxLength, setUrlMaxLength] = useState('');


  const makeValues = useSelector(selectMakeValues);
  const countryValues = useSelector(selectAllCountryValues);

  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getAllKeys())
  }, []);


  return (
    <div className="crawler_param_component">
      <div className="make_item">
       <div className="make_items">
       <div className="crawler_param_item">
          <p>Scrape Keywords</p>
          <TextareaAutosize
            className="textarea"
            placeholder="by new line ..."
            minRows="14"
            id="filled-hidden-labeld-istanceKm"
            value={scrapeKeywords}
            onChange={event => setScrapeKeywords(event.target.value)}
            variant="filled"
            style={{ width: "130px", outline: 'none' }}
          />
        </div>

        <div className="crawler_param_item">
          <p>Ignore Keywords</p>
          <TextareaAutosize
            className="textarea"
            placeholder="by new line ..."
            minRows="14"
            id="filled-hidden-labeld-istanceKm"
            value={ignoreKeywords}
            onChange={event => setIgnoreKeywords(event.target.value)}
            variant="filled"
            style={{ width: "130px", outline: 'none' }}
          />
        </div>

        <div className="crawler_param_item">
          <p>Max Url Length</p>
          <input type="text"
            value={urlMaxLength}
            onChange={event => setUrlMaxLength(event.target.value)}
            variant="filled"
            style={{ width: "90px", outline: 'none' }}
          />
        </div>
       </div>

        <div className="crawler_item">
          <div>
            <Button variant="outlined" className="add_btn_key" onClick={e => dispatch(scrap({ scrapeKeywords, ignoreKeywords, urlMaxLength }))}>Scrape</Button>
          </div>

          <div>
            <Button variant="contained" className="add_btn_key" onClick={e => dispatch(stop())}>Stop</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
