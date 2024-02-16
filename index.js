function play () {
    hideElementById('home');
    hideElementById('score-card');
    showElementById('playground');

    setElementValueById('life', 5);
    setElementValueById('score', 0);

    continueGame();
}

function hideElementById(id){
    const element = document.getElementById(id);
    element.classList.add('hidden');
}

function showElementById(id){
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}

function getRandomAlphabet(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabets.split('');
    
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const finalAlphabet = alphabetArray[index];
    return finalAlphabet;
}

function continueGame(){
    const alphabet = getRandomAlphabet();
    const keyword = document.getElementById('keyword');
    keyword.innerText = alphabet;

    setKeyColor(alphabet);
}

function setKeyColor(id){
    const key = document.getElementById(id);
    key.classList.add('bg-orange-500')
}

function removeKeyColor(id){
    const key = document.getElementById(id);
    key.classList.remove('bg-orange-500')
}

function getTextElementValueById(id){
    const element = document.getElementById(id);
    const elementValueNumber = parseInt(element.innerText);
    return elementValueNumber;
}

function setElementValueById(id,value){
    document.getElementById(id).innerText = value; 
}

function keyboardUpEvent(event){
    const playerPressed = event.key;

    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('keyword');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    let totalScore;
    if(playerPressed === expectedAlphabet){
        removeKeyColor(expectedAlphabet);
        continueGame();
        
        const currentScore = getTextElementValueById('score');
        let liveScore = currentScore + 1;
        setElementValueById('score', liveScore);
        totalScore = liveScore;
    }
    else{
        console.log('your missed a life');
        
        const currentLife = getTextElementValueById('life');

        let liveLife = currentLife - 1;
        setElementValueById('life', liveLife);

        if(liveLife === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup', keyboardUpEvent);


function gameOver(){
    hideElementById('playground');
            showElementById('score-card');

            const finalScore = getTextElementValueById('score');
            setElementValueById('score-card-result', finalScore);

            const clearAlphabet = document.getElementById('keyword');
            const clearAlphabetColor = clearAlphabet.innerText;
            removeKeyColor(clearAlphabetColor);
}