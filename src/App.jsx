import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { ActorCard } from './components/ActorCard';

export const App = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios.get('https://lanciweb.github.io/demo/api/actors/')
      .then(res => setActors(res.data));
    }, []);
  return (
    <>
    <h1>Actors - Wiki </h1>
    <div className="actors">
      {actors.map(actor => <ActorCard key={actor.id} actor={actor} />)}
    </div>
    </>
  );
};

