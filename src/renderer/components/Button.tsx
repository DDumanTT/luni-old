import { motion } from 'framer-motion';

interface propsTypes {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

export default function Button(props: propsTypes) {
  const customClass = props.className == undefined ? '' : props.className;
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-indigo-800 to-indigo-600 hover:to-indigo-800 active:from-indigo-900 active:to-indigo-900 cursor-pointer rounded-lg box-shadow-lg"
    >
      <div className={'flex items-center px-12 py-2' + ' ' + customClass}>
        {props.children}
      </div>
    </motion.div>
  );
}
