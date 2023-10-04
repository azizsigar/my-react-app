import React, { useState } from 'react';
import api from './quizSorular.js';

function Test() {
  const [soru, setSoru] = useState('');
  const [secenekler, setSecenekler] = useState([]);
  const [dogruYanit, setDogruYanit] = useState('');
  const [cevap, setCevap] = useState('');
  const [sonuc, setSonuc] = useState('');
  const [puan, setPuan] = useState(0);

  const quizSorular = api;

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleClick = (secenek) => {
    const text = secenek;
    const value = new SpeechSynthesisUtterance(text);
    value.lang = 'nl-NL';
    window.speechSynthesis.speak(value);
    console.log(value);
  };

  const baslat = () => {
    if (cevap === dogruYanit) {
      const rastgeleSoruIndex = Math.floor(Math.random() * quizSorular.length);
      const yeniSoru = quizSorular[rastgeleSoruIndex];
      setSoru(yeniSoru.soru);
      const karisikSecenekler = shuffleArray([...yeniSoru.secenekler]);
      setSecenekler(karisikSecenekler);
      setDogruYanit(yeniSoru.dogruYanit);
      setCevap('');
      setSonuc('');
      setPuan(puan + 1);
    } else {
      setPuan(0);
    }
  };

  return (
    <div>
      <h1>Uitspraak test</h1>
      <h2>{soru}</h2>
      <div>
        {secenekler.map((secenek, index) => (
          <button
            key={index}
            onClick={() => {
              setCevap(secenek);
              handleClick(secenek); // Sadece tıklanan butonun içeriğini okur
            }}
            className="bum"
          >
            🔊
            {/* {secenek} */}
          </button>
        ))}
      </div>
      <p>{sonuc}</p>
      <p>❤️: {puan}</p>
      <button className='next' onClick={baslat}>Next</button>
      <div className='info'>

      <p>Je speelt momenteel de demoversie van de Uitspraak test.</p>
      <p>Created by <a href='https://www.linkedin.com/in/abdulaziz-s%C4%B1%C4%9Far-5009611b2/' target='_blank'>Aziz Sigar</a></p>
      </div>
    </div>
  );
}

export default Test;
