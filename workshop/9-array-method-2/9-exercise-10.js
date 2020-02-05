// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
function calculateAverage(grades) {
    let sum=0;
    grades.forEach(function (x){
        sum += x;
    })
    let average = Math.round(sum/grades.length);
    let grade;
    if (average <60){
        grade = "F";
    }
    else if (average>=60 && average <70){
        grade = "D";
    }
    else if (average>=70 && average <80){
        grade = "C";
    }
    else if (average>=80 && average <90){
        grade = "B";
    }
    else {
        grade = "A";
    }
    return grade;
}

console.log(calculateAverage([98, 95, 85, 88, 99, 98, 82, 95]));

 
// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


