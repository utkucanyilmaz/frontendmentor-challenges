import User from "./components/User";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [timeframe, setTimeFrame] = useState("daily");

  console.log(timeframe);

  const getData = () => {
    fetch("/src/data.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <section className="container mx-auto grid grid-cols-4 grid-rows-2 gap-[30px]">
        <User timeframe={timeframe} setTimeFrame={setTimeFrame} />
        {data &&
          data.map(card => (
            <Card
              key={card.id}
              bg={card.bg}
              bgImage={card.bgImage}
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
