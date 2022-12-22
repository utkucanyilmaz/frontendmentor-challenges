import Job from "./Job";
import { useState, useEffect } from "react";
import jobData from "../assets/data.json";

export default function Jobs({ activeTags, setActiveTags }) {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setData(jobData);
    setFiltered(jobData);
  }, []);

  useEffect(() => {
    // const filteredData = data.filter(
    //   job =>
    //     activeTags.some(tag => job.level.includes(tag)) ||
    //     activeTags.some(tag => job.role.includes(tag)) ||
    //     activeTags.some(tag => job.languages.includes(tag))
    // );
  }, [activeTags]);

  return (
    <div className="grid grid-cols-1 gap-y-6">
      {filtered.map(advert => {
        return (
          <Job
            advert={advert}
            key={advert.id}
            data={data}
            filteredTags={filtered}
            setFiltered={setFiltered}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
          />
        );
      })}
    </div>
  );
}
