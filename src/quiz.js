class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)

  // 2. getQuestion()

  // 3. moveToNextQuestion()

  // 4. shuffleQuestions()

  // 5. checkAnswer(answer)

  // 6. hasEnded()

  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  moveToNextQuestion() {
    return this.questions[this.currentQuestionIndex++];
  }

  shuffleQuestions() {
    for (let i = 0; i < this.questions.length; i++) {
      let randomIndex = Math.floor(Math.random() * this.questions.length);
      let questiontoSwap = this.questions[i];

      this.questions.splice(i, 1);
      this.questions.splice(randomIndex, 0, questiontoSwap);
    }
  }

  checkAnswer(answer) {
    if (answer === this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswers++;
      return true;
    } else {
      return false;
    }
  }
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if ((this.currentQuestionIndex = this.questions.length)) {
      return true;
    }
  }
  filterQuestionsByDifficulty(Inputdifficulty) {
    if (Inputdifficulty > 0 && Inputdifficulty <= 3) {
      const filteredQuestion = this.questions.filter((currentQuestion2) => {
        if (currentQuestion2.difficulty === Inputdifficulty) {
          return true;
        }
      });

      this.questions = filteredQuestion;
    }
  }

  averageDifficulty() {
    const totalDif = this.questions.reduce((acc, currentQuesiton) => {
      return acc + currentQuesiton.difficulty;
    }, 0);

    return totalDif / this.questions.length;
  }
}
