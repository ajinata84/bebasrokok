import { Check, CigaretteOff, X } from "lucide-react";
import { useEffect, useState } from "react";
import { format, startOfWeek, addDays, isSameDay, isBefore } from "date-fns";

export default function Streak({
  streak = [],
  maxcount,
}: {
  streak: string[];
  maxcount: number;
}) {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const [weekDates, setWeekDates] = useState<Date[]>([]);

  useEffect(() => {
    const currentDate = new Date();
    const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 });
    const week = Array.from({ length: 7 }, (_, index) =>
      addDays(startOfWeekDate, index)
    );
    setWeekDates(week);
  }, []);

  const CheckedElement = () => (
    <div className="rounded-full w-12 h-12 bg-[#7DE163] flex items-center justify-center">
      <Check />
    </div>
  );

  const NotCheckElement = () => (
    <div className="rounded-full w-12 h-12 bg-[#FF0000] flex items-center justify-center">
      <X />
    </div>
  );

  const BlankElement = () => (
    <div className="rounded-full w-12 h-12 bg-[#D9D9D9] flex items-center justify-center"></div>
  );

  return (
    <div className="flex items-center h-screen snap-center">
      <div className="flex flex-row justify-center px-24 gap-24 h-[300px]">
        <div className="flex items-center p-6 bg-[#F8F8F8] rounded-lg max-w-[700px] px-10 justify-center">
          <div className="flex flex-col items-start mr-4">
            <div className="flex items-center">
              <CigaretteOff className="w-24 h-24 text-red-500" />
              <span className="ml-6 text-5xl font-semibold">
                {maxcount} hari
              </span>
            </div>
            <div className="flex space-x-4 mt-4">
              {weekDates.map((date, index) => {
                const formattedDate = format(date, "yyyy-MM-dd");
                const isInStreak = streak?.some((streakDate) =>
                  isSameDay(new Date(streakDate), date)
                );
                const isFutureDate = isBefore(new Date(), date);
                return (
                  <div key={index} className="flex flex-col items-center">
                    {isFutureDate ? (
                      <BlankElement />
                    ) : isInStreak ? (
                      <CheckedElement />
                    ) : (
                      <NotCheckElement />
                    )}
                    <div className="mt-2 text-sm">{days[index]}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[50%] p-6">
          <p className="text-5xl">
            Tetap kuat, masa depanmu lebih cerah tanpa rokok!
          </p>
        </div>
      </div>
    </div>
  );
}
