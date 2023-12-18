import { configureStore } from "@reduxjs/toolkit";
import queryAnsSlice from '../features/queryAnsSlice';

export const store=configureStore({
    reducer:{
        queryAnsReducer:queryAnsSlice,
    },
})

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;