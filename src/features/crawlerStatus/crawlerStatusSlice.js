import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCrawlerStatus } from './crawlerStatusApi';


const initialState = {
 statuses : []
};

export const getCrawlerStatus = createAsyncThunk(
  'crawlerStatus/getValues',
  async ( arg, { getState }) => {
    const response = await fetchCrawlerStatus();
    return response;
  }
);


// export const updateCalcParams = createAsyncThunk(
//   'calcParams/updateParams',
//   async ( arg, { getState }) => {

//     const state = getState();
//     const response = await updateCalcParmsPost(state.calcParams.paramData);
//     return response;
//   }
// );


export const crawlerStatusSlice = createSlice({
  name: 'crawlerStatus',
  initialState,
  reducers: {
    
    // changeUsdParam: (state, action) => {
    //   state.paramData.mmrMinusParamUSD = action.payload;
    // },

    // changeCADParam: (state, action) => {
    //   state.paramData.mmrMinusConvParamCAD = action.payload;
    // },

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },

  },

  extraReducers: (builder) => {
    builder
      .addCase(getCrawlerStatus.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCrawlerStatus.fulfilled, (state, action) => {
        
        state.statuses  = action.payload;
      })
      ;
  },
});

export const {  changeCalcParams, changeUsdParam,  changeCADParam} = crawlerStatusSlice.actions;

export const selectCrawlerStatuses = (state) => state.crawlerStatus.statuses;

export default crawlerStatusSlice.reducer;
