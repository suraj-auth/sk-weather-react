import React from "react";
import appimg from "../assets/weather-app.png";
function Nav() {
  return (
    <div className="items-center py-6 flex h-3/10 sm:h-2/10 w-full justify-around ">
      <div>
        <img className="sm:w-20 w-16" src={appimg} alt="App Image" />
      </div>
      <div>
        <h1 className="bg-gradient-to-r from-white to-blue-600  text-transparent bg-clip-text text-3xl font-bold">
          Weather Forecast
        </h1>
      </div>
    </div>
  );
}

export default Nav;
