// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"]
function writeCards(cards){
    for (let a = 0; a < cards.length; a++){
        cards[a] = `Thank you, ${cards[a]}, for the wonderful surprise gift!`
    }
    return cards
   
}
console.log(writeCards(cards))

function countDown(){
    let countDown = 0
while (countDown < 11){
    console.log(countDown++)
}
}
