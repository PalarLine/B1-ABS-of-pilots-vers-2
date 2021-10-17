

function userFillForm() {


let userInput = formInput.value.toLowerCase();

if(userInput.length == 0) {

    document.getElementById('formGetting').innerHTML = '&nbsp;';
}

let resultArrey = [];
let resultStr;

const alphabet =  {
    'a': 'Alpha',
    'b': 'Bravo',
    'c': 'Charlie',
    'd': 'Delta',
    'e': 'Echo',
    'f': 'Foxtrot',
    'g': 'Golf',
    'h': 'Hotel',
    'i': 'India',
    'j': 'Juliett',
    'k': 'Kilo',
    'l': 'Lima',
    'm': 'Mike',
    'n': 'November',
    'o': 'Oscar',
    'p': 'Papa',
    'q': 'Quebec',
    'r': 'Romeo',
    's': 'Sierra',
    't': 'Tango',
    'u': 'Uniform',
    'v': 'Victor',
    'w': 'Whiskey',
    'x': 'X-ray',
    'y': 'Yankee',
    'z': 'Zulu',
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
};

console.log( alphabet );



for (let i = 0; i < userInput.length; i++) {
    
     resultArrey.push(alphabet[userInput[i]]);

     resultStr = resultArrey.join(' ');

     document.getElementById('formGetting').innerHTML = resultStr;

}
} 