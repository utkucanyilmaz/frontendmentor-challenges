export default function Card({ title, current, prev, bg, bgImage }) {
  return (
    <div
      className={`cursor-pointer rounded-2xl ${bg} relative before:absolute before:content-[url('${bgImage}')] before:top-0 before:right-4 overflow-hidden `}
    >
      <div className="pt-12 flex flex-col justify-end ">
        <div className="flex flex-col gap-y-10 bg-neutral-dark-blue p-8 text-white rounded-2xl transition-colors hover:bg-neutral-desaturated-blue z-10">
          <div className="flex justify-between ">
            <p className="text-xl ">{title}</p>
            <button>
              <img
                className="transition-opacity opacity-60 hover:opacity-100"
                src="/assets/images/icon-ellipsis.svg"
                alt=""
              />
            </button>
          </div>
          <div className="flex flex-col gap-y-6">
            <p className="text-5xl">{`${current}hrs`}</p>
            <p className="text-lg text-neutral-pale-blue">{`Last Week - ${prev}hrs`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
