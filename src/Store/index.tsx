// store.ts
import { configureStore } from '@reduxjs/toolkit';
import carSlice from './Reducers/carSlice';;

const store = configureStore({
  reducer: {
    car: carSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
