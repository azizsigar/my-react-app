import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Question() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // API'den soruları almak için Axios kullanımı
    axios.get('https://azizsigar.github.io/api/api.json')
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((error) => {
        console.error('Soruları alma sırasında hata oluştu:', error);
      });
  }, []);

  return (
    <div>
      <h1>Sorular</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h2>{question.soru}</h2>
            <ul>
              {question.secenekler.map((secenek, index) => (
                <li key={index}>{secenek}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
