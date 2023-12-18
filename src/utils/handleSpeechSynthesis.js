function handleSpeechSynthesis(text){
    const synth= window.speechSynthesis;
    if(!synth)
    throw new Error('This feature is not supported in your browser');
    const voices=synth.getVoices();
    const utterance= new SpeechSynthesisUtterance(text);
    utterance.voice=voices[1];
    utterance.rate=1;
    synth.speak(utterance);
    return utterance;
}

export default handleSpeechSynthesis;