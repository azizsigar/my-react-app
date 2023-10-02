import React, { useState, useEffect } from "react";

const Quiz = () => {
  const [soru, setSoru] = useState("");
  const [dogruYanit, setDogruYanit] = useState("");
  const [yanlisYanit, setYanlisYanit] = useState("");
  const [next,setNext]=useState("")

  function randomNext() {
    const randomIndex = Math.floor(Math.random() * soru.length);
    const randomSoru = soru[randomIndex];
    setNext(randomSoru.soru);
    setDogruYanit(randomSoru.dogruYanit);
    setYanlisYanit(randomSoru.yanlisYanit);
  }
  
  useEffect(() => {
    // Soruları rastgele sıralayın
    const sorular = [
      {
        soru: "Türkiye'nin başkenti nedir?",
        dogruYanit: "Ankara",
        yanlisYanit: "İstanbul",
      },
      {
        soru: "Dünyanın en büyük okyanusu hangisidir?",
        dogruYanit: "Pasifik Okyanusu",
        yanlisYanit: "Atlantik Okyanusu",
      },
      {
        soru: "Türkiye'nin nüfusu kaçtır?",
        dogruYanit: "84 milyon",
        yanlisYanit: "70 milyon",
      },
    ].sort(() => Math.random() - 0.5);

    // İlk soruyu yükle
    const ilkSoru = sorular[0];
    setSoru(ilkSoru.soru);
    setDogruYanit(ilkSoru.dogruYanit);
    setYanlisYanit(ilkSoru.yanlisYanit);
  }, []);

  const dogruYanitSecildi = (e) => {
    // Doğru yanıt seçildiyse yeni soru yükle
    if (e.target.value === dogruYanit) {
      // Yeni bir soru seç
      const sorular = [
        {
          soru: "Türkiye'nin başkenti nedir?",
          dogruYanit: "Ankara",
          yanlisYanit: "İstanbul",
        },
        {
          soru: "Dünyanın en büyük okyanusu hangisidir?",
          dogruYanit: "Pasifik Okyanusu",
          yanlisYanit: "Atlantik Okyanusu",
        },
        {
          soru: "Türkiye'nin nüfusu kaçtır?",
          dogruYanit: "84 milyon",
          yanlisYanit: "70 milyon",
        },
      ].sort(() => Math.random() - 0.5);

      // Rastgele bir soru seç
      const yeniSoru = sorular[0];
      setSoru(yeniSoru.soru);
      setDogruYanit(yeniSoru.dogruYanit);
      setYanlisYanit(yeniSoru.yanlisYanit);
    }
  };

  return (
    <div>
      <h1>Quiz</h1>
      <h1>{next}</h1>
      <button onClick={randomNext}>aaaaa</button>
      <h2>{soru}</h2>
      <div>
        <input type="radio" name="yanit" value={dogruYanit} /> {dogruYanit}
      </div>
      <div>
        <input type="radio" name="yanit" value={yanlisYanit} /> {yanlisYanit}
      </div>
      <button onClick={dogruYanitSecildi}>Cevapla</button>
     
    </div>
  );
};

export default Quiz;
