import { useState, useEffect } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
 const [mode, setMode] = useState('light');
 
  const themes = {
  light: {
    bg: "bg-light",
    text: "text-dark",
    cardBg: "white",
    textareaBg: "white",
    textareaText: "black"
  },

  dark: {
    bg: "bg-dark",
    text: "text-light",
    cardBg: "#2c2c2c",
    textareaBg: "#2c2c2c",
    textareaText: "white"
  },

  blue: {
    bg: "bg-primary",
    text: "text-light",
    cardBg: "#0d6efd",
    textareaBg: "#0b5ed7",
    textareaText: "white"
  },

  green: {
    bg: "bg-success",
    text: "text-light",
    cardBg: "#198754",
    textareaBg: "#157347",
    textareaText: "white"
  }
};

  const theme = themes[mode];


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   
  }
  useEffect(() => {
  document.body.className = "";
  document.body.classList.add(theme.bg);
}, [theme]);


  // 

  return (
    <>
    <Navbar
            title="TextUtils"
            aboutText="About"
            theme={theme}
            setMode={setMode}
    />

    <Alert alert={alert} />

          <div className={`container my-3 ${theme.bg} ${theme.text}`}>
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze"
              theme={theme}
            />
          </div>
   
    </>
  );
}

export default App;
