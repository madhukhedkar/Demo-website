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

const age = 18;

if (age === 18) console.log('You are an adult now.');

const age = 18;  //18 is number

if (age === 18){
    console.log("You just became  adult - Strict");  // this is true 
}

if (age == 18){
    console.log("You just became  adult - Loose"); // this is true
}

const age = "18";  //18 is string

if (age === 18){
    console.log("You just became  adult - Strict");  // this is false 
}

if (age == 18){
    console.log("You just became  adult - Loose"); // this is true
}