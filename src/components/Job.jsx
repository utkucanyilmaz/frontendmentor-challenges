import Tag from "./Tag";

export default function Job({ advert, data, activeTags, setActiveTags }) {
  return (
    <div
      key={advert.id}
      className={`flex justify-between font-league-spartan bg-white px-9 py-8  rounded-md shadow-md ${
        advert.featured ? "border-desaturated-dark-cyan border-l-4" : ""
      }`}
    >
      <div className="flex items-center gap-x-6">
        <div className="w-20 h-20 flex items-center justify-center">
          <img className="w-full h-full" src={advert.logo} alt="" />
        </div>
        <div>
          <div className="flex items-center justify-start gap-x-4 py-1">
            <div className="text-desaturated-dark-cyan text-sm font-bold">
              {advert.company}
            </div>
            <div className="flex items-center justify-center gap-x-2">
              {advert.new && (
                <div className="text-white bg-desaturated-dark-cyan flex items-center justify-center font-bold py-1 px-2 uppercase rounded-full text-sm">
                  new!
                </div>
              )}
              {advert.featured && (
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
            {advert.position}
          </a>
          <div className="flex items-center gap-x-4 text-sm text-dark-grayish-cyan">
            <div>{advert.postedAt}</div>
            &#x2022;
            <div>{advert.contract}</div>
            &#x2022;
            <div>{advert.location}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 px-1 flex-wrap">
        {
          <Tag
            data={data}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
          >
            {advert.role}
          </Tag>
        }
        {
          <Tag
            data={data}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
          >
            {advert.level}
          </Tag>
        }
        {advert.languages.map((language, key) => (
          <Tag
            key={key}
            data={data}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
          >
            {language}
          </Tag>
        ))}{" "}
        {advert.tools.map((tool, key) => (
          <Tag
            key={key}
            data={data}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
          >
            {tool}
          </Tag>
        ))}
      </div>
    </div>
  );
}
