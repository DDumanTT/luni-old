import { motion, AnimatePresence } from 'framer-motion';
import LaunchersList from './LaunchersList';

interface propsTypes {
  page: number;
}

export default function ScanGamesPages({ page }: propsTypes) {
  const pages = [
    <>
      <span className="text-4xl text-center mb-4">Welcome!</span>
      {'<Info about scanning games>'}
    </>,
    <>
      <span className="text-4xl text-center mb-4">Select launchers</span>
      <LaunchersList />
    </>,
    <>
      <span className="text-4xl text-center mb-4">Games list</span>
    </>,
  ];
  return (
    <motion.div className="flex flex-col flex-grow">{pages[page]}</motion.div>
  );
}
