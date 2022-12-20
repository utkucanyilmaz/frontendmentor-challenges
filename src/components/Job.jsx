export default function Job() {
  return (
    <div className="flex justify-between font-league-spartan bg-white px-9 py-8 border-l-4 rounded-md border-desaturated-dark-cyan shadow-md">
      <div className="flex items-center gap-x-6">
        <div className="w-20 h-20 bg-red-300 flex items-center justify-center">
          Image
        </div>
        <div>
          <div className="flex items-center justify-center gap-x-4 py-1">
            <div className="text-desaturated-dark-cyan text-sm font-bold">
              PhotoSnap
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <div className="text-white bg-desaturated-dark-cyan flex items-center justify-center font-bold py-1 px-2 uppercase rounded-full text-sm">
                new!
              </div>
              <div className="text-white flex items-center justify-center font-bold bg-very-dark-grayish-cyan py-1 px-2 uppercase rounded-full text-sm">
                Featured
              </div>
            </div>
          </div>
          <a
            href="#"
            className="text-very-dark-grayish-cyan hover:text-desaturated-dark-cyan font-bold"
          >
            Senior Frontend Dev
          </a>
          <div className="flex items-center gap-x-4 text-sm text-dark-grayish-cyan">
            <div>1d ago</div>
            &#x2022;
            <div>Full Time</div>
            &#x2022;
            <div>USA Only</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-4 px-1">
        <a
          href="#"
          className="p-2 bg-light-grayish-cyan-filter text-desaturated-dark-cyan rounded hover:bg-desaturated-dark-cyan hover:text-white cursor-pointer"
        >
          Frontend
        </a>
        <a
          href="#"
          className="p-2 bg-light-grayish-cyan-filter text-desaturated-dark-cyan rounded hover:bg-desaturated-dark-cyan hover:text-white cursor-pointer"
        >
          Senior
        </a>
        <a
          href="#"
          className="p-2 bg-light-grayish-cyan-filter text-desaturated-dark-cyan rounded hover:bg-desaturated-dark-cyan hover:text-white cursor-pointer"
        >
          HTML
        </a>
        <a
          href="#"
          className="p-2 bg-light-grayish-cyan-filter text-desaturated-dark-cyan rounded hover:bg-desaturated-dark-cyan hover:text-white cursor-pointer"
        >
          CSS
        </a>
        <a
          href="#"
          className="p-2 bg-light-grayish-cyan-filter text-desaturated-dark-cyan rounded hover:bg-desaturated-dark-cyan hover:text-white cursor-pointer"
        >
          JavaScript
        </a>
      </div>
    </div>
  );
}
