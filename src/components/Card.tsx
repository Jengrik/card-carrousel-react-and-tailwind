type Props = {
  title?: string;
  subTitle?: string;
  content?: string;
  className?: string;
};

const Card = ({
  title = "",
  subTitle = "",
  content = "",
  className = "",
}: Props) => {
  return (
    <>
      <div
        className={`w-44 h-32 absolute p-3 rounded-lg flex flex-col justify-between items-center text-white transition-all duration-300 ease-out ${className}`}
      >
        <div className="w-full">
          <p className="text-xsm leading-xsm font-normal">{title}</p>
          <p className="text-regular leading-sm font-semibold">{subTitle}</p>
        </div>
        <div className="w-full text-xsm leading-xsm font-normal">{content}</div>
      </div>
    </>
  );
};

export default Card;
