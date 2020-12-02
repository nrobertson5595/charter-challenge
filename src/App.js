import React from "react";
import "./App.css";
import people from "./data";

function App() {
  const checkPoints = (number) => {
    let points = 0;
    if (number > 100) {
      points = (number - 100) * 2 + 50;
    } else if (number > 50) {
      points = number - 50;
    } else {
      points = number;
    }
    return points;
  };

  return (
    <div className="App">
      <h3>Total Points per month:</h3>
      <div className="container">
        <div className="month-oct">
          {people
            .filter((person) => {
              return person.transaction_month === 10;
            })
            .map((person) => (
              <p key={person.id}>
                {person.name} earned {checkPoints(person.spent)} in October
              </p>
            ))}
        </div>
        <div className="month-nov">
          {people
            .filter((person) => {
              return person.transaction_month === 11;
            })
            .map((person) => (
              <p key={person.id}>
                {person.name} earned {checkPoints(person.spent)} in November
              </p>
            ))}
        </div>
        <div className="month-dec">
          {people
            .filter((person) => {
              return person.transaction_month === 12;
            })
            .map((person) => (
              <p key={person.id}>
                {person.name} earned {checkPoints(person.spent)} in December
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
