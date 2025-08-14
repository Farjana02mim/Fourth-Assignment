//1

function totalFine( fare ) {
          // You have to write your code here
          if(typeof fare!=='number' || fare <= 0){
            return 'Invalid';
          }
          const fine = fare + fare * (20/100) + 30 ;
          return fine;
}

//2

function  onlyCharacter( str ) {
          // You have to write your code here
          if(typeof str!=='string'){
            return 'Invalid';
          }
        //   str = str.replaceAll(" ", "").toUpperCase();
          let result = "";
          for (let ch of str) {
            if (ch !== " ") {
              result += ch;
            }
          }

          str = result.toUpperCase();
          return str;
}

//3 

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

//4

function  isSame(arr1 , arr2 ) {
          // You have to write your code here
          if(Array.isArray(arr1)==false || Array.isArray(arr2)==false){
              return 'Invalid';
         }
          if(arr1.length === arr2.length){
              for (let i = 0; i < arr1.length; i++) {
                    if (arr1[i] !== arr2[i]) {
                        return false;
                    }
             }
             return true;
          }
          else{
            return false;
          }
}

//5

function  resultReport( marks ) {
          // You have to write your code here
          if(Array.isArray(marks)==false){
              return 'Invalid';
          }
          let pass = 0 , fail = 0 , final = 0 , result ;
          if(marks.length === 0){
            result = {
                finalScore: 0 ,
                pass: 0 ,
                fail: 0
            };
          }
          else{
            for(let mark of marks){
            final += mark;
            if(mark>40){
                pass++;
            }else{
                fail++;
            }
          }
          let avg = final/marks.length;
          result = {
            finalScore: Math.round(avg),
            pass: pass,
            fail: fail
         };
        } 
         return result;
}