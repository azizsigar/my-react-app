import React from 'react'

export default function Techts() {
    const handleClick=()=>{
        const text="goedemorgen"
        const value = new SpeechSynthesisUtterance(text)
        value.lang = 'nl-NL';
        window.speechSynthesis.speak(value)
        console.log(value)
    }
  return (
    <div>
      <button onClick={handleClick}>hi</button>
    </div>
  )
}
