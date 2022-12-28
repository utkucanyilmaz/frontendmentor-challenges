import User from "./components/User";
import Card from "./components/Card";
import data from "./data.json";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <section className="container mx-auto grid grid-cols-4 grid-rows-2 gap-[30px]">
        <User />
        {data.map(card => (
          <Card
            title={card.title}
            current={card.timeframes.daily.current}
            prev={card.timeframes.daily.previous}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
