import React, { useState, useContext } from "react";
import { cityobj } from "../City";
import { memo } from "react";
import { HelperContext } from "../context/context";
function Adder() {
  const { setTempval, setData, setIsempty, isempty } =
    useContext(HelperContext);
  const [inval, setInval] = useState("");
  const [item, setItem] = useState([]);
  function inChange(e) {
    setInval(e.target.value);
    setIsempty(false);
    let arr = [];
    for (const element of cityobj) {
      let a = element.toLowerCase();
      if (a.includes(inval.toLowerCase()) && inval != "") arr.push(element);
    }
    setItem(arr);
  }
  function getcity() {
    if (inval.length <= 2) setIsempty(true);
    else {
      setData(null);
      setTempval(inval.trim());
    }
    setInval("");
  }
  return (
    <div className=" relative">
      <div className="flex mt-8 w-8/10 m-auto">
        <div className="flex w-full">
          <div className="w-7/10">
            <input
              className="bg-zinc-800 rounded-l-full w-full p-3 pl-5 text-white border-hidden outline-none"
              type="text"
              placeholder="Enter City Name"
              value={inval}
              onChange={(e) => {
                inChange(e);
              }}
            />
            {isempty && (
              <h1 className="text-white font-medium ml-5">
                please enter a valid city
              </h1>
            )}
          </div>
          <div className="w-3/10">
            <button
              className="p-3 text-white font-medium rounded-r-full bg-blue-600 w-full"
              onClick={() => {
                getcity();
              }}
            >
              Find
            </button>
          </div>
        </div>
      </div>
      {item.length > 0 && (
        <div className="absolute left-12 top-16 backdrop-blur-md w-7.5/10 sm:w-8/10 m-auto max-h-52 sm:max-h-96 overflow-hidden border border-white">
          {item.map((i, index) => (
            <h1
              key={index}
              className="p-2 border border-white cursor-pointer text-white font-medium"
              onClick={() => {
                setInval(i);
                setItem([]);
              }}
            >
              {i}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(Adder);
