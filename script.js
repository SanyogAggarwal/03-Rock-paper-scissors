let humanscore = 0;
let computerscore = 0;
let NumRounds = 0;
let TotalRounds = 5;



function getComputerChoice() {
    let num = Math.random()*10
    if (num <= 3) {
        return "rock";
    }else if (num >=7) {
        return "paper";
    }else {
        return "scissors";
    }
}
console.log(getComputerChoice());



function playRound(HumanChoice){
    const ComputerChoice = getComputerChoice();
    // const resultMessage = document.getElementById("result-message");
if(ComputerChoice == HumanChoice){
    document.getElementById("result-message").textContent = "ITS A TIE"
}else if (HumanChoice == "rock" && ComputerChoice == "scissors" || HumanChoice == "paper" && ComputerChoice == "rock" || HumanChoice == "scissors" && ComputerChoice  == "paper"){
    humanscore += 1;
    document.getElementById("result-message").textContent = "You Won This Round"
}else{
    computerscore += 1;
    document.getElementById("result-message").textContent = "You Lose This Round"
    };
    NumRounds += 1;

    document.getElementById("human-choice").textContent = HumanChoice;
    document.getElementById("computer-choice").textContent = ComputerChoice;


    document.getElementById("human-score").textContent = humanscore;
    document.getElementById("computer-score").textContent = computerscore;
    document.getElementById("round-count").textContent = NumRounds;

    if(NumRounds == TotalRounds){
        finalResult();
    }
};

function finalResult(){
    if(humanscore > computerscore){
        document.getElementById("result-message").textContent = "YOU WON THE GAME"
    }else if(humanscore < computerscore){
        document.getElementById("result-message").textContent = "YOU LOST THE GAME"
    }else{
        document.getElementById("result-message").textContent = "THIS GAME IS DRAW"
        }
        buttons.forEach(button => {
            button.disabled = true;
        });
}



const buttons = document.querySelectorAll("button");

 buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const getHumanChoice = e.target.id.toLowerCase();
        playRound(getHumanChoice)
      });
    });

