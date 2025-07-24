
let marks = prompt("Enter your marks");

marks = Number(marks);

if (marks >= 90 && marks <= 100) {
  alert("Grade:A");
  alert("Message: Excellent!");
} else if (marks >= 75 && marks <= 89) {
  alert("Grade:B");
  alert("Great job!");
} else if (marks >= 60 && marks <= 74) {
  alert("Grade:C");
  alert("Good effort");
} else if (marks >= 40 && marks <= 59) {
  alert("Grade:D");
  alert("You passed");
} else {
  alert("Grade:F");
  alert("Better luck next time.");
}