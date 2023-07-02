import React from "react";
import Card from "./Card";
import ArrowHead from "../assets/icons/ArrowHead";
interface CardStructure {
  Title: string;
  SubTitle: string;
  Content: string;
  SubContent: string;
}

enum CARROUSEL_TYPE {
  SINGLE = 1,
  LARGE = 3,
}

type Props = {
  data: CardStructure[];
  className?: string;
  carrouselType?: CARROUSEL_TYPE;
};

//* Functions Definition
const selectColor = (
  id: number,
  active: number,
  carrouselType: CARROUSEL_TYPE = CARROUSEL_TYPE.SINGLE
): string => {
  if (carrouselType === CARROUSEL_TYPE.SINGLE) {
    switch (Math.abs(id - active)) {
      case 0:
        return "bg-blue-800";
      case 1:
        return "bg-grayScale-50";
      default:
        return "bg-grayScale-5";
    }
  } else {
    if (id - active >= 0 && id - active <= 2) {
      return "bg-blue-800";
    } else if (id - active === 3 || id - active === -1) {
      return "bg-grayScale-50";
    }
    return "bg-grayScale-5";
  }
};

const selectYScale = (
  id: number,
  active: number,
  carrouselType: CARROUSEL_TYPE = CARROUSEL_TYPE.SINGLE
): string => {
  if (carrouselType === CARROUSEL_TYPE.SINGLE) {
    switch (Math.abs(id - active)) {
      case 0:
        return "scale-y-100";
      case 1:
        return "scale-y-[0.85]";
      default:
        return "scale-y-[0.78]";
    }
  } else {
    if (id - active >= 0 && id - active <= 2) {
      return "scale-y-100";
    } else if (id - active === 3 || id - active === -1) {
      return "scale-y-[0.85]";
    }
    return "scale-y-[0.78]";
  }
};

const selectTranslateX = (
  id: number,
  active: number,
  carrouselType: CARROUSEL_TYPE = CARROUSEL_TYPE.SINGLE
): string => {
  const isNegative: boolean = id - active < 0;
  if (carrouselType === CARROUSEL_TYPE.SINGLE) {
    switch (Math.abs(id - active)) {
      case 0:
        return "translate-x-0";
      case 1:
        return `${isNegative ? "-translate-x-5" : "translate-x-5"}`;
      default:
        return `${isNegative ? "-translate-x-9" : "translate-x-9"}`;
    }
  } else {
    switch (id - active) {
      case -2:
        return "-translate-x-[50px]";
      case -1:
        return "-translate-x-[28px]";
      case 0:
        return "translate-x-0";
      case 1:
        return "translate-x-[190px]";
      case 2:
        return "translate-x-[380px]";
      case 3:
        return "translate-x-[408px]";
      default:
        return "translate-x-[430px]";
    }
    if (id - active === 1) {
      return "translate-x-[190px]";
    }
    return "translate-x-0";
  }
};

const selectTranslateZ = (
  id: number,
  active: number,
  carrouselType: CARROUSEL_TYPE = CARROUSEL_TYPE.SINGLE
): string => {
  if (carrouselType === CARROUSEL_TYPE.SINGLE) {
    switch (Math.abs(id - active)) {
      case 0:
        return "translate-z-0";
      case 1:
        return "-translate-z-5";
      default:
        return "-translate-z-10";
    }
  } else {
    if (id - active >= 0 && id - active <= 2) {
      return "translate-z-0";
    } else if (id - active === 3 || id - active === -1) {
      return "-translate-z-5";
    }
    return "-translate-z-10";
  }
};

const selectTextColor = (
  id: number,
  active: number,
  carrouselType: CARROUSEL_TYPE = CARROUSEL_TYPE.SINGLE
): string => {
  if (carrouselType === CARROUSEL_TYPE.SINGLE) {
    if (id === active) {
      return "text-white";
    }
    return "text-transparent";
  } else {
    if (id - active >= 0 && id - active <= 2) {
      return "text-white";
    }
    return "text-transparent";
  }
};

const selectVisibility = (
  id: number,
  active: number,
  carrouselType: CARROUSEL_TYPE = CARROUSEL_TYPE.SINGLE
): string => {
  if (carrouselType === CARROUSEL_TYPE.SINGLE) {
    if (Math.abs(id - active) > 2) {
      return "hidden";
    }
    return "";
  } else {
    if (id - active >= -2 && id - active <= 4) {
      return "";
    }
    return "hidden";
  }
};

const Carrousel = ({
  data,
  className,
  carrouselType = CARROUSEL_TYPE.SINGLE,
}: Props) => {
  const [active, setActive] = React.useState<number>(0);

  return (
    <>
      <div
        id="carrousel"
        className={`${
          carrouselType === CARROUSEL_TYPE.SINGLE ? "w-44" : "w-[558px]"
        } h-32 relative ${className}`}
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
            subContent={element.SubContent}
            className={`${selectColor(i, active, carrouselType)} ${selectYScale(
              i,
              active,
              carrouselType
            )} ${selectTranslateX(i, active, carrouselType)} ${selectTranslateZ(
              i,
              active,
              carrouselType
            )} ${selectTextColor(i, active, carrouselType)} ${selectVisibility(
              i,
              active,
              carrouselType
            )}`}
          />
        ))}

        {/* Right Arrow */}
        {active < data.length - carrouselType && (
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
      {carrouselType === CARROUSEL_TYPE.LARGE && (
        <p className="text-xsm leading-xsm font-normal text-red-600 sm:hidden">
          You can't see the Large Carrousel on a Mobile Device.
        </p>
      )}
      <p className="mb-7 sm:mb-0">{`Carrousel Type: ${
        carrouselType === CARROUSEL_TYPE.SINGLE
          ? "Single ( 1 Pos )"
          : "Large ( 3 Pos )"
      }`}</p>
    </>
  );
};

export default Carrousel;
