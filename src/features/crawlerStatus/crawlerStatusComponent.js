
import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCrawlerStatus, selectCrawlerStatuses } from './crawlerStatusSlice';


 export function CrawlerStatusComponent() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCrawlerStatus())
  }, []);


  function updateStatus(){
    dispatch(getCrawlerStatus())
  }

  const statuses = useSelector(selectCrawlerStatuses);
    return (
        <div>

          <Button onClick={updateStatus}> Refresh </Button>
          {
          statuses.map(e => <div key={e.lastUpd}>{e.state} -- {e.status} -- {e.lastUpd} </div>)
          }
        </div>
    )
}