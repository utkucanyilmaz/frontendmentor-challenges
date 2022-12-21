import Job from "./Job";
import { useState, useEffect } from "react";
import jobData from "../assets/data.json";

export default function Jobs() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeTags, setActiveTags] = useState([]);

  useEffect(() => {
    setData(jobData);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-y-6">
      {data &&
        data.map(ad => {
          return (
            <Job
              ad={ad}
              filtered={filtered}
              setFiltered={setFiltered}
              activeTags={activeTags}
              setActiveTags={setActiveTags}
            />
          );
        })}
    </div>
  );
}
