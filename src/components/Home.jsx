import React, { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Adder from "./Adder";
import { HelperContext } from "../context/context";
function Home() {
  const [tempval, setTempval] = useState("fatehabad");
  const [isempty, setIsempty] = useState(false);
  const [data, setData] = useState(null);
  return (
    <HelperContext.Provider
      value={{
        tempval,
        isempty,
        setIsempty,
        setTempval,
        data,
        setData,
      }}
    >
      <div className="min:h-full pb-28 w-full sm:w-2/6 m-auto bg-sky-950">
        <Nav />
        <Adder />
        <Hero />
      </div>
    </HelperContext.Provider>
  );
}

export default Home;
