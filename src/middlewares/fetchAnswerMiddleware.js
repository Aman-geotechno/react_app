import { showLoading, showError, setAnswer } from "../features/queryAnsSlice";
// import { AppDispatch, RootState } from "../app/store";
// import { AnyAction } from "@reduxjs/toolkit";
// import { ThunkAction } from "@reduxjs/toolkit";

const answerEndpoint = "https://dummyjson.com/products";

export const fetchAnswerMiddleware = (query) => {
  console.log("fetchmiddleware called");
  return async(dispatch) => {   
    try {
      dispatch(showLoading());
      const resp = await fetch(answerEndpoint);
      console.log("resp is",resp);
      //   method:"POST",
      //   mode:'cors',
      //   headers:{
      //       "Content-Type":"application/json"
      //   },
      //   // body:JSON.stringify({query})
      // });
      
      const data = await resp.json();
      console.log("data is:",data);
      dispatch(setAnswer(data.products));
    } catch (err) {
      dispatch(showError());
    }
  
  };
  
};




