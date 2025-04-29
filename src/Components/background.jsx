import React from "react";

const Background = () => {
  return (
    <>
      <div className="z-10">
        <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[15vw] font-semibold tracking-tighter text-zinc-900">
          Docs.
        </h1>
        <div className="absolute top-[15%] w-full flex justify-center text-zinc-500 font-semibold">
          Download
        </div>
      </div>
    </>
  );
};

export default Background;
