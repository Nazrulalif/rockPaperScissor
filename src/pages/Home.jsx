import { useState } from "react";

const Home = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ win: 0, draw: 0, loss: 0 });
  const [loading, setLoading] = useState(false);

  const getComputerChoice = () =>
    choices[Math.floor(Math.random() * choices.length)];

  const playGame = (choice) => {
    setLoading(true);
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");

    const compChoice = getComputerChoice();

    setTimeout(() => {
      setPlayerChoice(choice);
      setComputerChoice(compChoice);
      determineResult(choice, compChoice);
      setLoading(false);
    }, 1000);
  };

  const determineResult = (choice, compChoice) => {
    if (choice === compChoice) {
      setResult("Draw");
      setScore((prev) => ({ ...prev, draw: prev.draw + 1 }));
    } else if (
      (choice === "Rock" && compChoice === "Scissors") ||
      (choice === "Paper" && compChoice === "Rock") ||
      (choice === "Scissors" && compChoice === "Paper")
    ) {
      setResult("You Win!");
      setScore((prev) => ({ ...prev, win: prev.win + 1 }));
    } else {
      setResult("You Lose!");
      setScore((prev) => ({ ...prev, loss: prev.loss + 1 }));
    }
  };

  return (
    <div className="h-full flex-grow flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Player and Computer Choices */}
        <div className="flex flex-row">
          <div className="flex flex-col items-center">
            <div className="text-lg lg:text-xl md:text-xl font-mono opacity-80 font-bold">
              You
            </div>
            <div
              className={`text-7xl md:text-9xl lg:text-9xl mr-3 ${
                loading && playerChoice === null ? "shake" : ""
              }`}
            >
              {playerChoice === "Rock"
                ? "🤜🏻"
                : playerChoice === "Paper"
                ? "🫱🏻"
                : playerChoice === "Scissors"
                ? "✌🏻"
                : "🤜🏻"}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-lg lg:text-xl md:text-xl font-mono opacity-80 font-bold">
              Computer
            </div>
            <div
              className={`text-7xl md:text-9xl lg:text-9xl ml-3 ${
                loading && computerChoice === null ? "shake" : ""
              }`}
            >
              {computerChoice === "Rock"
                ? "🤛🏻"
                : computerChoice === "Paper"
                ? "🫲🏻"
                : computerChoice === "Scissors"
                ? "✌🏻"
                : "🤛🏻"}
            </div>
          </div>
        </div>

        {/* Result and Score */}
        <div className="my-16 flex flex-col items-center">
          <div className="font-bold lg:text-3xl md:text-3xl text-xl font-mono opacity-80">
            {result || "Let's Play !!!"}
          </div>
          <div className="font-bold text-sm opacity-50 font-mono">
            Win: {score.win} | Draw: {score.draw} | Lost: {score.loss}
          </div>
        </div>

        {/* Choice Buttons */}
        <div className="flex flex-row text-9xl space-x-6">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => playGame("Rock")}
          >
            <div className="text-7xl md:text-9xl lg:text-9xl">✊🏻</div>
            <div className="text-lg lg:text-xl md:text-xl font-mono opacity-80 font-bold pt-3">
              Rock
            </div>
          </div>
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => playGame("Paper")}
          >
            <div className="text-7xl md:text-9xl lg:text-9xl">✋🏻</div>
            <div className="text-lg lg:text-xl md:text-xl font-mono opacity-80 font-bold pt-3">
              Paper
            </div>
          </div>
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => playGame("Scissors")}
          >
            <div className="text-7xl md:text-9xl lg:text-9xl">✌🏻</div>
            <div className="text-lg lg:text-xl md:text-xl font-mono opacity-80 font-bold pt-3">
              Scissors
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
