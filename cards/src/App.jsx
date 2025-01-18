import CardsFlex from "./components/CardsFlex.jsx";
import CardsGrid from "./components/CardsGrid.jsx";

export default function App() {
  return (
    <div className="min-h-dvh space-y-32 bg-purple-950 p-6 text-white">
      <div>
        <p className="mb-6 text-center text-3xl font-bold">Cards with Flex</p>
        <CardsFlex />
      </div>
      <div>
        <p className="mb-6 text-center text-3xl font-bold">Cards with Grid</p>
        <CardsGrid />
      </div>
    </div>
  );
}
