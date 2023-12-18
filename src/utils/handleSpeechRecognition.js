function handleSpeechRecognition() {
  
  //return promise
  return new Promise((resolve, reject) => {
    let SpeechRecognition =
      window.webkitSpeechRecognition || window.SpeechRecognition;
   
      if (!SpeechRecognition) {
      reject("Voice feature is not supported in your browser");
    }

    let recognition = new SpeechRecognition();
  
    //set property to speech recognition
    recognition.continuous = false; //end after user stop speaking
    recognition.interimResults = false; //it will return only final result
    recognition.maxAlternatives = 1; //set the maximum no. of alternative should be returned
    

    //return the result
    recognition.onresult = (event) => {
      let word = event.results[0][0].transcript;
      console.log("word is:",word);
        resolve(word);
    };

    //If no match happen
    recognition.onnomatch=(event)=>{
      reject(`Sorry, we couldn't get you- ${event.error}`);
    }

    //if any error occur on voice recognition
    recognition.onerror=(event)=>{
      reject(`error occured in recognition: ${event.error}`);
    }

    recognition.onspeechend = () => {
      recognition.stop();
    };
    

    //Start recognizing voice
    recognition.start();
    
  });
}

export default handleSpeechRecognition;
