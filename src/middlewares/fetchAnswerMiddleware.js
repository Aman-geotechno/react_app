import { showLoading, showError, setAnswer } from "../features/queryAnsSlice";
// import { AppDispatch, RootState } from "../app/store";
// import { AnyAction } from "@reduxjs/toolkit";
// import { ThunkAction } from "@reduxjs/toolkit";

const answerEndpoint = "http://192.168.29.191:5001/chatbot";

export const fetchAnswerMiddleware = (query) => {
  console.log("fetchmiddleware called");
  return async(dispatch) => {   
    try {
      dispatch(showLoading());
      const resp = await fetch(answerEndpoint,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
         body:JSON.stringify({"question":query})
      });
      console.log("resp is",resp);
      if(resp.status===200){
      const data = await resp.json();
      console.log("data is:",data);
      dispatch(setAnswer(data.response));
      }

      setTimeout(()=>{if(!resp)
      throw new Error('Error Timed out');
    },100)

    } catch (err) {
      dispatch(setAnswer(`${err.message}`));
      dispatch(showError());
    }  
  };  
};




