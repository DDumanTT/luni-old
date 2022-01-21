/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { PlusSmIcon, MinusSmIcon, XIcon } from '@heroicons/react/solid';

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
      className="absolute w-full shadow bg-neutral-200 dark:bg-slate-900"
    >
      <div
        id="titleBar"
        className="draggable absolute top-0 flex select-none h-full font-bold text-neutral-800 dark:text-neutral-200"
      >
        <span className="draggable flex-grow ml-2 text-neutral-400 dark:text-neutral-800">
          LUNI
        </span>
        <div
          id="controlButton"
          className="hover:bg-neutral-350 dark:hover:bg-slate-850"
          onClick={handleMinimize}
        >
          <MinusSmIcon className="h-6 w-6" />
        </div>
        <div
          id="controlButton"
          className="hover:bg-neutral-350 dark:hover:bg-slate-850"
          onClick={handleMaximize}
        >
          <PlusSmIcon className="h-6 w-6" />
        </div>
        <div
          id="controlButton"
          className="hover:bg-red-600"
          onClick={handleClose}
        >
          <XIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
