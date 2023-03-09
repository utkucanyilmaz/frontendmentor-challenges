import btnArrow from "/images/icon-arrow.svg";

function App() {
  return (
    <div className="h-screen bg-red-500  font-rubik text-black">
      <div
        className="relative flex h-[280px] w-full flex-col items-center justify-start bg-pattern-desktop bg-cover bg-center
        bg-no-repeat"
      >
        <h1 className="py-8 text-3xl text-white">IP Address Tracker</h1>

        <div className="flex h-14 w-[555px] overflow-hidden rounded-2xl">
          <input
            placeholder="Search for any IP address or domain"
            type="text"
            className="h-full w-full px-6 text-lg placeholder:text-dark-gray"
          />

          <button className="flex h-14 w-14 items-center justify-center bg-black hover:bg-very-dark-gray">
            <img src={btnArrow} alt="Submit button" />
          </button>
        </div>

        <div className="absolute bottom-0 grid translate-y-1/2 grid-cols-4 gap-x-8 rounded-2xl bg-white px-8 py-9">
          <div className="flex flex-col gap-y-3 border-r border-r-dark-gray pr-12">
            <div className="text-xs font-bold uppercase tracking-widest text-dark-gray">
              IP Address
            </div>
            <div className="text-2xl font-semibold text-very-dark-gray">
              192.212.174.101
            </div>
          </div>

          <div className="flex flex-col gap-y-3 border-r border-r-dark-gray pr-12">
            <div className="text-xs font-bold uppercase tracking-widest text-dark-gray">
              Location
            </div>
            <div className="max-w-[10ch] text-2xl font-semibold text-very-dark-gray">
              Brooklyn, NY 10001
            </div>
          </div>

          <div className="flex flex-col gap-y-3 border-r border-r-dark-gray pr-12">
            <div className="text-xs font-bold uppercase tracking-widest text-dark-gray">
              Timezone
            </div>
            <div className="max-w-[10ch] text-2xl font-semibold text-very-dark-gray">
              UTC -05:00
            </div>
          </div>

          <div className="flex flex-col gap-y-3 border-r-dark-gray pr-12">
            <div className="text-xs font-bold uppercase tracking-widest text-dark-gray">
              ISP
            </div>
            <div className="max-w-[10ch] text-2xl font-semibold text-very-dark-gray">
              SpaceX Starlink
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
