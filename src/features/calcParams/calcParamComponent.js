
import { Button, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCADParam, changeUsdParam, getCalcParams, selectCalcParams, updateCalcParams } from './calcParamsSlice';
import './styles.css';


export function CalcParamComponent() {

  const calParams = useSelector(selectCalcParams);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCalcParams())
  }, []);

  return (
    <div className="calc_param_component">
      <div className="calc_param_input">
        <p className="calc_param_input_title">MMR Minus Parameter ( USD )</p>
        <TextField
          label="MMR MinusParam USD"
          id="filled-hidden-label-normal"
          value={calParams.mmrMinusParamUSD}
          variant="filled"
          onChange={event => dispatch(changeUsdParam(event.target.value))}
        />
      </div>
      <div className="calc_param_input">
      <p className="calc_param_input_title">MMR Minus Converted Parameter ( CAD )</p>
        <TextField
          label="MMR MinusConvParam CAD"
          id="filled-hidden-label-normal2"
          value={calParams.mmrMinusConvParamCAD}
          onChange={event => dispatch(changeCADParam(event.target.value))}
          variant="filled"
        />
      </div>
      <div className="calc_param_item">
      <Button variant="outlined" className="calc_param_btn" onClick={e => dispatch(updateCalcParams())}>Update</Button>
      </div>
    </div>
  );
}
