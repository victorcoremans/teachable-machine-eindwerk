export class Leaderboard {
    saveScore(answer) {
        let punt = 0;

        if (answer == "eens") {
            punt = 1;
            localStorage.setItem("punt", punt);
        }
        if (answer == "neutraal") {
            punt = 0.5;
            localStorage.setItem("punt", punt);
        }
        if (answer == "oneens") {
            punt = 0;
            localStorage.setItem("punt", punt);
        }
    }
}