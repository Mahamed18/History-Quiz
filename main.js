// History Quiz

document.getElementById("mark-btn").addEventListener("click", btnclicked);

function btnclicked() {
  let answer1 = document.getElementById("answer1-in");
  let answer2 = document.getElementById("answer2-in");
  let answer3 = document.getElementById("answer3-in");
  let answer4 = document.getElementById("answer4-in");
  let feedback1 = document.getElementById("feedback1-out");
  let feedback2 = document.getElementById("feedback2-out");
  let feedback3 = document.getElementById("feedback3-out");
  let feedback4 = document.getElementById("feedback4-out");
  let result = document.getElementById("result-out");
  let message = document.getElementById("result2-out");
  let correct = `<span class ="green" >Correct</span>`;
  let incorrect = `<span class ="red" >Incorrect</span>`;
  let score = 0;

  // Question 1

  if (answer1.value == "1868") {
    feedback1.innerHTML = correct;
    answer1.style.border = "2px solid green";
    score++;
  } else {
    feedback1.innerHTML = incorrect;
    answer1.style.border = "2px solid red";
  }

  // Question 2

  if (answer2.value.toLowerCase() == "brazil") {
    feedback2.innerHTML = correct;
    answer2.style.border = "2px solid green";
    score++;
  } else {
    feedback2.innerHTML = incorrect;
    answer2.style.border = "2px solid red";
  }

  // Question 3

  if (answer3.value.toLowerCase() == "austria") {
    feedback3.innerHTML = correct;
    answer3.style.border = "2px solid green";
    score++;
  } else if (answer3.value.toLowerCase() == "russia") {
    feedback3.innerHTML = correct;
    answer3.style.border = "2px solid green";
    score++;
  } else if (answer3.value.toLowerCase() == "prussia") {
    feedback3.innerHTML = correct;
    answer3.style.border = "2px solid green";
    score++;
  } else if (answer3.value.toLowerCase() == "britain") {
    feedback3.innerHTML = correct;
    answer3.style.border = "2px solid green";
    score++;
  } else if (answer3.value.toLowerCase() == "uk") {
    feedback3.innerHTML = correct;
    answer3.style.border = "2px solid green";
    score++;
  } else if (answer3.value.toLowerCase() == "united kingdom") {
    feedback3.innerHTML = correct;
    answer3.style.border = "2px solid green";
    score++;
  } else if (answer3.value.toLowerCase() == "france") {
    feedback3.innerHTML = correct;
    answer3.style.border = "2px solid green";
    score++;
  } else {
    feedback3.innerHTML = incorrect;
    answer3.style.border = "2px solid red";
  }

  // Question 4

  if (answer4.value.toLowerCase() == "wilhelm i") {
    feedback4.innerHTML = correct;
    answer4.style.border = "2px solid green";
    score++;
  } else if (answer4.value.toLowerCase() == "wilhelm") {
    feedback4.innerHTML = correct;
    answer4.style.border = "2px solid green";
    score++;
  } else if (answer4.value.toLowerCase() == "wilhelm the first") {
    feedback4.innerHTML = correct;
    answer4.style.border = "2px solid green";
    score++;
  } else if (answer4.value.toLowerCase() == "wilhelm 1") {
    feedback4.innerHTML = correct;
    answer4.style.border = "2px solid green";
    score++;
  } else if (answer4.value.toLowerCase() == "prince of grapeshot") {
    feedback4.innerHTML = correct;
    answer4.style.border = "2px solid green";
    score++;
  } else {
    feedback4.innerHTML = incorrect;
    answer4.style.border = "2px solid red";
  }

  // Results and Feedback

  if (score == 0) {
    message.innerHTML = "Study hard and try again!";
  } else if (score == 1) {
    message.innerHTML = "Don't worry you'll do better next time!";
  } else if (score == 2) {
    message.innerHTML = "Nobody's perfect. Try again next time!";
  } else if (score == 3) {
    message.innerHTML = "Valiant effort, 100% next time for sure!";
  } else {
    message.innerHTML = "Perfect score! Excellent work!";
  }

  result.innerHTML = `${score}/4 |${(score / 4) * 100}%`;
}
