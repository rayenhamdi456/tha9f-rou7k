let currentQuestions = [];
let currentIndex = 0;

// ربط العناصر
const questionBox = document.getElementById("question");
const answerInput = document.getElementById("answer");
const resultBox = document.getElementById("result");

// اختيار الموضوع
function selectTopic(topic) {
  if (topic === "football") currentQuestions = footballQuestions;
  if (topic === "movies") currentQuestions = moviesQuestions;
  if (topic === "famous") currentQuestions = famousQuestions;
  if (topic === "math") currentQuestions = mathQuestions;
  if (topic === "geo") currentQuestions = geoQuestions;
  if (topic === "history") currentQuestions = historyQuestions;
  if (topic === "islam") currentQuestions = islamQuestions;
  if (topic === "mathal") currentQuestions = mathalQuestions;

  currentIndex = 0;
  showQuestion();

  document.getElementById("home").style.display = "none";
  document.getElementById("game").style.display = "block";
}

// عرض السؤال
function showQuestion() {
  questionBox.textContent = currentQuestions[currentIndex].q;
  answerInput.value = "";
  resultBox.textContent = "";
}

// التحقق من الإجابة
function checkAnswer() {
  const userAnswer = answerInput.value.trim();

  if (userAnswer === "") return;

  const correct = currentQuestions[currentIndex].a;

  if (userAnswer === correct) {
    resultBox.textContent = "أحسنت ✅";
    resultBox.style.color = "green";

    setTimeout(() => {
      currentIndex++;

      if (currentIndex < currentQuestions.length) {
        showQuestion();
      } else {
        questionBox.textContent = "🎉 أكملت جميع المراحل!";
        answerInput.style.display = "none";
      }
    }, 800);
  } else {
    resultBox.textContent = "أعد مجددًا ❌";
    resultBox.style.color = "red";
  }
}

// الرجوع للواجهة الرئيسية
function goHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("game").style.display = "none";

  answerInput.style.display = "block";
  answerInput.value = "";
  resultBox.textContent = "";
}
