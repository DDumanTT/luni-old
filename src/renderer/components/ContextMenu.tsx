import useContextMenu from 'renderer/hooks/useContextMenu';

interface propsTypes {
  items: string[];
}

// TODO: ability to pass a ref from which to open a context menu and get menu items data from
export default function ContextMenu(props: propsTypes) {
  const { anchorPoint, show } = useContextMenu();

  if (show) {
    return (
      <ul
        className={`w-60 p-2 bg-zinc-800 rounded-xl absolute shadow-xl`}
        style={{ top: anchorPoint.y, left: anchorPoint.x }}
      >
        {props.items.map((item) => {
          <li>{item}</li>;
        })}
      </ul>
    );
  }
  return <></>;
}
