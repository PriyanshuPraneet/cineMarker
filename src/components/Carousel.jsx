import { useState } from "react";

function Carousel({ children: movies }) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? 0 : curr - 1));
  const next = () => setCurr((curr) => (curr === 3 ? 3 : curr + 1));

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex gap-10 transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {movies}
      </div>
      <div className="flex justify-between p-4">
        <button
          onClick={prev}
          className="cursor-pointer duration-200 hover:scale-125 active:scale-100 text-white bg-blue-500 rounded-full px-4 py-2 flex items-center gap-2"
          title="Go Back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            className="stroke-white"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M11 6L5 12M5 12L11 18M5 12H19"
            />
          </svg>
          Prev
        </button>
        <button
          onClick={next}
          className="mr-2 cursor-pointer duration-200 hover:scale-125 active:scale-100 text-white bg-blue-500 rounded-full px-4 py-2 flex items-center gap-2"
          title="Go Forward"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            className="stroke-white"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M13 6L19 12M19 12L13 18M19 12H5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
