import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCrawlerStatus } from '../crawlerStatus/crawlerStatusSlice';
import { fetchAllKeys, scrapApi, stopApi } from './keyApi';


const initialState = {
 vals : []
};

export const getAllKeys = createAsyncThunk(
  'key/getValues',
  async ( arg, { getState }) => {
    const response = await fetchAllKeys();
    return response;
  }
);


// export const addNewKey = createAsyncThunk(
//   'key/addNewKey',
//   async ( arg, { getState, dispatch }) => {

//     // const state = getState();
//     const response = await addNewKeyReq(arg);
//     dispatch(getAllKeys())
//     // dispatch(showPopup('Crawler params updated'));

//     return response;
//   }
// );

export const scrap = createAsyncThunk(
  'key/scrap',
  async ( arg, { getState, dispatch }) => {

    // const state = getState();
    const response = await scrapApi(arg);
    dispatch(getCrawlerStatus())
    dispatch(getAllKeys())
    // dispatch(showPopup('Crawler params updated'));

    return response;
  }
);


export const stop = createAsyncThunk(
  'key/stop',
  async ( arg, { getState, dispatch }) => {

    // const state = getState();
    const response = await stopApi(arg);
    // dispatch(getAllKeys())
    // dispatch(showPopup('Crawler params updated'));

    return response;
  }
);





// export const removeKey = createAsyncThunk(
//   'key/removeKey',
//   async ( arg, { getState, dispatch }) => {

    
//     const response = await deleteKeyReq(arg);
//     dispatch(getAllKeys())
//     // dispatch(showPopup('Crawler params updated'));

//     return response;
//   }
// );



export const keySlice = createSlice({
  name: 'key',
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
      .addCase(getAllKeys.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllKeys.fulfilled, (state, action) => {
        
        state.vals  = action.payload;
      })
      ;
  },
});

// export const {  } = keySlice.actions;

export const selectAllKeys = (state) => state.key.vals;

export default keySlice.reducer;
