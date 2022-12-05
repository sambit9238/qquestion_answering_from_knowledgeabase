import logo from './logo.svg'
import Header from './components/Header'
import Body from './components/Body'
import { useState } from 'react'


// {
//   id: 1,
//   text: 'My name is Sam'
// }

const App = () => {
  const  [answers, setAnswers] = useState([])
  return (
    <div className="container">
      <Header title="Find Answers"/>
      <Body textboxprompt="Have a question? We're here to help" answers={answers} />
      <footer style={header_styles}>
        Powered by Sambit <img src={logo} style={{height: "2rem"}} alt="logo"/>| <a href="mailto:sambit9238@gmil.com" style={{color: "white", padding:"0.5rem"}}>sambit9238@gmail.com</a>
      </footer>
    </div>
  );
}

const header_styles = {
  backgroundColor: "#1744bf",
  textAlign: "center",
  color:"white",
  width:"100%",
  height:"5vh",
  fontSize:"1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

export default App;
