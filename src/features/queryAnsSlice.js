import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";

// export interface QueryAnsState{
//   loading:boolean,
//   error:boolean,
//   queryAns:Array<any>
// } 

const initialState={
  loading:true,
  error:false,
    query:[],
    ans:[],
    queryAns:[{que:'',
  an:''
}]
}

const queryAnsSlice=createSlice({
    name:'queryAnsSlice',
    initialState,

    reducers:{
      showLoading:(state)=>{
        state.loading=true;
        state.error=false;
        console.log('showLoading called');
      },

      showError:(state)=>{
        state.loading=false;
        state.error=true;
        console.log('showError called');
      },

      setQueryInput:(state, action)=>{
         state.query=[...state.query, action.payload];
         console.log('setQueryInput called');
         console.log('queryAns',[...state.queryAns]);
      },

      setAnswer:(state,action)=>{
        state.loading=false;
        state.ans=[...state.ans, action.payload];
        console.log('setAnswer called');
      }
    }
})

export const {showLoading,showError,setQueryInput,setAnswer}= queryAnsSlice.actions;
export default queryAnsSlice.reducer;