let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        roundWinner = 'tie';
    }

    if
    (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSOR') ||
        (playerSelection === 'SCISSOR' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    )
    {
        playerScore++;
        roundWinner = 'palyer';
    }
    else if
        (
            (computerSelection === 'ROCK' && playerSelection === 'SCISSOR') ||
            (computerSelection === 'SCISSOR' && playerSelection === 'PAPER') ||
            (computerSelection === 'PAPER' && playerSelection === 'ROCK')
        )
        {
            computerScore++;
            roundWinner = 'computer';
        }

    //updateMessage(roundWinner, playerSelection, computerSelection);
}

function getRandomChoice()
{
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber)
    {
        case 0:
          return 'ROCK'
        case 1:
          return 'PAPER'
        case 2:
          return 'SCISSOR'
    }
}


const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

restartBtn.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndgameModal);


rock.addEventListener("click", () => handleClick("ROCK"));
paper.addEventListener("click", () => handleClick("PAPER"));
scissor.addEventListener("click", () => handleClick("SCISSOR"));


function handleClick(playerSelection)
{
    if (playerScore == 5 || computerScore == 5)
    {
        openEndgameModal();
        return;
    }

    const computerSelection = getRandomChoice();
    playRound(playerSelection, computerSelection);
    updateChoice(playerSelection, computerSelection);
    updateScore();

    if (playerScore == 5 || computerScore == 5)
    {
        openEndgameModal();
        setFinalMessage();
    }
}


function updateChoice(playerSelection, computerSelection)
{
    switch (playerSelection)
        {
            case 'ROCK':
            playerSign.textContent = 'ROCK'
            break
            case 'PAPER':
            playerSign.textContent = 'PAPER'
            break
            case 'SCISSOR':
            playerSign.textContent = 'SCISSOR'
            break
        }

    switch (computerSelection)
        {
            case 'ROCK':
                computerSign.textContent = 'ROCK'
                break
            case 'PAPER':
                computerSign.textContent = 'PAPER'
                break
            case 'SCISSOR':
                computerSign.textContent = 'SCISSOR'
                break
        }
}

const playerScoreText = document.getElementById("playerScoreText");
const computerScoreText = document.getElementById("computerScoreText");

function updateScore()
{
    playerScoreText.textContent = "Player: " + playerScore;
    computerScoreText.textContent = "Computer: " + computerScore;
}

function openEndgameModal()
{
    endgameModal.classList.add('active')
    overlay.classList.add('active')
}

function closeEndgameModal()
{
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}

function setFinalMessage()
{
    return playerScore > computerScore
    ? (endgameMsg.textContent = 'You won!')
    : (endgameMsg.textContent = 'You lost...')
}

function restartGame()
{
    location.reload();
}