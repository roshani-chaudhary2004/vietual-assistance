let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
     text_speak.rate=1
    text_speak.pitch=1
     text_speak.volume=1
     text_speak.lang="hi-In"

    window.speechSynthesis.speak(text_speak)


}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning ma'am")
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon ma'am")
    }else{
       speak("Good Evening ma'am") 
    }
    
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition=window .SpeechRecognition || window.webkitSpeechRecognition
let recognition=new  speechRecognition()
recognition.onresult=(event)=>{
   let currentIndex= event.resultIndex
   let transcript= event.results[currentIndex][0].transcript
   content.innerText=transcript
takeCommand(transcript.toLowerCase())

    
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
      btn.style.display="flex"
        voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello ma'am,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant, created by  Roshani ma'am" )

    }
    else if(message.includes("open youtube")){
        speak("opening in youtube.....")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening in google.....")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open chatgpt")){
        speak("opening in chatgpt.....")
        window.open("https://chatgpt.com/","_blank")
    }
    else{
        speak(`this is what i found on internet regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}

