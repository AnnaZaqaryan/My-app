import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';
import counterReducer from '../features/counter/counterSlice';
import calcParamReducer from '../features/calcParams/calcParamsSlice';
import crawlerParamReducer from '../features/crawlerParams/crawlerParamsSlice';
import crawlerStatusReducer from '../features/crawlerStatus/crawlerStatusSlice';
import popupReducer from '../features/popup/popupSlice';
import keyReducer from '../features/key/keySlice'
import { asyncDispatchMiddleware } from './asyncDispatchMiddleware';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    car : carReducer,
    calcParams : calcParamReducer,
    crawlerParams : crawlerParamReducer,
    crawlerStatus : crawlerStatusReducer,
    popup : popupReducer,
    key : keyReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(asyncDispatchMiddleware)
});
