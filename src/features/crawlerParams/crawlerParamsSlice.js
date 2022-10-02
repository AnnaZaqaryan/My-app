import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fethCrawlerParms, updateCrawlerParmsPost } from './crawlerParamsApi';
import { fethAllMakes } from './filterApiValues';


const initialState = {
  paramData : {
    
      postalCode: '',
      distanceKm: '',
      minYear: null,
      maxYear: null,
      minMileageKm: null,
      maxMileageKm: null,
    makes: [

    ]

  },

  showPopup : false,
  makeValues : [],
};

export const getCrawlerParams = createAsyncThunk(
  'crawlerParams/getValues',
  async ( arg, { getState }) => {
    const response = await fethCrawlerParms();
    return response;
  }
);


export const getAllMakes = createAsyncThunk(
  'crawlerParams/getAllMakes',
  async () => {
    const response = await fethAllMakes()
    return response;
  }
);


export const updateCrawlerParams = createAsyncThunk(
  'crawlerParams/updateParams',
  async ( arg, { getState }) => {

    const state = getState();
    const response = await updateCrawlerParmsPost(state.crawlerParams.paramData);
    return response;
  }
);


export const crawlerParamsSlice = createSlice({
  name: 'crawlerParams',
  initialState,
  reducers: {


    changePostalCode: (state, action) => {
      state.paramData.postalCode = action.payload;
    },

    changeDistanceKm: (state, action) => {
      state.paramData.distanceKm = action.payload;
    },
    
    changeMinYear: (state, action) => {
      state.paramData.minYear = action.payload;
    },
    changeMaxYear: (state, action) => {
      state.paramData.maxYear = action.payload;
    },

    changeMinMileageKm: (state, action) => {
      state.paramData.minMileageKm = action.payload;
    },

    changeMaxMileageKm: (state, action) => {
      state.paramData.maxMileageKm = action.payload;
    },

    addNewMake: (state, action) => {
      state.paramData.makes.push(action.payload);
    },

    removeMake : (state, action) => {
      state.paramData.makes =   state.paramData.makes
      .filter( e => e  != action.payload);
    },
 
    closePopup: (state, action) => {
      state.showPopup = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCrawlerParams.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCrawlerParams.fulfilled, (state, action) => {
        
        state.paramData  = action.payload;
      })

      .addCase(getAllMakes.fulfilled, (state, action) => {
        state.makeValues  = action.payload;
      })
      .addCase(updateCrawlerParams.fulfilled, (state, action) => {
        state.showPopup = true;
      })

      

      ;
  },
});

export const {  changePostalCode, changeDistanceKm , changeMinYear, changeMaxYear, changeMinMileageKm, changeMaxMileageKm, addNewMake, removeMake, 
  closePopup} = crawlerParamsSlice.actions;

export const selectCrawlerParams = (state) => state.crawlerParams.paramData;
export const selectMakeValues = (state) => state.crawlerParams.makeValues;
export const selectShowPopup = (state) => state.crawlerParams.showPopup;

export default crawlerParamsSlice.reducer;
