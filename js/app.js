'use strict';

'use strict';
let score = 0;
var username = prompt("Please Enter your name").toUpperCase()
alert ("Welcome"+username);
alert('let\'s play a guessing game about me.');

function quizSuring (){
    let sureQuestion = prompt('are you ready to have this quiz? if yes insert Y else insert N ').toUpperCase()
    
    switch (sureQuestion) {
        case 'Y':
            alert('pres ok to continue');
            score=score+1;
            break;
        case 'N':
            alert('close the Tab to leave this site');
            break;
        default:
            text = 'this is not an expected value try again'
            console.log(text);
            break;
    }
    }
    quizSuring ();
    

function MYMAJOR(){
    let mymajor = prompt('Iam a Singer ? yes or no'); 
console.log(mymajor);
if (mymajor==='yes' || mymajor==='y')
{alert(' Wrong ans.');}
else{alert('correct Ans.');
score=score+1}

}
MYMAJOR();


function sport(){
let sportQues=prompt('is majd like sport?(yes/y or no/n)');
console.log(sportQues);
if (sportQues==='yes' || sportQues==='y')
{alert('correct ans.');
score=score+1;}
else{alert('Wrong Ans.');}
}
sport();


let animals = ['turtile', 'cat', 'dog'];
function fAnimals(){
let userAns = prompt('Guess What is my fav animal ? ');

let flag = false;
for (let t = 1; t < 3; t++) {
    for (let f = 0; f < animals.length; f++) {
        if (userAns == animals[f]) {
            alert('You got it  ');
           

            flag = true;
            score++;
            return score;
            break;
        }


    }
    if (flag == true) { break; }
    else {
        alert(userAns + " Is a Wrong Answer Please try again ");
        userAns = prompt('Try Again');

    }
}


if (flag == false) {
    alert('Try harder Next Time');
    alert('The right answers is : ' + animals);
    document.write('<br>');
    document.write('my fav animal is answers is : ' + animals);

}
return animals;
}
 fAnimals();


 function MYHOME (){
    let myhome = prompt('do I live in Irbid ? yes or no');
    console.log(myhome)
    if (myhome==='yes' || myhome ==='y')
{alert(' correct ans.');
score=score+1;}
else{alert(' Wrong Ans.');}

    }
    
    MYHOME();

function place(){
let favPlace=prompt('is majds  favourite place Lebanon?(yes/y or no/n)');
console.log(favPlace);
if (favPlace==='yes' || favPlace==='y')
{alert('correct ans.');
score=score+1;}
else{alert('Wrong Ans.');}
}

place();

function MYDRINK(){
    let mydrink = prompt('Is American coffee my Favourite drink ? yes or no');
    console.log(mydrink);
    if (mydrink==='yes' || mydrink==='y')
{alert('correct ans.');
score=score+1;}
else{alert('Wrong Ans.');
    
}
}
    
    MYDRINK();


    function luckNum(){
        for (let i = 1; i <=10; i++) {
            let luckNum = prompt('please guess my luckNum ');
            if (luckNum >= 8) {
                
                alert('it is too high')
            } else if (luckNum <= 6) {
                
                alert('it is too low')
            } else if (luckNum == 7) {
                //console.log(myAge);
                //console.log('it is true');
                alert('it is true')
                score++;
                break;
        
            }
        }
        }
        luckNum();
   
    

    document.write('<br>');
    document.write('<p> I am an Engineer </p>');
    document.write('<br>');
    document.write('<p> my fav animals are: ' + animals + '</p>');
    document.write("<pre>");
    alert('Your Score is ' + score + '/8 ');
    document.write('<br>');
    document.write('<p> Good Job!... You got ' + score + ' correct answers! </p>');
    document.write('<br>');
    document.write('<br>');
    alert('welcome ' + username + ' and thanks for doing the quiz,I wish to you the best ');
    document.write('<p> ^_^ thanks for doing the quiz, I wish to you the best ^_^ </p> ');
    alert (" Thanks for your time"+ username);

    