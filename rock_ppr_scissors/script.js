const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playGame(playerMove){
    const computerMove = pickComputer();
   
    let result = '';

    if(playerMove === 'rock'){
        if (computerMove === 'rock'){
            result = 'Tie'
        }
        else if (computerMove === 'paper'){
            result = 'Loose'
        }
        else if (computerMove === 'scissors'){
            result = 'Win'
        }
    }

    else if(playerMove == 'paper'){
        if (computerMove === 'rock'){
            result = 'Win'
        }
        else if (computerMove === 'paper'){
            result = 'Tie'
        }
        else if (computerMove === 'scissors'){
            result = 'Loose'
        }
    }

    else if(playerMove === 'scissors'){
        if (computerMove === 'rock'){
            result = 'Loose'
        }
        else if (computerMove === 'paper'){
            result = 'Win'
        }
        else if (computerMove === 'scissors'){
            result = 'Tie'
        }
    }

    if(result === 'Win'){
        score.wins += 1;
    }else if (result === 'Loose'){
        score.losses += 1;
    }else if(result === 'Tie'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-move').innerHTML
    = `You
    <img src="/JavaScript/img/${playerMove}-emoji.png"
    class="move-icon">
    <img src="/JavaScript/img/${computerMove}-emoji.png"
    class="move-icon"> 
    Computer`
}

function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputer(){
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber <
    1/3){
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 &&
    randomNumber < 2/3){
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 &&
    randomNumber < 1){
        computerMove = 'scissors';
    }
    return computerMove;
}