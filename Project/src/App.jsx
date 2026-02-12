import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import Question from "./components/Question";
import Results from "./components/Results";
import { Route, Routes } from "react-router-dom";

const questions = [
  {
    question: "What's your favorite color?",
    options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
  },
  // {
  //   question: "What's your favorite animal?",
  //   options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
  // }
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
};

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [element, setElement] = useState("");
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleAnswer(answer) {
    setAnswers((prev) => [...prev, answer]);
    setCurrentQuestionIndex((prev) => prev + 1);
  }

  function determineElement(answersArray) {
    const counts = {};

    answersArray.forEach((answer) => {
      const el = elements[answer];
      counts[el] = (counts[el] || 0) + 1;
    });

    return Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
  }

  async function fetchArtwork(keyword) {
    try {
      setLoading(true);

      const searchRes = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${keyword}&hasImages=true`
      );
      const searchData = await searchRes.json();

      if (!searchData.objectIDs || searchData.objectIDs.length === 0) {
        setArtwork(null);
        return;
      }

      const randomId =
        searchData.objectIDs[
          Math.floor(Math.random() * searchData.objectIDs.length)
        ];

      const objectRes = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomId}`
      );
      const objectData = await objectRes.json();

      setArtwork(objectData.primaryImageSmall);
    } catch (error) {
      console.error("Artwork fetch failed:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (currentQuestionIndex === questions.length && answers.length > 0) {
      const selectedElement = determineElement(answers);
      setElement(selectedElement);
      fetchArtwork(keywords[selectedElement]);
    }
  }, [currentQuestionIndex, answers]);

  function restartQuiz() {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setElement("");
    setArtwork(null);
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route
          path="/quiz"
          element={
            currentQuestionIndex < questions.length ? (
              <Question
                question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                onAnswer={handleAnswer}
              />
            ) : (
              <Results
                element={element}
                artwork={artwork}
                loading={loading}
                onRestart={restartQuiz}
              />
            )
          }
        />
      </Routes>
    </div>
  );
}
