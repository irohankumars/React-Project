import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export default function UserForm() {
  const [inputName, setInputName] = useState("");
  const { setName } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setName(inputName);
    navigate("/quiz");
  }

  return (
    <div>
      <h1>Enter Your Name</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputName}
          placeholder="Your name here"
          onChange={(e) => setInputName(e.target.value)}
        /><br/> <br/> <br />
        {console.log(inputName)}
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
}
