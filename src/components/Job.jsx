import Tag from "./Tag";

export default function ad({
  ad,
  filtered,
  setFiltered,
  activeTags,
  setActiveTags,
}) {
  return (
    <div
      key={ad.id}
      className={`flex justify-between font-league-spartan bg-white px-9 py-8  rounded-md shadow-md ${
        ad.featured ? "border-desaturated-dark-cyan border-l-4" : ""
      }`}
    >
      <div className="flex items-center gap-x-6">
        <div className="w-20 h-20 flex items-center justify-center">
          <img className="w-full h-full" src={ad.logo} alt="" />
        </div>
        <div>
          <div className="flex items-center justify-start gap-x-4 py-1">
            <div className="text-desaturated-dark-cyan text-sm font-bold">
              {ad.company}
            </div>
            <div className="flex items-center justify-center gap-x-2">
              {ad.new && (
                <div className="text-white bg-desaturated-dark-cyan flex items-center justify-center font-bold py-1 px-2 uppercase rounded-full text-sm">
                  new!
                </div>
              )}
              {ad.featured && (
                <div className="text-white flex items-center justify-center font-bold bg-very-dark-grayish-cyan py-1 px-2 uppercase rounded-full text-sm">
                  Featured
                </div>
              )}
            </div>
          </div>
          <a
            href="#"
            className="text-very-dark-grayish-cyan hover:text-desaturated-dark-cyan font-bold"
          >
            {ad.position}
          </a>
          <div className="flex items-center gap-x-4 text-sm text-dark-grayish-cyan">
            <div>{ad.postedAt}</div>
            &#x2022;
            <div>{ad.contract}</div>
            &#x2022;
            <div>{ad.location}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 px-1 flex-wrap">
        {ad.role && (
          <Tag
            filtered={filtered}
            setFiltered={setFiltered}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
          >
            {ad.role}
          </Tag>
        )}
        {ad.level && (
          <Tag
            filtered={filtered}
            setFiltered={setFiltered}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
          >
            {ad.level}
          </Tag>
        )}
        {ad.languages.map(language => (
          <Tag
            filtered={filtered}
            setFiltered={setFiltered}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
          >
            {language}
          </Tag>
        ))}
      </div>
    </div>
  );
}
