//  Create the player object and gives it two keys
let player={
    name:"Anthony",
    chips:150
}
let cards = []
let sum = 0
let hasBlackJack = false 
let isAlive = false //variable that determines if the player is still alive.
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")

// 4. Renders the player's name and chips in playerEl
playerEl.textContent=player.name+" : $"+player.chips

//A function that generates random card numbers
function getRandomCard() {
    // if 1 -> return 11
    // if 11-13 -> return 10
 let randnum= Math.floor( Math.random()*13 ) + 1
 if (randnum===1)
 {
     return 11
 }
 else if(randnum>10)
 {
     return 10
 }
 else{
     return randnum
 }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "//renders out the generated cards
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard()//A function that draws a new card 
{

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
