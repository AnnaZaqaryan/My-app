
import { Button, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCADParam, changeUsdParam, getCalcParams, selectCalcParams, updateCalcParams } from './calcParamsSlice';




export function CalcParamComponent() {

  const calParams = useSelector(selectCalcParams);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCalcParams())
  }, []);


  // function changeUsd (event){
  //   dispatch(changeUsdParam(event.target.value))
  // }
  
  // function changeCad (event){
  //   dispatch(changeCADParam(event.target.value))
  // }

  return (
    <div>
         <TextField
            label="mmrMinusParamUSD"
            id="filled-hidden-label-normal"
            value={calParams.mmrMinusParamUSD}
            variant="filled"
            onChange={event => dispatch(changeUsdParam(event.target.value)) }
        />

        <TextField
            label="mmrMinusConvParamCAD"
            id="filled-hidden-label-normal2"
            value={calParams.mmrMinusConvParamCAD}
            onChange={event => dispatch(changeCADParam(event.target.value)) }

            variant="filled"
        />

      <Button variant="outlined" onClick={e => dispatch(updateCalcParams())}>Update</Button>
      
    </div>
  );
}
