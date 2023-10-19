import readlineSync from 'readline-sync';

function nameRequest() {
    console.log('Welcome the Brain Games!');
    console.log('May i have your name: ');
    const name = readlineSync.question('Your name: ');
    console.log('Hello ' + name + '!');
}
