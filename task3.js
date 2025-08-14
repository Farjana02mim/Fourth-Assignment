function  bestTeam( player1, player2 ) {
        // You have to write your code here
        if (typeof player1 !== "object" || typeof player2 !== "object") {
            return "Invalid";
        }
        let totalOfPlayer1 = player1.foul + player1.cardY + player1.cardR;
        let totalOfPlayer2 = player2.foul + player2.cardY + player2.cardR;
        let result;
        if(totalOfPlayer1 > totalOfPlayer2){
            result = player2.name;
        }
        else if(totalOfPlayer1 < totalOfPlayer2){
            result = player1.name;
        }
        else{
            result = 'Tie';
        }
        return result;
}
console.log(bestTeam(
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
));
