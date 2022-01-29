import { forwardRef, LegacyRef, MouseEventHandler } from 'react';

interface propsTypes {
  className?: string;
  children: JSX.Element | JSX.Element[];
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function NavBarButton(props: propsTypes, ref: LegacyRef<HTMLDivElement>) {
  const customClass = props.className == undefined ? '' : props.className;
  return (
    <div
      ref={ref}
      onClick={props.onClick}
      className="transition ease-out duration-100 bg-opacity-0 bg-zinc-700 hover:bg-opacity-50 cursor-pointer rounded-full"
    >
      <div className={'flex items-center p-2' + ' ' + customClass}>
        {props.children}
      </div>
    </div>
  );
}

export default forwardRef(NavBarButton);
