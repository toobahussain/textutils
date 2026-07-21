import React , {useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!" , "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!" , "success");
  };

  const handleclClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text is cleared!" , "success");
  };
  
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
    <div className={`container ${props.theme.text}`}>
       <h1 className={props.theme.text}/>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.theme.textareaBg, color: props.theme.textareaText}} rows="8"/>
    <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary my-3 mx-1" onClick={handleclClick}>Clear</button>
    </div>
    </div>
    <div className="container my-3"  >
        <h2 className={props.theme.text}>Your text summary</h2>
        <p>{text.split(" ").filter(text => text !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2 className={props.theme.text} >Preview</h2>
        <p>{text.length>0 ? text : "Enter something in textbox to preview it here"}</p>
    </div>
    </>
  )
}
