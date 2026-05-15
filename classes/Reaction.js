import { questions } from "./Questions.js";

export class Reaction {
    handle(mostProbable, questionNumber) {
        let answerMEB = 0;
        let answerJOU = 0;
        let answerXD = 0;
        let answerCOM = 0;
        let scores = JSON.parse(localStorage.getItem("scores"));
        if (mostProbable == "Thumbs up") {

            answerCOM = questions[questionNumber].scoreCOM;
            answerMEB = questions[questionNumber].scoreMEB;
            answerJOU = questions[questionNumber].scoreJOU;
            answerXD = questions[questionNumber].scoreXD;
            answerCOM = scores.scoreCOM + answerCOM;
            answerMEB = scores.scoreMEB + answerMEB;
            answerJOU = scores.scoreJOU + answerJOU;
            answerXD = scores.scoreXD + answerXD;
            localStorage.setItem("scores", JSON.stringify({scoreMEB: answerMEB, scoreJOU: answerJOU, scoreXD: answerXD, scoreCOM: answerCOM}));
      }
        if (mostProbable == "Thumbs neutral") {
            answerCOM = 0;
            answerMEB = 0;
            answerJOU = 0;
            answerXD = 0;
            answerCOM = scores.scoreCOM + answerCOM;
            answerMEB = scores.scoreMEB + answerMEB;
            answerJOU = scores.scoreJOU + answerJOU;
            answerXD = scores.scoreXD + answerXD;
            localStorage.setItem("scores", JSON.stringify({scoreMEB: answerMEB, scoreJOU: answerJOU, scoreXD: answerXD, scoreCOM: answerCOM}));
          }
        if (mostProbable == "Thumbs down") {
            answerCOM = questions[questionNumber].scoreCOM * -1;
            answerMEB = questions[questionNumber].scoreMEB * -1;
            answerJOU = questions[questionNumber].scoreJOU * -1;
            answerXD = questions[questionNumber].scoreXD * -1;
            answerCOM = scores.scoreCOM + answerCOM;
            answerMEB = scores.scoreMEB + answerMEB;
            answerJOU = scores.scoreJOU + answerJOU;
            answerXD = scores.scoreXD + answerXD;
            localStorage.setItem("scores", JSON.stringify({scoreMEB: answerMEB, scoreJOU: answerJOU, scoreXD: answerXD, scoreCOM: answerCOM}));
        }
    }
}