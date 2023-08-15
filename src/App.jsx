import { useState, useEffect } from "react";
import AdviceCard from "./components/AdviceCard";

function App() {
  const [data, setData] = useState();

  const getAdvice = () => {
    fetch("	https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => setData(data));
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App flex items-center justify-center h-screen bg-dark-blue antialiased">
      {data && (
        <AdviceCard data={data} setData={setData} getAdvice={getAdvice} />
      )}
    </div>
  );
}

export default App;
