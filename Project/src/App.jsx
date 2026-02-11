import React, { useState } from "react";
import Header from "./components/Header"

const questions = [
  {
    question: "What's your favorite color?",
    options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
  },
];

const keywords = {
  Fire: "fire",
  Water: "water",
  Earth: "earth",
  Air: "air",
};

const elements = {
  "Red 🔴": "Fire",
  "Blue 🔵": "Water",
  "Green 🟢": "Earth",
  "Yellow 🟡": "Air",
  // Continue mapping all your possible options to a keyword

};

    const[currentQuestionInddex, setCurrentQuestionIndex] = useState(0);
    const[answers, setAnswers] = useState([]);
    const[userName, setUserName] = useState("");
    cosnt[element, setElement] = useState("");
    const[artWork, serArtWork] = useState(); 
    

function handleAnswer(answer) {
  setAnswers([...answers, answer]);
  setCurrentQuestionIndex(currentQuestionIndex + 1);
};

function handleUserFormSubmit(name) {
  setUserName(name);
};

function determineElement(answers) {
  const counts = {};
  answers.forEach(function(answer) {
    const element = elements[answer];
    counts[element] = (counts[element] || 0) + 1;
  });
  return Object.keys(counts).reduce(function(a, b) {
    return counts[a] > counts[b] ? a : b
  });
};

function fetchArtwork(){
    
}

    export default function App(){
    return(
        <>
        <div>
            <Header/>        
        </div>
        </>
    )
}