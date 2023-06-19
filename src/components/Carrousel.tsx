import React from "react";
import Card from "./Card";
import ArrowHead from "../assets/icons/ArrowHead";

interface CardStructure {
  Title: string;
  SubTitle: string;
  Content: string;
}

type Props = {
  data: CardStructure[];
  activeCards?: number;
};

const selectColor = (id: number, active: number): string => {
  switch (Math.abs(id - active)) {
    case 0:
      return "bg-blue-800";
    case 2:
      return "bg-grayScale-5";
    default:
      return "bg-grayScale-50";
  }
};

const selectYScale = (id: number, active: number): string => {
  switch (Math.abs(id - active)) {
    case 0:
      return "scale-y-100";
    case 1:
      return "scale-y-[0.85]";
    default:
      return "scale-y-[0.78]";
  }
};

const selectTranslateX = (id: number, active: number): string => {
  const isNegative: boolean = id - active < 0;
  switch (Math.abs(id - active)) {
    case 0:
      return "translate-x-0";
    case 1:
      return `${isNegative ? "-translate-x-5" : "translate-x-5"}`;
    default:
      return `${isNegative ? "-translate-x-9" : "translate-x-9"}`;
  }
};

const selectTranslateZ = (id: number, active: number): string => {
  switch (Math.abs(id - active)) {
    case 0:
      return "translate-z-0";
    case 1:
      return "-translate-z-5";
    default:
      return "-translate-z-10";
  }
};

const selectTextColor = (id: number, active: number): string => {
  if (id === active) {
    return "text-white";
  }
  return "text-transparent";
};

const selectVisibility = (id: number, active: number): string => {
  if (Math.abs(id - active) > 2) {
    return "hidden";
  }
  return "";
};

const Carrousel = ({ data, activeCards = 1 }: Props) => {
  const [active, setActive] = React.useState<number>(0);

  return (
    <>
      <div
        id="carrousel"
        className="w-44 h-32 relative"
        style={{ perspective: "500px", transformStyle: "preserve-3d" }}
      >
        {/* Left Arrow */}
        {active > 0 && (
          <div
            className="absolute z-[2] top-1/2 -translate-y-1/2 rounded-full bg-white cursor-pointer -left-7"
            onClick={() => setActive((i) => i - 1)}
          >
            <ArrowHead
              width={16}
              height={16}
              color="#000"
              className="-rotate-90 "
            />
          </div>
        )}

        {/* Card Gallery */}
        {data.map((element, i) => (
          <Card
            key={i}
            title={`${element.Title} ${i}`}
            subTitle={element.SubTitle}
            content={element.Content}
            className={`${selectColor(i, active)} ${selectYScale(
              i,
              active
            )} ${selectTranslateX(i, active)} ${selectTranslateZ(
              i,
              active
            )} ${selectTextColor(i, active)} ${selectVisibility(i, active)}`}
          />
        ))}

        {/* Right Arrow */}
        {active < data.length - 1 && (
          <div
            className="absolute z-[2] top-1/2 -translate-y-1/2 rounded-full bg-white cursor-pointer -right-7"
            onClick={() => setActive((i) => i + 1)}
          >
            <ArrowHead
              width={15}
              height={15}
              color="#000"
              className="rotate-90"
            />
          </div>
        )}
      </div>
      <p>El valor de active es: {active}</p>
    </>
  );
};

export default Carrousel;
