import Tag from "./Tag";
import { motion } from "framer-motion";

export default function Job({ advert, data, activeTags, setActiveTags }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      key={advert.id}
      className={`grid grid-cols-1 md:grid-cols-2 relative  font-league-spartan bg-white px-4 md:px-6 py-8 md:py-6 rounded-md shadow-md md:gap-x-4 border-l-4  ${
        advert.featured ? "border-desaturated-dark-cyan" : "border-transparent"
      }`}
    >
      <div className="flex items-center gap-x-6">
        <div className="w-12 h-12 absolute top-0 -translate-y-1/2 md:static md:translate-y-0 md:w-20 md:h-20 flex items-center justify-center">
          <img className="" src={advert.logo} alt="" />
        </div>
        <div className="w-full">
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
          <div className="flex py-4 border-b w-full md:border-none md:py-0 items-center gap-x-4 text-sm text-dark-grayish-cyan">
            <div>{advert.postedAt}</div>
            &#x2022;
            <div>{advert.contract}</div>
            &#x2022;
            <div>{advert.location}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-start lg:justify-end items-center gap-4 py-4 flex-wrap ">
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
        ))}
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
    </motion.div>
  );
}
