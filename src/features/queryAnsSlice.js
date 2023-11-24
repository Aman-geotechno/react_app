import { createSlice } from "@reduxjs/toolkit";

// export interface QueryAnsState{
//   loading:boolean,
//   error:boolean,
//   queryAns:Array<any>
// }

const initialState = {
  loading: true,
  error: false,
  query: [],
  ans: [],
};

const queryAnsSlice = createSlice({
  name: "queryAnsSlice",
  initialState,

  reducers: {
    showLoading: (state) => {
      state.loading = true;
      state.error = false;
      console.log("showLoading called");
    },

    showError: (state) => {
      state.loading = false;
      state.error = true;
      console.log("showError called");
    },

    setQuery: (state, action) => {
      state.query = [...state.query, action.payload];
      console.log("setQueryInput called");
    },

    setAnswer: (state, action) => {
      state.loading = false;
      state.ans = [...state.ans, action.payload];
      console.log("setAnswer called", state.ans);
    },
  },
});

export const { showLoading, showError, setQuery, setAnswer } =
  queryAnsSlice.actions;
export default queryAnsSlice.reducer;
