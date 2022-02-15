//DONE BUT COME BACK TO TO GET RID OF BULLETS Make a request to the server and put the list of games on the left side in the #game-list nav element - GOT THE MANUFACTURERS
//DONE When the page loads, show all the details of the the first game in the array returned from your fetch
//DONE The user should be able to click on the list of games in the nav to see its details.
//DONE The user should be able to enter a high score in the form on the right side and have it show that value for "high score".

let games;
let currentGame;

let gameList = document.querySelector('.game-list')

let detailImage = document.querySelector('#detail-image')
let detailTitle = document.querySelector('#detail-title')
let detailHighScore = document.querySelector('#detail-high-score')

let highScoreForm = document.querySelector('#high-score-form')
let scoreInput = document.querySelector('#score-input').value


fetch ('http://localhost:3000/games')
.then(resp => resp.json())
.then(gameData => {
    games = gameData;
    console.log(gameData)
    putList(games);

    showFirstGame(games[0]);

    enterHighScore(games);
})

function putList (games) {
    games.forEach(games => { 
        let listingOfGames = document.createElement('p')
        listingOfGames.textContent = `${games.name} (${games.manufacturer_name})`
        gameList.append(listingOfGames);

        listingOfGames.addEventListener('click', e => {
            console.log('clicked')

            showFirstGame(games);

        // enterHighScore(games);
        })
    })  
}

function showFirstGame (games) {
    currentGame = games;
    detailImage.src = games.image
    detailTitle.textContent = games.name
    detailHighScore.textContent = games.high_score

    // enterHighScore(games);
}

function enterHighScore () {
    
    highScoreForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log('submitted')

        // detailHighScore.textContent = e.target['score-input'].value **this does not save it everytime you click to a new game
        currentGame.high_score = e.target['score-input'].value

        e.target.reset();
        showFirstGame(currentGame);
    })
}

