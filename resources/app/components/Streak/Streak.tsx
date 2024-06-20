import { CigaretteOff } from "lucide-react";
import React from "react";

export default function Streak() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const completedDays = 4; // Number of days the user has completed

  return (
    <div className="flex items-center h-screen snap-center">
      <div className="flex flex-row justify-center px-24 gap-24 h-[250px]">
        <div className="flex items-center p-6 bg-gray-100 shadow-md rounded-lg w-[50%] justify-center">
          <div className="flex flex-col items-start mr-4 ">
            <div className="flex items-center">
              <CigaretteOff className="w-12 h-12 text-red-500" />
              <span className="ml-2 text-4xl font-semibold">10 hari</span>
            </div>
            <div className="flex space-x-4 mt-4">
              {days.map((day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full ${
                      index < completedDays ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></div>
                  <div className="mt-2 text-sm">{day}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[50%] p-6">
          <p className="text-5xl ">
            Tetap kuat, masa depanmu lebih cerah tanpa rokok!
          </p>
        </div>
      </div>
    </div>
  );
}
