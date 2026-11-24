import { configureStore } from '@reduxjs/toolkit';
import booking from './bookingSlice';
export const store = configureStore({ reducer: { booking } });
