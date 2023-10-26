import React, { useState, useEffect } from "react";
import Title from "./Title";
import Sentence from "./Sentence";
import CorrectModal from "./CorrectModal";
import "./styles.css";

export default function App() {
  // States
  const [userAnswer, setUserAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Answer
  const correctAnswer = "el come manzanas.";

  // Functions
  const buttonAllowed = async () => {
    if (userAnswer.length > 0) {
      const checkButton = await document.querySelector(".check-button");

      checkButton.style.cursor = "pointer";
      checkButton.style.color = "#fff";
      checkButton.style.backgroundColor = "#58cc02";
      checkButton.style.borderColor = "#58a700";
    } else {
      const checkButton = await document.querySelector(".check-button");

      checkButton.style.cursor = "auto";
      checkButton.style.color = "#afafaf";
      checkButton.style.backgroundColor = "#EFEFEF";
      checkButton.style.borderColor = "transparent";
    }
  };

  const checkButtonClicked = async () => {
    if (userAnswer.length > 0 && userAnswer.toLowerCase() === correctAnswer) {
      const tryAgainTxt = await document.querySelector(".try-again-txt");
      setIsOpen(true);

      tryAgainTxt.style.display = "none";

      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } else if (userAnswer.length > 0) {
      const tryAgainTxt = await document.querySelector(".try-again-txt");
      tryAgainTxt.style.display = "block";
    }
  };

  useEffect(() => {
    buttonAllowed();
  }, [userAnswer]);

  return (
    <>
      <section className="container">
        <Title title="Write this in Spanish" />
        <CorrectModal open={isOpen}>
          <div className="correct-display">
            <h1 className="correct-txt">Correct!</h1>
          </div>
        </CorrectModal>

        <main>
          <div className="chr-and-sentence">
            <div className="chr-img">
              <img src="https://bit.ly/3kJ669c" alt="Lin" />
            </div>

            <div className="sentence-container">
              <Sentence sentence="He eats apples." />
            </div>
          </div>

          <div className="writing-area">
            <div className="text-area-div">
              <textarea
                autocapitalize="off"
                autocomplete="off"
                autocorrect="off"
                spellcheck="false"
                dir="ltr"
                lang="es"
                placeholder="Type in Spanish"
                value={userAnswer}
                onChange={(e) =>
                  setUserAnswer((prev) => (prev = e.target.value))
                }
              ></textarea>
              <p className="try-again-txt">Try again.</p>
            </div>
          </div>
        </main>

        <div className="bottom-div">
          <div className="check-div">
            <div>
              <button onClick={checkButtonClicked} className="check-button">
                Check
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
