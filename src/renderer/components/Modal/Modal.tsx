import { ReactNode } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

interface propsTypes {
  isOpen: boolean;
  page: number;
  children?: ReactNode;
}

const modalVariants = {
  firstPage: { width: 600, height: 320, y: 0 },
  secondPage: { width: 900, height: 500, y: 0 },
  thirdPage: { width: 1000, height: 850, y: 0 },
  fourthPage: { width: 800, height: 800, y: 0 },
};

const getVariant = (i: number): string => {
  return Object.keys(modalVariants)[i];
};

export default function Modal(props: propsTypes) {
  return (
    <LayoutGroup>
      <AnimatePresence exitBeforeEnter>
        {props.isOpen && (
          <motion.div
            initial={{ backgroundColor: 'rgba(39 39 42 0)' }}
            animate={{ backgroundColor: 'rgba(39 39 42 0.6)' }}
            exit={{ backgroundColor: 'rgba(39 39 42 0)' }}
            transition={{ ease: 'circOut' }}
            className="flex items-center justify-center absolute left-0 top-[26px] h-[calc(100vh-26px)] w-screen overflow-hidden"
          >
            <motion.div
              variants={modalVariants}
              initial={{ y: 600 }}
              animate={getVariant(props.page)}
              exit={{ y: 800 }}
              transition={{ type: 'tween', ease: 'circOut' }}
              className="flex flex-col bg-zinc-800 rounded-xl absolute p-8 shadow-2xl"
            >
              {props.children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
