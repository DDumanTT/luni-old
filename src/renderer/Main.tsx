// import React from 'react';
import NavBar from './components/NavBar/NavBar';
import HeroGame from './components/HeroGame';
import Carousel from './components/Carousel';
import GameCard from './components/GameCard';
import Modal from './components/Modal';

import game_scanner from '@equal-games/game-scanner';

export default function Main() {
  return (
    <div className="h-[calc(100vh-26px)] top-[26px] overflow-x-hidden overflow-y-scroll">
      <div className="">
        <div className="relative left-0 z-0">
          <NavBar />
          <HeroGame />
        </div>
      </div>
      <Carousel name="Favorites">
        {[...Array(20)].map((_, i) => (
          <GameCard key={i} />
        ))}
      </Carousel>
    </div>
  );
}
