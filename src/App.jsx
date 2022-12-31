import User from "./components/User";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [timeframe, setTimeFrame] = useState("daily");

  const changeTypeOfLast = () => {
    return timeframe === "daily"
      ? "Day"
      : timeframe === "weekly"
      ? "Week"
      : "Month";
  };

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
    <div className="flex items-center justify-center lg:h-screen">
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 px-6 py-20 lg:py-0 lg:px-4 lg:grid-cols-4 lg:grid-rows-2 gap-6 lg:gap-[30px]">
        <User timeframe={timeframe} setTimeFrame={setTimeFrame} />
        {data &&
          data.map(card => (
            <Card
              key={card.id}
              bg={card.bg}
              bgImage={card.bgImage}
              title={card.title}
              typeOfLast={changeTypeOfLast()}
              current={
                timeframe === "daily"
                  ? card.timeframes.daily.current
                  : timeframe === "weekly"
                  ? card.timeframes.weekly.current
                  : card.timeframes.monthly.current
              }
              prev={
                timeframe === "daily"
                  ? card.timeframes.daily.previous
                  : timeframe === "weekly"
                  ? card.timeframes.weekly.previous
                  : card.timeframes.monthly.previous
              }
            />
          ))}
      </section>
    </div>
  );
}

export default App;
