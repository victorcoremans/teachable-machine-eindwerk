import { questions } from "./Questions.js";

export class Reaction {
    handle(mostProbable, questionNumber) {
        let scores = JSON.parse(localStorage.getItem("scores"));
        const currentQuestion = questions[questionNumber];
        if (mostProbable == "Thumbs up") {
            scores.scoreMEB += currentQuestion.scoreMEB;
            scores.scoreJOU += currentQuestion.scoreJOU;
            scores.scoreXD += currentQuestion.scoreXD;
            scores.scoreCOM += currentQuestion.scoreCOM;
      }
        if (mostProbable == "Thumbs neutral") {
        console.log("Neutraal gekozen: geen punten erbij of eraf.");
          }
        if (mostProbable == "Thumbs down") {
            scores.scoreMEB -= currentQuestion.scoreMEB;
            scores.scoreJOU -= currentQuestion.scoreJOU;    
            scores.scoreXD -= currentQuestion.scoreXD;
            scores.scoreCOM -= currentQuestion.scoreCOM;
        }
        localStorage.setItem("scores", JSON.stringify(scores));
        return true
    }
}