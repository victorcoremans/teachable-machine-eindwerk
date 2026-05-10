import { Reaction } from "./Reaction.js";
import { Leaderboard } from "./Leaderboard.js";
import { questions } from "./Questions.js";

export class App {
    constructor() {
        this.URL = "./my_model/";
        this.model = null;
        this.webcam = null;
        this.labelContainer = null;
        this.maxPredictions = 0;

        this.reaction = new Reaction();
        this.leaderboard = new Leaderboard();
    }

    async init() {
        const modelURL = this.URL + "model.json";
        const metadataURL = this.URL + "metadata.json";

        this.model = await tmImage.load(modelURL, metadataURL);
        this.maxPredictions = this.model.getTotalClasses();

        const flip = true;
        this.webcam = new tmImage.Webcam(200, 200, flip);

        await this.webcam.setup();
        await this.webcam.play();

        window.requestAnimationFrame(() => this.loop());

        document.getElementById("webcam-container")
            .appendChild(this.webcam.canvas);

        this.labelContainer = document.getElementById("label-container");

        for (let i = 0; i < this.maxPredictions; i++) {
            this.labelContainer.appendChild(document.createElement("div"));
        }
    }

    async loop() {
        this.webcam.update();
        await this.predict();
        window.requestAnimationFrame(() => this.loop());
    }

    async predict() {
        const prediction = await this.model.predict(this.webcam.canvas);

        let mostProbable = "";
        let score = 0;

        for (let i = 0; i < this.maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);

            this.labelContainer.childNodes[i].innerHTML = classPrediction;

            if (prediction[i].probability > score) {
                mostProbable = prediction[i].className;
                score = prediction[i].probability;
            }
        }

        let questionNumber = this.currentQuestionIndex;

        if (score > 0.9) {
            const result = this.reaction.handle(mostProbable, questionNumber);
            this.leaderboard.saveScore(result);
            // window.location.href = "ranking.html";
        }
    }

    generateRandomQuestion() {
        const vraag = document.getElementById("vraag");
        this.currentQuestionIndex = Math.floor(Math.random() * questions.length);
        vraag.innerHTML = questions[this.currentQuestionIndex].question;
    }
}
const app = new App();
window.init = () => app.init();
app.generateRandomQuestion();    
