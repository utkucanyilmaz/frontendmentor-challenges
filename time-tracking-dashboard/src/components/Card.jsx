export default function Card({
  title,
  current,
  prev,
  bg,
  bgImage,
  typeOfLast,
}) {
  return (
    <div
      style={{ backgroundImage: `url('${bgImage}')` }}
      className={`cursor-pointer rounded-2xl ${bg} bg-no-repeat bg-[top_-0.5rem_right_1rem] flex flex-col justify-end`}
    >
      <div className="pt-10 lg:pt-12 flex flex-col justify-end ">
        <div className="flex flex-col lg:gap-y-10 bg-neutral-dark-blue px-5 py-6 lg:p-8 text-white rounded-2xl transition-colors hover:bg-neutral-desaturated-blue">
          <div className="flex justify-between ">
            <p className="text-lg lg:text-xl ">{title}</p>
            <button>
              <img
                className="transition-opacity opacity-60 hover:opacity-100"
                src="/assets/images/icon-ellipsis.svg"
                alt=""
              />
            </button>
          </div>
          <div className="flex flex-row justify-between items-center lg:items-start lg:flex-col gap-y-6">
            <p className="text-4xl sm:text-3xl font-thin lg:text-5xl xl:text-6xl">{`${current}hrs`}</p>
            <p className="text-base font-thin lg:text-md xl:text-lg text-neutral-pale-blue">{`Last ${typeOfLast} - ${prev}hrs`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
