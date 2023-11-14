

import { Dispatch, FC, SetStateAction, useState } from "react";
import ReactCalendar from "react-calendar";
import { add, format } from "date-fns";

import "react-calendar/dist/Calendar.css";
import {
  INTERVAL,
  STORE_CLOSING_TIME,
  STORE_OPENING_TIME,
} from "@/constants/config";
import { DateTime } from "@/utils/types";

interface indexProps {
  date: DateTime;
  setDate: Dispatch<SetStateAction<DateTime>>;
}

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

const index: FC<indexProps> = ({ setDate, date }) => 


{
  
  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;
    const begining = add(justDate, { hours: STORE_OPENING_TIME });
    const end = add(justDate, { hours: STORE_CLOSING_TIME });
    const interval = INTERVAL;

    const times = [];
    for (let i = begining; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {date.justDate ? (
        <div className="flex flex-wrap gap-2 items-center justify-center ">
          {times?.map((time, i) => (
            <div key={`time-${i}`} className="rounded-sm bg-gray-100 p-2">
              <button
                type="button"
                onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
              >
                {format(time, "kk:mm")}
              </button>
            </div>
          ))}
        </div>
      ) : (
        
        <ReactCalendar
          minDate={new Date()}
          view="month"
          locale="ru-RU"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
           
          }
          
        />


      )}
      
    </div>
    
  );
};

export default index;