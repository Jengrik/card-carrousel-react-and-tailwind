interface ArrowHeadProps {
  id?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  color?: string;
}
const ArrowHead = ({
  id,
  className,
  width = 20,
  height = 20,
  color = "#fff",
}: ArrowHeadProps) => {
  return (
    <svg
      {...(id && { id })}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default ArrowHead;
