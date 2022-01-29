import { motion, useAnimation, useMotionValue, PanInfo } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import useWindowSize from 'renderer/hooks/useWindowSize';

interface propTypes {
  name: string;
  children: JSX.Element[];
}

export default function Carousel(props: propTypes) {
  const scrollDivRef = useRef(document.createElement('div'));
  const [width, height] = useWindowSize();
  const animation = useAnimation();
  const x = useMotionValue(0);

  const cardWidth = width * 0.1 + 16;

  const childPositions = props.children.map((_, i) => {
    return -i * cardWidth;
  });

  const onDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.x;
    const velocity = x.getVelocity() * 0.2;

    const direction = velocity < 0 || offset < 0 ? 1 : -1;
    const startPosition = x.get() - offset;

    const endOffset =
      direction === 1 ? Math.min(velocity, offset) : Math.max(velocity, offset);
    const endPosition = startPosition + endOffset;

    const closestPosition = childPositions.reduce((prev, curr) =>
      Math.abs(curr - endPosition) < Math.abs(prev - endPosition) ? curr : prev
    );

    const transition = { type: 'tween' };
    animation.start({
      x: Math.max(
        closestPosition,
        window.innerWidth - scrollDivRef.current.offsetWidth - cardWidth || 0
      ),
      transition,
    });
  };

  return (
    <div className="h-96">
      <div className="mt-6 w-full">
        <span className="ml-5 text-3xl">{props.name}</span>
        <div className="mt-3 ml-6 flex">
          <motion.div
            ref={scrollDivRef}
            animate={animation}
            drag="x"
            onDragEnd={onDragEnd}
            className="flex flex-nowrap"
            style={{ x }}
          >
            {props.children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
