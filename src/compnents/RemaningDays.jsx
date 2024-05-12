import React, { useState, useEffect } from "react";
import PCBG from "./images/PCBG.jpg";

const RemaningDays = () => {
  const [eidDate, setEidDate] = useState(new Date("16 June 2024"));
  const [timeDiff, setTimeDiff] = useState(0);
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = eidDate.getTime() - now;
      setTimeDiff(diff);
    };

    updateCountdown();

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [eidDate]);

  const remaningMonth = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
  const remaningDays = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 30);
  const remaningHours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const remaningMinutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const remaningSeconds = Math.floor((timeDiff / 1000) % 60);

  return (
    <>
      <div
        className="mx-auto w-full h-screen text-center fixed"
        style={{
          backgroundImage: `url(${PCBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundColor: "#f9fbfa",
        }}
        id="my-countdown-div"
      >
        <h1 className="mt-44 mb-8 text-5xl">Countdown to Eid-Ul-Adha</h1>
        <div className="flex justify-evenly">
          <table className="w-5/6">
            <tbody>
              <tr
                className="w-10 text-2xl"
                style={{ backgroundColor: "#f4ad27" }}
              >
                <th className="p-3">Month</th>
                <th>Days</th>
                <th>Hours</th>
                <th>Minutes</th>
                <th>Second</th>
              </tr>
              <tr style={{ backgroundColor: "#d2ba63" }}>
                <td className="text-2xl p-3 sm:w-20 md:w-10 lg:w-20 xl:w-10">
                  {remaningMonth > 0 ? remaningMonth : "0"}
                </td>
                <td className="text-2xl p-3 sm:w-20 md:w-10 lg:w-20 xl:w-10">
                  {remaningDays}
                </td>
                <td className="text-2xl p-3 sm:w-20 md:w-10 lg:w-20 xl:w-10">
                  {remaningHours}
                </td>
                <td className="text-2xl p-3 sm:w-20 md:w-10 lg:w-20 xl:w-10">
                  {remaningMinutes}
                </td>
                <td className="text-2xl p-3 sm:w-20 md:w-10 lg:w-20 xl:w-10">
                  {remaningSeconds}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RemaningDays;
