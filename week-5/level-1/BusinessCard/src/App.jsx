import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BusinessCard from './components/BusinessCard';
import CardForm from './components/CardForm';
import axios from 'axios';



function App() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/cards');
    setCards(response.data.cards);
  };

  const addCard = async (formData) => {
    const response = await axios.post('http://localhost:3000/cards', formData);
    fetchData()
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left side with form */}
      <div style={{ flex: '0 0 30%', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <CardForm addCard={addCard} />
      </div>

      {/* Right side with displayed cards */}
      <div style={{ flex: '1', padding: '20px', overflowY: 'auto', display: 'flex', flexWrap: 'wrap' }}>
        {cards.map((card, index) => (
          <div key={index} style={{ width: '30%', margin: '10px' }}>
            <BusinessCard data={card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

