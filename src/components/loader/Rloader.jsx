import React from "react";

function Rloader() {
  return (
    <div className="h-full pt-40 pb-40 mt-6 flex items-center justify-center rounded-2xl w-8/10 m-auto bg-blue-900">
      <div className="px-5 py-2 h-1.5/10 w-6/10 flex items-center justify-center gap-3 bg-blue-600 rounded-xl">
        <div className="h-[30px] w-[30px] flex items-center">
          <div className="animate-spin border-4 border-slate-400 border-t-white rounded-full h-[20px] w-[20px]"></div>
        </div>
        <h1 className="text-white text-xl font-medium">Processing...</h1>
      </div>
    </div>
  );
}

export default Rloader;
