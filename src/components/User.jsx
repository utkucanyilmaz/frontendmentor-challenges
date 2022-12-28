import Button from "./Button";

export default function User() {
  return (
    <div className="bg-neutral-dark-blue rounded-2xl row-span-2">
      <div className="bg-primary-blue px-8 pt-8 py-24 flex flex-col gap-y-12 rounded-2xl">
        <img
          className="border-4 border-white rounded-full h-24 w-24"
          src="/assets/images/image-jeremy.png"
          alt=""
        />
        <div className="flex flex-col gap-y-1">
          <p className="text-neutral-pale-blue text-lg">Report for</p>
          <p className="text-white text-[44px] leading-[3rem]  font-light">
            Jeremy <br />
            Robson
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center bg-neutral-dark-blue px-8 pb-8 pt-6 rounded-2xl gap-y-6">
        <Button>Daily</Button>
        <Button>Weekly</Button>
        <Button>Monthly</Button>
      </div>
    </div>
  );
}
