// import React from 'react';
import NavBar from './components/NavBar';
import HeroGame from './components/HeroGame';
import Carousel from './components/Carousel';
import GameCard from './components/GameCard';

export default function Main() {
  // const clickHandler = (
  //   event: React.MouseEvent<HTMLButtonElement>,
  //   theme: string
  // ) => {
  //   event.preventDefault();

  //   // const button: HTMLButtonElement = event.currentTarget;
  //   document.documentElement.className = theme;
  // };

  return (
    <div
      id=""
      className="h-screen relative top-[26px] left-0 overflow-auto scroll z-0"
      // style={{ overflow: 'overlay' }}
    >
      <NavBar />
      <HeroGame />
      <Carousel name="Favorites">
        {[...Array(20)].map((_, i) => (
          <GameCard key={i} />
        ))}
      </Carousel>
    </div>
  );
}
