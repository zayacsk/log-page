import React from 'react';

import './App.css';
import Login from '../Login/Login';
import useToken from './useToken';

function App() {
    const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <h1 className='taDa'>Выйди и зайди нормально!</h1>
    </div>
  );
}

export default App;