import sprite from "./icons.svg";

const Sprite = (props) => {
  return (
    <svg
      viewBox={`0 0 ${props.width} ${props.height}`}
      width={`${props.width}px`}
      height={`${props.height}px`}
      style={{ ...props.style }}
    >
      <use href={`${sprite}#${props.id}`} />
    </svg>
  );
};

export default Sprite;
