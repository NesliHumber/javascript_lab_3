console.log();
console.log("-----------------Step 1: Declaring Arrays-----------------");
console.log();

let weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];

console.log();
console.log("-----------------Step 2: Accessing Arrays-----------------");
console.log();

let firstDay = weekDays[0];
let middleDay = weekDays[(weekDays.length-1)/2];
let lastDay = weekDays[weekDays.length-1];

console.log(firstDay);
console.log(middleDay);
console.log(lastDay);

console.log();
console.log("-----------------Step 3: Using Array Properties-----------------");
console.log();

console.log("numberOfElements = " + weekDays.length);

console.log();
console.log("-----------------Step 4: Array Methods-----------------");
console.log();

let lastDayOfWork = weekDays.pop();
console.log("Last day of work is " + lastDayOfWork + "!");
let days = weekDays.push("Fri", "Sat", "Sun");
console.log("Days of the week are " + days + "." + " They are " + weekDays + ".");
let daysStartWith_S = weekDays.filter(day => day.toLowerCase().startsWith('s'));
console.log("Days starting with 'S' are " + daysStartWith_S + ".");
let thirdDay = weekDays.find((day, index) => index === 2);
console.log("The third day of the week is " + thirdDay + ".");

console.log();
console.log("-----------------Step 5: Iterating Through Arrays-----------------");
console.log();

console.log("-----------------iterate 1-----------------");
console.log("Days of the week are: ");
for(let i=0; i<weekDays.length; i++){
    console.log(weekDays[i]);
}

console.log();
console.log("-----------------iterate 2-----------------");
//To print the days in one line on the console: 
let daysString = "Days of the week are ";
for (let i = 0; i < weekDays.length; i++) {
    daysString += weekDays[i];
    if (i < weekDays.length - 1) {  
        daysString += ", ";
    }
}
console.log(daysString + ".");

console.log();
console.log("-----------------iterate 3-----------------");
for(let day of weekDays){
    console.log(day);
}

console.log();
console.log("-----------------iterate 4-----------------");
for (let index in weekDays) {
    let day = weekDays[index];
    if (day.startsWith("S")) {
        console.log(day);
    }
}

console.log();
console.log("-----------------Step 6: Array Destructuring-----------------");
console.log();

let [first_day, second_day, ...remainingDays] = weekDays;
console.log("First day is ", firstDay);
console.log("Second day is ", second_day);
console.log("Remaining days:", remainingDays);

let [, , ...remainingDays2] = weekDays;
console.log("Remaining days:", remainingDays2);




