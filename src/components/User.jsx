import Button from "./Button";

export default function User({ timeframe, setTimeFrame }) {
  return (
    <div className="bg-neutral-dark-blue rounded-2xl lg:row-span-2 sm:col-span-2 lg:col-span-1">
      <div className="bg-primary-blue p-8 lg:pb-24 flex flex-row items-center lg:items-start lg:flex-col gap-x-4 lg:gap-y-12 rounded-2xl">
        <img
          className="border-4 border-white rounded-full h-[70px] w-[70px] lg:h-24 lg:w-24"
          src="/assets/images/image-jeremy.png"
          alt=""
        />
        <div className="flex flex-col gap-y-1">
          <p className="text-neutral-pale-blue text-base lg:text-lg">
            Report for
          </p>
          <p className="text-white text-2xl lg:text-[44px] lg:leading-[3rem]  font-light">
            Jeremy Robson
          </p>
        </div>
      </div>
      <div className="flex flex-row lg:flex-col items-start justify-around lg:justify-center bg-neutral-dark-blue p-5 lg:p-8 rounded-2xl gap-y-6">
        <Button timeframe={timeframe} setTimeFrame={setTimeFrame}>
          Daily
        </Button>
        <Button timeframe={timeframe} setTimeFrame={setTimeFrame}>
          Weekly
        </Button>
        <Button timeframe={timeframe} setTimeFrame={setTimeFrame}>
          Monthly
        </Button>
      </div>
    </div>
  );
}
