import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { showPopup } from '../popup/popupSlice';
import { fethCalcParms, updateCalcParmsPost } from './calcParamsApi';


const initialState = {
  paramData : {
    mmrMinusParamUSD : 0,
    mmrMinusConvParamCAD : 0
  }
};

export const getCalcParams = createAsyncThunk(
  'calcParams/getValues',
  async ( arg, { getState }) => {
    const response = await fethCalcParms();
    return response;
  }
);


export const updateCalcParams = createAsyncThunk(
  'calcParams/updateParams',
  async ( arg, { getState , dispatch}) => {

    const state = getState();
    const response = await updateCalcParmsPost(state.calcParams.paramData);

    dispatch(showPopup("Calc params updated"));
    return response;
  }
);


export const calcParamsSlice = createSlice({
  name: 'calcParams',
  initialState,
  reducers: {
    
    changeUsdParam: (state, action) => {
      state.paramData.mmrMinusParamUSD = action.payload;
    },

    changeCADParam: (state, action) => {
      state.paramData.mmrMinusConvParamCAD = action.payload;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

  },

  extraReducers: (builder) => {
    builder
      .addCase(getCalcParams.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCalcParams.fulfilled, (state, action) => {
        
        state.paramData  = action.payload;
      })
      ;
  },
});

export const {  changeCalcParams, changeUsdParam,  changeCADParam} = calcParamsSlice.actions;

export const selectCalcParams = (state) => state.calcParams.paramData;

export default calcParamsSlice.reducer;
