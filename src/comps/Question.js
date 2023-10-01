import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('API isteği başarısız oldu:', error);
      });
  }, []);

  // Function to handle the next user
  const handleNextUser = () => {
    setCurrentUserIndex(prevIndex => prevIndex + 1);
  };

  const user = users[currentUserIndex] || {};

  return (
    <div className='App'>
      <div className="question">
        <h1>{user.name}</h1>
      </div>
      <div className="options">
        <button>🔊 {user.email}</button>
        <button>🔊 {user.company ? user.company.name : ''}</button>
      </div>
      <div>
        <h3>correct!</h3>
        <button>Check it</button>
        <button onClick={handleNextUser}>Next</button>
      </div>
    </div>
  );
}

export default App;
