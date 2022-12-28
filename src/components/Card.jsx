export default function Card({ title, current, prev }) {
  return (
    <div className={`cursor-pointer rounded-2xl`}>
      <div className="pt-12 flex flex-col justify-end ">
        <div className="flex flex-col gap-y-10 bg-neutral-dark-blue p-8 text-white rounded-2xl transition-colors hover:bg-neutral-desaturated-blue ">
          <div className="flex justify-between ">
            <p className="text-xl ">{title}</p>
            <button>
              <img src="/assets/images/icon-ellipsis.svg" alt="" />
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
