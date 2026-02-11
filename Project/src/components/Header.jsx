//This component will hold the links and title for our quiz and navigation links
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default function Header(){


    return (
        <>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}} >
        <h1>Which Element Are You?</h1>
        <p>(based on completely random things)</p>
        <nav>
            <Link to="/">Home</Link> &nbsp; &nbsp; &nbsp;
            <Link to="/quiz">Quiz</Link>
        </nav>

    

        </div>
        </>
    )
}
