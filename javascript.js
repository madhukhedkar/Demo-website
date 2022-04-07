// string and Templates

// const firstName = 'Madhu';
// const lastName = 'Khedkar';
// const birthYear = 1992;
// const year = 2022;

// const madhu = "I'm " + firstName +" " + lastName + ', a ' + (year - birthYear) + ' old tearcher!';

// console.log (madhu);

//Adavanced method

// const madhu = `I'm ${firstName}, a ${year - birthYear} old teacher!`;
// console.log (madhu);

//if else statement

// const age = 15
// const isOldOk = age >= 18;

// if (isOldOk) {
//     console.log('Madhu can get license');
// }
// else {
//     console.log('Madhu can not get license');
// }

//if else problems

// const country = 'India';
// const population = 44;

// if (population > 33) {
//     console.log(`${country}'s population is above average`);
//     } else {
//     console.log(`${country}'s population is ${33 - population} million
//     below average`,);
// }

// console.log(average);


//type conversion

// 

// console.log(Boolean(0)); //false

// const money = 0;

// if (money){
//     console.log("Don't spend it.");  // money = 0, this is false.
// }else {
//     console.log('You should get a Job.');
// }

// //Output You should get a Job.]]

// let height; //varible value is undefined

// if (height){
//     console.log("Height is defined"); //that's why this false
// }else{
//     console.log("Height is undefined");
// }

//Output Height is undefined]]

//Equality operators

// 

// // learn equality operators
// const favourite = Number (prompt("What's your favourite number?"));
// // console.log(favourite);
// // console.log(typeof favourite);

// if (favourite === 23){
//     console.log("23 is a coool number");

// }else if(favourite === 7){
//     console.log("7 is also a cool number");
// }else{
//     console.log("number is not 23 or 7");
// }

//boolean logic

// Assignment on equlity opertors

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

// if (numNeighbours === 1){
//     console.log("Only 1 border!'");
// }else if (numNeighbours  > 1){
//     console.log("More than 1 border!'");
// }else{
//     console.log("No borders");
// }


//Logical Operators

// Assignment on Logical Operators

// const english = true;
// const lessThanFifftyMillion = true;
// const isIsland = false;

// if (english && lessThanFifftyMillion && !isIsland){
//     console.log("You should live in Portugal")
// }else{
//     console.log("'You should not live in Portugal")
// }

// Assignment  Logical Operators

// const country = "India";
// const language = "english";
// const population = 45;
// const isIsland = false;


// if (language === 'english' && population < 50 && !isIsland)
// {
// console.log(`You should live in ${country} :)`);
// } else {
// console.log(`${country} does not meet your criteria :(`);
// }


//Switch Statement

const day = 'monday'

switch (day){
    case 'monday': //day=== monday 
        console.log("Plan course structure");
        console.log("Go to codign meetup");
        break;
    case 'tuesday':
        console.log("Prepare Theory videos");
        break;
    case 'Wednesday':
    case 'thursday':
        console.log("Write code example");
        break;
    case 'friday':
        console.log("Record Videos");
        break;
    case 'saturday':
    case 'sunday':    
        console.log("Enjoy the weekend");       
        break;
    default: 
        console.log("Not a valid day");
}

