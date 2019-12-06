const fs = require('fs');

// first challenge
fs.readFile('./input.txt', (err, data) => {
    console.time('firstchallenge');
    if (err) {
        console.log(err);
    }

    const inputData = data.toString();
    const inputArray = inputData.split('');
    const answer = inputArray.reduce((total,val,index) =>{
        if ( val === '('){
            return total + 1;
        } else if (val === ')'){
            return total - 1
        }
    },0);

    console.log('first answer:', answer);
    console.timeEnd('firstchallenge');
});

// second challenge
fs.readFile('./input.txt', (err, data) => {
    console.time('secondchallenge');
    if (err) {
        console.log(err);
    }

    const inputData = data.toString();
    const inputArray = inputData.split('');
    let num = 0;
    let pos = 0;

    for (let i = 0; i < inputArray.length; i++){
        if (num !== -1){
            if (inputArray[i] === '('){
                num += 1;
            } else if (inputArray[i] === ')'){
                num -= 1;
            }
            pos += 1;
        }else {
            break;
        }
        
    }

    console.log('second answer', pos);
    console.timeEnd('secondchallenge');
});