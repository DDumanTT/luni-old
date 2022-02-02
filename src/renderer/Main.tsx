import { useState, useContext, ReactNode } from 'react';
import SettingsProvider from './providers/SettingsProvider';
import {
  settingsContext,
  ContextType,
} from 'renderer/providers/SettingsProvider';

import NavBar from './components/NavBar/NavBar';
import HeroGame from './components/HeroGame';
import Carousel from './components/Carousel';
import GameCard from './components/GameCard';
import Modal from './components/Modal/Modal';
import Stepper from './components/Modal/Stepper';
import Button from './components/Button';
import ScanGamesPages from './components/Modal/ScanGamesPages';

import game_scanner from '@equal-games/game-scanner';

export default function Main() {
  const pageCount = 4;
  const [page, setPage] = useState(0);

  return (
    <SettingsProvider>
      <div className="h-[calc(100vh-26px)] top-[26px] overflow-x-hidden overflow-y-scroll">
        <div className="relative left-0 z-0">
          <NavBar />
          <HeroGame />
        </div>
        <Carousel name="Favorites">
          {[...Array(20)].map((_, i) => (
            <GameCard key={i} />
          ))}
        </Carousel>
      </div>
      {/* Can't use useContext, because it is being consumed in parent */}
      <settingsContext.Consumer>
        {({ scanModalOpen, toggleScanModalOpen }) => {
          const handleNextPage = () => {
            if (page < pageCount - 1) {
              setPage(page + 1);
            }
          };
          const handlePrevPage = () => {
            if (page <= 0) {
              toggleScanModalOpen();
            } else {
              setPage(page - 1);
            }
          };
          return (
            <Modal isOpen={scanModalOpen} page={page}>
              <div className="w-full mb-8">
                <Stepper steps={pageCount} currentStep={page} />
              </div>
              <ScanGamesPages page={page} />
              <div className="mt-8 inline-flex justify-between">
                <Button onClick={handlePrevPage}>
                  {page === 0 ? 'Exit' : 'Back'}
                </Button>
                <Button onClick={handleNextPage}>
                  {page === pageCount - 1 ? 'Done' : 'Next'}
                </Button>
              </div>
            </Modal>
          );
        }}
      </settingsContext.Consumer>
    </SettingsProvider>
  );
}
