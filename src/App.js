import { useState } from "react";
import "./App.css";
import "./tailwind.css";

export default function App() {
  let [name, setName] = useState("Adam");
  let [weight, setWeight] = useState(0);
  let [height, setHeight] = useState(0);
  let [bmi, setBmi] = useState(0);

  function calcBMI() {
    setBmi((weight / height ** 2).toFixed(2));
  }
  function reset() {
    setName("");
    setWeight("");
    setHeight("");
    document.querySelectorAll("input").forEach((ele) => (ele.value = ""));
  }

  return (
    <div className="App mx-auto mt-10 w-1/2 p-5 grid place-items-center bg-red-300">
      <h1 className="m-5 font-bold">BMI CALCULATOR</h1>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="p-1 mb-2 w-full"
        type="text"
        placeholder="Name"
      ></input>
      <input
        onChange={(e) => setWeight(e.target.value)}
        className="p-1 mb-2 w-full"
        type="number"
        placeholder="Weight"
      ></input>
      <input
        onChange={(e) => setHeight(e.target.value)}
        className="p-1 w-full"
        type="number"
        placeholder="Height"
      ></input>

      <h1 className="font-bold mt-5">Results</h1>
      <p className="w-full text-center flex flex-col">
        <span>
          Hi <span className="font-bold">{name}</span>
        </span>
        <span>
          your Weight is <span className="font-bold">{weight}</span>
        </span>
        <span>
          your Height is <span className="font-bold">{height}</span>
        </span>
      </p>
      <button
        onClick={calcBMI}
        className="bg-blue-300 mt-2 px-3 py-1 text-whit"
      >
        Calculate My BMI
      </button>
      <span>
        So your BMI is <span className="font-bold">{bmi}</span>
      </span>
      <button onClick={reset} className="bg-blue-300 mt-2 px-3 py-1 text-whit">
        Reset
      </button>
    </div>
  );
}
