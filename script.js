const textArea = document.querySelector("textarea");
const playButton = document.querySelector("button");
const pitchBar = document.querySelector("input");
const duckFigure = document.querySelector("figure")


// function button play
playButton.addEventListener("click", function () {
    const textLenght = textArea.value.trim().length;

    if (textLenght >= 1) {
       talk();
    }
})

function talk(){
    const text = textArea.value;
    const pitch = pitchBar.value;

    const utterance = new SpeechSynthesisUtterance(text)
    
    utterance.pitch = pitch;

    speechSynthesis.speak(utterance);

    utterance.addEventListener("start", function(){
        duckFigure.classList.add("talking");
        textArea.disabled = true;
        pitchBar.disabled = true;
        playButton.disabled = true;

    });
    utterance.addEventListener("end", function(){
        duckFigure.classList.remove("talking");
        textArea.disabled = false;
        pitchBar.disabled = false;
        playButton.disabled = false;
    });



}