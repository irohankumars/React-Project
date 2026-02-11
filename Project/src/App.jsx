import React from "react";
import Header from "./components/Header"

const questions = [
  {
    question: "What's your favorite color?",
    options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
  },
];

export default function App(){
    return(
        <>
        <div>
            <Header/>        
        </div>
        </>
    )
}