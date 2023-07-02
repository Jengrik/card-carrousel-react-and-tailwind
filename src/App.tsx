import "tailwindcss/tailwind.css";
import Carrousel from "./components/Carrousel";
import Presentation from "./components/Presentation";
import React, { ChangeEvent } from "react";

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

function App() {
  // Variables Definition
  const [data, setData] = React.useState<CardStructure[]>(
    [] as CardStructure[]
  );

  const [wrongData, setWrongData] = React.useState<boolean>(false);

  // Functions Definition
  const changeDataQuantity = (event: ChangeEvent<HTMLInputElement>): void => {
    const quantity: number = parseInt(event.target.value);
    if (isNaN(quantity)) {
      setWrongData(true);
      createDummyData(1);
    } else {
      setWrongData(false);
      createDummyData(quantity);
    }
  };

  const createDummyData = (quantity = 1) => {
    const DummyCardData: CardStructure = {
      Title: "Title",
      SubTitle: "Subtitle",
      Content: "Content",
      SubContent: "SubContent",
    };

    const DummyArrayData: CardStructure[] = Array.from(
      { length: quantity },
      () => ({
        ...DummyCardData,
      })
    );

    setData(DummyArrayData);
  };

  // Effect Functions Definition
  React.useEffect(() => {
    createDummyData();
  }, []);

  return (
    <>
      <Presentation />
      <div className="flex flex-col mb-7">
        <label htmlFor="quantity">Enter the quantity of cards:</label>
        <input
          type="number"
          placeholder="Enter the quantity here!"
          id="quantity"
          className="border-2 text-center"
          onChange={changeDataQuantity}
        />
        {wrongData && (
          <p className="text-xsm leading-xsm font-normal text-red-600">
            You entered a wrong quantity. It will be replaced by 1.
          </p>
        )}
      </div>
      <Carrousel data={data} carrouselType={CARROUSEL_TYPE.SINGLE} />
      <Carrousel
        data={data}
        className="mt-7 hidden sm:block"
        carrouselType={CARROUSEL_TYPE.LARGE}
      />
    </>
  );
}

export default App;
