import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/outline';

interface propsTypes {
  steps: number;
  currentStep: number;
}

function Circle({ variant }: { variant: string }) {
  const variants = {
    inactive: {
      backgroundImage: 'linear-gradient(rgba(79 70 229 0), rgba(55 48 163 0))',
      backgroundColor: 'rgb(63 63 70)',
      scale: 0.8,
    },
    active: {
      backgroundImage: 'linear-gradient(rgba(79 70 229 1), rgba(55 48 163 1))',
      scale: 1.2,
      transition: { delay: 0.2 },
    },
    checkmark: {
      backgroundImage: 'linear-gradient(rgba(79 70 229 1), rgba(55 48 163 1))',
      scale: 1.2,
    },
  };

  return (
    <motion.div
      className="rounded-full h-6 w-6 flex"
      variants={variants}
      initial="inactive"
      animate={variant}
      transition={{ type: 'tween' }}
    >
      <AnimatePresence exitBeforeEnter>
        {variant === 'active' && (
          <motion.div
            key={0}
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.1 } }}
            exit={{ scale: 0 }}
            className="m-auto rounded-full h-2 w-2 bg-zinc-100"
          ></motion.div>
        )}
        {variant === 'checkmark' && (
          <motion.div
            key={1}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="m-auto"
          >
            <CheckIcon className="h-5 w-5 stroke-zinc-100" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Line({ active }: { active: boolean }) {
  return (
    <div className="bg-zinc-700 rounded-full w-24 h-1 relative mx-1">
      <motion.div
        className="absolute bg-gradient-to-r to-indigo-800 from-indigo-600 bg-indigo-800 h-full rounded-full"
        animate={active ? { width: '100%' } : { width: '0' }}
        transition={{ type: 'tween' }}
      ></motion.div>
    </div>
  );
}

export default function Stepper(props: propsTypes) {
  const circleStates = [...Array(props.steps)].map((_, i) => {
    let state = { type: 'circle' };
    if (props.currentStep == i) {
      return { ...state, variant: 'active' };
    } else if (props.currentStep > i) {
      return { ...state, variant: 'checkmark' };
    } else {
      return { ...state, variant: 'inactive' };
    }
  });

  const lineStates = [...Array(props.steps - 1)].map((_, i) => {
    let state = { type: 'line' };
    if (props.currentStep >= i + 1) {
      return { ...state, active: true };
    } else {
      return { ...state, active: false };
    }
  });

  const zip = (c: any[], l: any[]): any[] =>
    c.length ? [c[0], ...zip(l, c.slice(1))] : l;

  const states = zip(circleStates, lineStates);

  const elements = states.map((state, i) => {
    if (state.type === 'circle') {
      return <Circle key={i} variant={state.variant} />;
    } else if (state.type === 'line') {
      return <Line key={i} active={state.active} />;
    }
  });

  return <div className="flex justify-center items-center">{elements}</div>;
}
