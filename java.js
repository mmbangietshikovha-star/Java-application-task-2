
const nameInput    = document.getElementById("Name");
const markInput    = document.getElementById("Mark");
const resultArea   = document.getElementById("resultArea");
const studentList  = document.getElementById("studentList");
const studentCount = document.getElementById("studentCount");
const emptyState   = document.getElementById("emptyState");


let totalStudents = 0;


const mark = parseInt(markRaw);

  if (isNaN(mark) || mark < 0 || mark > 100) {
    resultArea.textContent = "Enter correct number";
    markInput.focus();
    return;
  }


let grade, statusText;

  if (mark >= 80 && mark <= 100) {
    grade      = "Pass with Distinction";
    statusText = "PASS";


  } else if (mark >= 65 && mark <= 79) {
    grade      = "Good";
    statusText = "PASS";


  } else if (mark >= 50 && mark <= 64) {
    grade      = "Pass";
    statusText = "PASS";


  } else {
    grade      = "Fail";
    statusText = "FAIL";
  }


  nameInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") submitStudent();
});

markInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") submitStudent();
});