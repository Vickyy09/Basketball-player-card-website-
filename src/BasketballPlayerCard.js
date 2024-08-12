import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <div className="image-container">
        <img src={image} alt={`${name}`} className="player-image" />
      </div>
      <div className="card-content">
        <h2 className="player-name">{name}</h2>
        <p className="player-position">{position}</p>
        <div className="player-stats">
          <p>PPG: {stats.pointsPerGame}</p>
          <p>APG: {stats.assistsPerGame}</p>
          <p>RPG: {stats.reboundsPerGame}</p>
        </div>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
