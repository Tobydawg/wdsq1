const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {

    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()

    showQuestion(shuffledQuestions[currentQuestionIndex])
}




 function  showQuestion(question){
        questionElement.innerText = question.question
        question.answers.forEach(answer => {
            const button = document.createElement('button')
            button.innerText=answer.text
            button.classList.add('btn')

            if (answer.correct){

                button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer)
            answerButtonsElement.appendChild(button)
        })
 }




    function resetState(){
        nextButton.classList.add('hide')
        
        while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }

 }
 


 function selectAnswer(e){
     const selectedButton = e.target
     const correct = selectedButton.dataset.correct
     setStatusClass(document.body, correct)
     Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)

     })
     
     if (shuffledQuestions.length > currentQuestionIndex + 1){
     nextButton.classList.remove('hide')

    } else {

    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    }
 }

 function setStatusClass(element, correct){
    clearStatusClass(element)

if(correct){
    element.classList.add('correct')
} else {
    element.classList.add('wrong')
}

}

 function clearStatusClass (element){
    element.classList.remove('correct')
    element.classList.remove('wrong')


 }

const questions = [
    {
        question:'Lead Singer of Rolling Stones?',
        answers: [
            
            { text: 'Mick Jagger', correct:true},
            { text: 'Flavor Flav', correct: false},
            { text: 'Julio Iglesias', correct:false},
            { text: 'Brandon Flowers', correct: false}
        ]
    },
    
    
    
    {
        question:'Best Crypto?',
        answers: [
            { text: 'BTC', correct:false},
            { text: 'XRP', correct: false},
            { text: 'XLM', correct:true},
            { text: 'DOGGY COIN', correct: false}
        ]
    },
    
    {
        question:'Best City?',
        answers: [
            { text: 'Chicago', correct:false},
            { text: 'San Antonio', correct: false},
            { text: 'Los Angeles', correct:true},
            { text: 'Boston', correct: false}
        
        ]
    },

        {
            question:'How much does james pussy hurt?',
            answers: [
                
                { text: 'A lot!', correct:true},
                { text: 'not much...', correct: false},
                { text: 'a little...', correct:false},
                { text: 'James does not have a pussy', correct: false}
            ]
        },
        
        
        
        {
            question:'How many hos has josh banged?',
            answers: [
                { text: '1', correct:false},
                { text: '100', correct: false},
                { text: '1 Million', correct:true},
                { text: '100,000', correct: false}
            ]
        },
        
        {
            question:'who knows more about tequila?',
            answers: [
                { text: 'Cary', correct:false},
                { text: 'James', correct: false},
                { text: 'shaun', correct:true},
                { text: 'Josh', correct: false}
            
            ]
        }
    ]
    
    
    
    
    
    
    
    
     