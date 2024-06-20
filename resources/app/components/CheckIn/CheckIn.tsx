import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Check, CigaretteOff } from "lucide-react";
import { Button } from "../ui/button";
import { UserFetch } from "@/pages/Home";
import { getApiUrl } from "@/lib/constants";

interface CheckInProps {
  user: UserFetch;
  refetchUser: () => Promise<void>;
}

export default function CheckIn(CheckInProps: CheckInProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [currentDateChecked, setCurrentDateChecked] = useState(false);

  useEffect(() => {
    let date = new Date();

    let tzDate = new Date(
      date.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
    );

    let offset = date.getTime() - tzDate.getTime();

    const today = new Date();
    today.setTime(date.getTime() + offset);
    setCurrentDateChecked(
      CheckInProps.user.check_in_dates?.some((date) =>
        date.startsWith(today.toISOString().split("T")[0])
      )
    );
    console.log(CheckInProps.user.check_in_dates);
    console.log(today.toISOString());
  }, [CheckInProps.user.check_in_dates]);

  const handleCheckIn = async () => {
    setIsLoading(true);
    const token = Cookies.get("token");
    try {
      const response = await fetch(`${getApiUrl()}/checkin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        await CheckInProps.refetchUser();
        setIsCheckedIn(true);
      }
    } catch (error) {
      console.error("Error during check-in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white flex items-center justify-center h-screen snap-center">
      <div className="text-left flex items-center">
        <div className="mr-8">
          <h1 className="text-5xl font-bold mb-4">
            Hai.{" "}
            <span className="text-black font-medium">
              {CheckInProps.user.username}
            </span>
          </h1>
          <h2 className="text-5xl mb-6">
            {currentDateChecked || isCheckedIn
              ? "Anda telah check-in hari ini!"
              : "Apakah anda tidak merokok hari ini?"}
          </h2>
          <p className="text-gray-500">
            Anda sudah tidak merokok selama{" "}
            <span className="font-bold">{CheckInProps.user.streak_count}</span>{" "}
            hari berturut turut
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Button
            className="bg-[#7DE163] text-black font-light py-6 px-16 rounded-3xl text-6xl w-[400px] hover:border-4 hover:border-[#68CF4E] hover:bg-[#7DE163] h-[150px]"
            onClick={() => handleCheckIn()}
            disabled={isLoading || currentDateChecked || isCheckedIn}
          >
            {currentDateChecked || isCheckedIn ? <Check /> : "Tidak"}
            {isLoading && (
              <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full border-t-transparent border-white ml-2"></div>
            )}
          </Button>
          <Button
            className="text-black font-light py-6 px-16 rounded-3xl text-6xl w-[400px] hover:border-4 h-[150px]"
            variant={"ghost"}
            onClick={() => handleCheckIn()}
            disabled={isLoading || currentDateChecked || isCheckedIn}
          >
            Iya
          </Button>
        </div>
      </div>
    </div>
  );
}
