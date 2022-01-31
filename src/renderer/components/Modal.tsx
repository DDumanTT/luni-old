import { useState } from 'react';
import useComponentVisible from 'renderer/hooks/useComponentVisible';

interface propsTypes {
  isVisible: boolean;
}

export default function Modal(props: propsTypes) {
  const {
    ref: ref,
    isComponentVisible: modalVisible,
    setIsComponentVisible: setModalVisible,
  } = useComponentVisible(false);

  const [{ width, height }, setSize] = useState({ width: 0, height: 0 });

  return (
    <>
      {props.isVisible && (
        <div className="flex items-center justify-center absolute left-0 top-[26px] bg-opacity-25 bg-zinc-800">
          <div ref={ref} className="bg-zinc-800 rounded-xl h-96 w-96 absolute">
            a
          </div>
        </div>
      )}
    </>
  );
}
