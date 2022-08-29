import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function App() {
  const [numberOfChoices, setNumberOfChoices] = useState<number>(3);

  const [exactNumber, setExactNumber] = useState<number>(
    randomNumber(0, numberOfChoices)
  );
  const [done, setDone] = useState<boolean>(false);

  const [userChoice, setUserChoice] = useState<number | null>(null);

  const [choicesArray, setChoicesArray] = useState<number[]>(
    Array.from(
      {
        length: numberOfChoices,
      },
      (_, index) => index
    )
  );

  useEffect(() => {
    if (done) {
      alert(userChoice === exactNumber ? "You win!" : "Dmm ngu vc");
    }
  }, [done]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <div>
          Number is <span>{count}</span>
        </div> */}

        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            maxWidth: "100%",
            padding: 24,
          }}
        >
          {choicesArray.map((num) => (
            <div
              className={`box ${userChoice === num ? "selected" : ""} ${
                done && exactNumber === num ? "correct" : ""
              }`}
              key={num}
              onClick={() => setUserChoice(num)}
              // id={}
            >
              <text
              // style={{
              //   background: exactNumber === num ? "blue" : "",
              // }}
              >
                {num}
              </text>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            if (userChoice === null) {
              alert("dm chua chon so nao");
              return;
            }

            // TODO: improve this
            const newArr = choicesArray.filter(
              (num) => num === userChoice || num === exactNumber
            );

            if (newArr.length === 1) {
              const numbersLeft = newArr.filter((num) => num !== exactNumber);

              newArr.push(numbersLeft[randomNumber(0, numbersLeft.length - 1)]);
            }

            console.log(newArr);

            setChoicesArray(newArr);
          }}
        >
          Remove all redundant choices
        </button>
        <button type="button" onClick={() => setDone(true)}>
          Check
        </button>
      </header>
    </div>
  );
}

export default App;
