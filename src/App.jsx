import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const LeverkusenMatches = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
        headers: {
          'X-RapidAPI-Key': '173874e24cmsh16934e5d3b6b30bp1e5fd2jsnef78a26d299f',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Chyba při načítání dat:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Načítání...</div>;
  }

  return (
    <div>
      <nav className="navbar">
        <img src="/bayern.png" alt="Bayern Leverkusen logo" className="logo" />
        <div className="navbar-brand">Bayer Leverkusen</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Zápasy</a>
          </li>
        </ul>
      </nav>
      <div className="data-container">
        <h1 className="title">Následující zápasy:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default LeverkusenMatches;
