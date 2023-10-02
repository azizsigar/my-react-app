import React, { useState } from 'react';
import api from './quizSorular.js';

function Quiz() {
  const [soru, setSoru] = useState('');
  const [secenekler, setSecenekler] = useState([]);
  const [dogruYanit, setDogruYanit] = useState('');
  const [cevap, setCevap] = useState('');
  const [sonuc, setSonuc] = useState('');
  const [puan, setPuan] = useState(0);

  const quizSorular = api;


  const baslat = () => {
    if (cevap === dogruYanit) {
      const rastgeleSoruIndex = Math.floor(Math.random() * quizSorular.length);
      const yeniSoru = quizSorular[rastgeleSoruIndex];

      setSoru(yeniSoru.soru);
      setSecenekler(yeniSoru.secenekler);
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
      <h1>Quiz</h1>
      <h2>{soru}</h2>
      <div>
        {secenekler.map((secenek, index) => (
          <button
            key={index}
            onClick={() => {
              setCevap(secenek);
            }}
            className="bum"
          >
            {secenek}
          </button>
        ))}
      </div>
      <p>{sonuc}</p>
      <p>Puanınız: {puan}</p>
      <button onClick={baslat} 
      
      
      >Next</button>
    </div>
  );
}

export default Quiz;
