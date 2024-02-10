let name = prompt("Name");
let roll = prompt("Roll");
let reg = prompt("Reg");
let ban = prompt("Bangla");
let eng = prompt("English");
let math = prompt("Math");
let s = prompt("Science");
let ss = prompt("Social Science");
let reli = prompt("Religion");

console.log(`

    Student Name: ${name}
    Roll        : ${roll}
    Registration : ${reg}
    
    ===========================
    ===========================

    Subject : Mark  : GPA : Grade
    Bangla: ${ban} -${getGpa(ban)}- ${getGrade(ban)}
    English: ${eng} - ${getGpa(eng)} - ${getGrade(eng)}
    Math: ${math} - ${getGpa(math)} - ${getGrade(math)}
    Science: ${s} - ${getGpa(s)} -${getGrade(s)}
    Social Science: ${ss} - ${getGpa(ss)} -${getGrade(ss)}
    Religion: ${reli} - ${getGpa(reli)}  -${getGrade(reli)}

    ======================
    ======================

    Final Reslut: ${isPassed(ban, eng, math, s, ss, reli) ? "You are Passed" : "You are Failed"}

`);


// Subject : Mark  : GPA : Grade
//     Bangla: ${ban} - ${getGpa(ban)} - ${getGrade(ban)}
//     English: ${eng} - ${getGpa(eng)} - ${getGrade(eng)}
//     Math: ${math} - ${getGpa(math)} - ${getGrade(math)}
//     Science: ${s} - ${getGpa(s)} - ${getGrade(s)}
//     Social Science: ${ss} - ${getGpa(ss)} - ${getGrade(ss)}
//     Religion: ${reli} - ${getGpa(reli)} - ${getGrade(reli)}
//     ======================
//     ======================