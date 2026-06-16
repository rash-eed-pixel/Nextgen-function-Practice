function checkGrade() {

const score=Number( document.getElementById('score').value);
const result=document.getElementById('gradeResult');

if(isNaN(score) || score < 0 || score > 100) {
    result.textContent = "Please enter a number between 0 and 100.";
    return;
}

let grade;
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
result.textContent = "score" + " " + score +  "=Grade" + grade;
}

function calculate() {
    const a = Number(document.getElementById('num1').value);
    const b= Number(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const result = document.getElementById('calcResult');

    let answer;
    
    switch (operator) {
        case '+':
            answer = a + b;
            break;
        case '-':
            answer = a - b;
            break;
        case '*':
            answer = a * b;
            break;
        case '/':
            answer = a / b;
            break;
        default:
            result.textContent = "unknown operation";
            return;
    }
    result.textContent = a + " " + operator + " " + b + " = " + answer;
}