import { configureStore } from "@reduxjs/toolkit";
import queryAnsSlice from '../features/queryAnsSlice'
import thunkMiddleware from 'redux-thunk'

export const store=configureStore({
    reducer:{
        queryAnsReducer:queryAnsSlice,
    },
    middleware:[thunkMiddleware]
})

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;