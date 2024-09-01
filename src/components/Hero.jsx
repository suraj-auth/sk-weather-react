import React, { useEffect, useState, useContext } from "react";
import { options1, options2 } from "../import/imgimport";
import { hot, storm, humid } from "../import/imgimport";
import { level1, level2, level3 } from "../import/imgimport";
import { level4, level5, level6 } from "../import/imgimport";
import { HelperContext } from "../context/context";
import Rloader from "./loader/Rloader";
function Hero() {
  const [cldimg, setCldimg] = useState();
  const { tempval, setIsempty, data, setData } = useContext(HelperContext);
  const url2 = `https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding?city=${tempval}&country=IN`;
  async function getdata() {
    try {
      const response1 = await fetch(url2, options2);
      const result1 = await response1.json();
      try {
        const url1 = `https://weatherapi-com.p.rapidapi.com/current.json?q=${result1[0].latitude},${result1[0].longitude}`;
        const response2 = await fetch(url1, options1);
        const result2 = await response2.json();
        let obj = {
          speed: result2.current.wind_kph,
          temp: result2.current.temp_c,
          feels: result2.current.feelslike_c,
          humidity: result2.current.humidity,
          cloud: result2.current.cloud,
        };
        setData(obj);
        console.log("data fetched perfectly");
      } catch (error) {
        setIsempty(true);
        console.log("2nd error = " + error);
      }
    } catch (error) {
      setIsempty(true);
      console.log("1st error = " + error);
    }
  }
  function changer() {
    if (data.cloud < 15) setCldimg(level1);
    else if (data.cloud < 30) setCldimg(level2);
    else if (data.cloud <= 45) setCldimg(level3);
    else if (data.cloud <= 60) setCldimg(level4);
    else if (data.cloud <= 75) setCldimg(level5);
    else if (data.cloud <= 100) setCldimg(level6);
  }
  useEffect(() => {
    getdata();
  }, [tempval]);
  useEffect(() => {
    if (data && !data.error) changer();
  }, [data]);
  return (
    <>
      {data == null ? (
        <Rloader />
      ) : (
        <>
          <div className="m-auto mt-6 sm:mt-4 rounded-2xl 3.5/10 w-8/10 bg-blue-800">
            <div className="text-3xl font-bold text-white pl-5 py-2">Today</div>
            <div className="flex p-2 items-center">
              <div className="text-4xl transition-all delay-1000 font-bold text-white pl-4 mr-14 sm:mr-28">
                {data.temp && `${data.temp}॰C`}
              </div>
              <div>
                <img className="w-24" src={cldimg} alt="" />
              </div>
            </div>
            <div className="flex p-2 items-center gap-2 pl-5">
              <i className="text-yellow-500 fa-solid fa-location-dot"></i>
              <h1 className="text-white font-bold">{tempval && tempval}</h1>
            </div>
          </div>
          <div className="m-auto mt-6 rounded-2xl h-2/10 sm:h-3/10 w-8/10 flex justify-between ">
            <div className="h-6.5/10 flex flex-col items-center justify-center rounded-lg w-3/10 bg-blue-800 gap-2">
              <h1 className="text-slate-300 font-medium">Humidity</h1>
              <div className="flex items-center gap-1">
                <img className="w-8" src={humid} alt="" />
                <h1 className="text-slate-200 font-medium">
                  {data.humidity && `${data.humidity}%`}
                </h1>
              </div>
            </div>
            <div className="h-6.5/10 flex flex-col items-center justify-center rounded-lg w-3/10 bg-blue-800 gap-2">
              <h1 className="text-slate-300 font-medium">Wind Speed</h1>
              <div className="flex items-center gap-1">
                <img className="w-8" src={storm} alt="" />
                <h1 className="text-slate-200 font-medium">
                  {data.speed && `${data.speed}kph`}
                </h1>
              </div>
            </div>
            <div className="h-6.5/10 flex flex-col items-center justify-center rounded-lg w-3/10 bg-blue-800 gap-2">
              <h1 className="text-slate-300 font-medium">Feels Like</h1>
              <div className="flex items-center gap-1">
                <img className="w-8" src={hot} alt="" />
                <h1 className="text-slate-200 font-medium">
                  {data.feels && `${data.feels}॰C`}
                </h1>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Hero;
