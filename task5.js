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
console.log(resultReport([]));

