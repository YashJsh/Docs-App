import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute top-[5%] w-full py-10 text-zinc-500 flex justify-center align-center text-xl font-semibold">
          Documents.
        </div>
        <h1 className="absolute text-zinc-900 text-[13vw] font-semibold leading-none tracking-tighter top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%] ">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
