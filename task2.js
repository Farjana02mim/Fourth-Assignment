function  onlyCharacter( str ) {
          // You have to write your code here
          if(typeof str!=='string'){
            return 'Invalid';
          }
          // str = str.replaceAll(" ", "").toUpperCase();
          let result = "";
          for (let ch of str) {
            if (ch !== " ") {
              result += ch;
            }
          }

          str = result.toUpperCase();
          return str;
}
console.log(onlyCharacter("  h e llo wor   ld"));