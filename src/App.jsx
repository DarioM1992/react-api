import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

export const App = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios.get('https://lanciweb.github.io/demo/api/actors/')
      .then(res => console.log(res));
    }, []);
  return (
    <>
    <h1>attori</h1>
    </>
  );
};

