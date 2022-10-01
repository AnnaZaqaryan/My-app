import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';
import counterReducer from '../features/counter/counterSlice';
import calcParamReducer from '../features/calcParams/calcParamsSlice';
import crawlerParamReducer from '../features/crawlerParams/crawlerParamsSlice';
import { asyncDispatchMiddleware } from './asyncDispatchMiddleware';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    car : carReducer,
    calcParams : calcParamReducer,
    crawlerParams : crawlerParamReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(asyncDispatchMiddleware)
});
