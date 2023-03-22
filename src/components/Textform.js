import React, { useState } from 'react'

export default function Textform(props) {

    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleloclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleclclick = () => {
        let newtext = "";
        setText(newtext);
    }

    const handlecolclick = () => {

        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleOnchange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("Mytext")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtra = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('')
    return (<>
        <div className={`container text-dark`}>
            <h1>{props.heading}</h1>
            <div className={`mb-3 `}>
                <label for="Mytext" class="form-label">Enter Text Area Here</label>
                <textarea className="form-control" value={text} onChange=
                    {handleOnchange} id="Mytext" rows="8"></textarea>
                <button className="btn btn-primary mx-3 my-2" onClick={handleupclick} >Convert To
                    Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleloclick}>Convert To
                    Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={handleclclick}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-primary mx-3" onClick={handleExtra} >Remove Extra Space</button>
            </div>
        </div>
        <div className="container">
            <h2>Your Text Summary</h2>
            <p> {text.split(" ").length - 1} Words and {text.length} Characters</p>
            <hr />
            <h3>Preview: </h3>
            <p className="fw-bolder text-danger">{text}</p>
        </div>


    </>
    )
}
