import Job from "./Job";
import { useState, useEffect } from "react";
import jobData from "../assets/data.json";

export default function Jobs({ activeTags, setActiveTags }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jobData);
  }, []);

  function filterTags(tag) {
    if (activeTags.length === 0) {
      return true;
    } else {
      let tags = [tag.role, tag.level, ...tag.languages, ...tag.tools];

      return activeTags.every(tag => tags.includes(tag));
    }
  }

  return (
    <div className="grid grid-cols-1 gap-y-6">
      {data
        .filter(tag => filterTags(tag))
        .map(advert => {
          return (
            <Job
              advert={advert}
              key={advert.id}
              data={data}
              activeTags={activeTags}
              setActiveTags={setActiveTags}
            />
          );
        })}
    </div>
  );
}
