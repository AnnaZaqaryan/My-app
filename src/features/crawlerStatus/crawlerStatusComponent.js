
import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCrawlerStatus, selectCrawlerStatuses } from './crawlerStatusSlice';
import './styles.css';

export function CrawlerStatusComponent() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCrawlerStatus())
  }, []);


  function updateStatus() {
    dispatch(getCrawlerStatus())
  }

  const statuses = useSelector(selectCrawlerStatuses);
  return (
    <div>
      {
        statuses.map((e) => (
          <div className="crawler_status_item" key={e.lastUpd}>
            <p>{e.state} </p>
            <p>{e.status}</p>
            <p>{e.lastUpd}</p>
          </div>
        ))
      }
        <Button variant="outlined" onClick={updateStatus}> Refresh </Button>
    </div>
  )
}