import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard';
import './App.css';

function App() {
  const players = [
    {
      name: "LeBron James",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
      position: "Forward",
      stats: {
        pointsPerGame: 25.4,
        assistsPerGame: 7.1,
        reboundsPerGame: 10.5
      }
    },
    {
      name: "Stephen Curry",
      image: "https://www.mercurynews.com/wp-content/uploads/2024/04/BNG-L-WARRIORS-1217-14-2.jpg?w=1066",
      position: "Guard",
      stats: {
        pointsPerGame: 27.3,
        assistsPerGame: 6.5,
        reboundsPerGame: 5.3
      }
    },
    {
      name: "Kevin Durant",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmdfrXWUTEhsXHNcOrzFHfIeFjUEUqXucuIA&s",
      position: "Forward",
      stats: {
        pointsPerGame: 29.6,
        assistsPerGame: 5.4,
        reboundsPerGame: 7.1
      }
    }
  ];

  return (
    <div className="App">
      {players.map(player => (
        <BasketballPlayerCard
          key={player.name}
          name={player.name}
          image={player.image}
          position={player.position}
          stats={player.stats}
        />
      ))}
    </div>
  );
}

export default App;
