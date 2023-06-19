import "tailwindcss/tailwind.css";
import Card from "./components/Card";
import Carrousel from "./components/Carrousel";
import ArrowHead from "./assets/icons/ArrowHead";

// import ViteLogo from "./assets/images/ViteLogo";
// import ReactLogo from "./assets/images/ReactLogo";
// import TailwindLogo from "./assets/images/TailwindLogo";

interface CardStructure {
  Title: string;
  SubTitle: string;
  Content: string;
}

const DummyCardData: CardStructure = {
  Title: "Title",
  SubTitle: "Subtitle",
  Content: "Content",
};
const DummyArrayData: CardStructure[] = Array.from({ length: 5 }, () => ({
  ...DummyCardData,
}));

function App() {
  return (
    <>
      <Carrousel data={DummyArrayData} />
      {/* <ArrowHead color="#000" width={15} height={15} /> */}
    </>
  );
}

export default App;
