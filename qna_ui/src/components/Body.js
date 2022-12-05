import React  from 'react';

const Body = ({textboxprompt, answers}) => {
    return (
        <div style={body_styles}>
            <div style={{height:'30vh', marginTop: '5vh'}}>
                <h2><label>{textboxprompt}</label></h2>
                <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <textarea style={{padding: '0.2rem', width: '40vw', margin: '1rem'}}></textarea>
                    <button style={{padding:'0.2rem',margin:'1rem'}} onClick={getAnswers}><i class="fas fa-search"></i></button>
                </div>
            </div>
            <div>
            {answers.length > 0 ? 
                    <h3>{answers[0].text}</h3>
                : '' }
            </div>
        </div>
    )
}

const getAnswers = () => {
    return (<h3>I am sam</h3>)
}

const body_styles = {
    textAlign: "center",
    height:"80vh",
    fontSize:"1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

Body.defaultProps = {
    textboxprompt: "Have a question? We're here to help"
}

export default Body;