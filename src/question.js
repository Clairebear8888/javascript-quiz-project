class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    // let i = (currentIndex = this.choices.length);
    // let j;
    // let temp;
    // while (--i > 0) {
    //   j = Math.floor(Math.random() * (i + 1));
    //   temp = choices[j];
    //   choices[j] = choices[i];
    //   choices[i] = choices[j];

    for (let i = 0; i < this.choices.length; i++) {
      let randomIndex = Math.floor(Math.random() * this.choices.length);
      let choiceToMove = this.choices[i];
      this.choices.splice(i, 1);
      this.choices.splice(randomIndex, 0, choiceToMove);
    }
  }
}

// testing

const question1 = new Question(
  "balhahaha",
  ["cat", "snake", "flower", "fish"],
  "answer hhaha",
  2
);
question1.shuffleChoices();
console.log(question1);
