/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { X, Square, Minus } from 'react-feather';

function handleClose() {
  window.api.windowAction.close();
}

function handleMaximize() {
  window.api.windowAction.maximize();
}

function handleMinimize() {
  window.api.windowAction.minimize();
}

export default function TitleBar() {
  return (
    <div
      id="titleBarContainer"
      className="relative w-full shadow bg-neutral-200 dark:bg-zinc-900 z-50"
    >
      <div
        id="titleBar"
        className="draggable absolute top-0 flex select-none h-full font-black text-neutral-800 dark:text-zinc-100"
      >
        <span className="draggable flex-grow ml-2 text-neutral-400 dark:text-zinc-800">
          LUNI
        </span>
        <div
          id="controlButton"
          className="hover:bg-neutral-350 dark:hover:bg-zinc-800"
          onClick={handleMinimize}
        >
          <Minus className="h-5 w-5" />
        </div>
        <div
          id="controlButton"
          className="hover:bg-neutral-350 dark:hover:bg-zinc-800"
          onClick={handleMaximize}
        >
          <Square className="h-4 w-4" />
        </div>
        <div
          id="controlButton"
          className="hover:bg-red-600"
          onClick={handleClose}
        >
          <X className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
