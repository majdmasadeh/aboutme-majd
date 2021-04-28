'use strict';

'use strict';
let score = 0;
var username = prompt("Please Enter your name").toUpperCase();
alert ("Welcome"+username);
alert('let\'s play a guessing game about me.');

function quizSuring (){
    let sureQuestion = prompt('are you ready to have this quiz? if yes insert Y else insert N ').toUpperCase()
    //console.log(sureQuestion)
    switch (sureQuestion) {
        case 'Y':
            alert('pres ok to continue')
            break;
        case 'N':
            alert('close the Tab to leave this site')
            break
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
else{alert('correct Ans.');}

}
MYMAJOR();


function sport(){
let sportQues=prompt('is majd like sport?(yes/y or no/n)');
console.log(sportQues);
if (sportQues==='yes' || sportQues==='y')
{alert('correct ans.');}
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
{alert(' correct ans.');}
else{alert(' Wrong Ans.');}

    }
    
    MYHOME();

function place(){
let favPlace=prompt('is majds  favourite place Lebanon?(yes/y or no/n)');
console.log(favPlace);
if (favPlace==='yes' || favPlace==='y')
{alert('correct ans.');}
else{alert('Wrong Ans.');}
}

place();

function MYDRINK(){
    let mydrink = prompt('Is American coffee my Favourite drink ? yes or no');
    console.log(mydrink);
    if (mydrink==='yes' || mydrink==='y')
{alert('correct ans.');}
else{alert('Wrong Ans.');
    
}
} 
    MYDRINK();
    

/*let majd=prompt('Enter your name !!');
console.log(majd);

let age=prompt('are your above 18? (y/n)');

if(age ==='y')
{
  console.log('you are welcome');
}else{console.log('go to kids part');
}

let question1=prompt('Is Majd an Engineer ? (yes/y or no/n)').toLowerCase();
console.log(question1);
if (question1==='yes' || question1==='y')
{alert('Correct Ans.');}
else{alert('Wrong Ans.');}

let question2=prompt('is majd like sport?(yes/y or no/n)');
console.log(question2);
if (question2==='yes' || question2==='y')
{alert('correct ans.');}
else{alert('Wrong Ans.');}


let question3=prompt('is majds  like turtiles?(yes/y or no/n)');
console.log(question3);
if (question3==='yes' || question3==='y')
{alert('correct ans.');}
else{alert('Wrong Ans.');}

let question4=prompt('is majds  favourite color black?(yes/y or no/n)');
console.log(question4);
if (question4==='yes' || question4==='y')
{alert('Wrong Ans.');}
else{alert('correct ans');}

let question5=prompt('is majds  favourite place Lebanon?(yes/y or no/n)');
console.log(question5);
if (question5==='yes' || question5==='y')
{alert('correct ans.');}
else{alert('Wrong Ans.');}






// let work = prompt('do you work? (y/n)');
// console.log('do you work?'+work);
// let sport = prompt('do you making sport daily?');
// console.log('do you making sport daily' +sport);


*/