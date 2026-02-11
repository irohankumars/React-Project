//This component will have a search input that holds the name of the person taking the quiz for personalization
import React,{useState, useContext} from "react";
import {UserContext, userContext} from "./UserContetxt"

export default function UserForm(){
    const [inputName, setInnputName] = useState('');
    const {setName} = useContext(UserContext);


    function handleSubmit(e){
        e.preventDefault();
        setName(inputName);
        window.history.pushState({}, '', '/quiz');
        const navEvent = new PopstateEvent('popstate');
        window.dispatchEvent(navEvent);
    }


    return(
        <div>
            <form onSubmit={handleSubmit}> 
                <h1>User Form</h1>
                <input type="text"placeholder="Your name here"></input>
                <button >Submit</button>
            </form>
        </div>
    )



}