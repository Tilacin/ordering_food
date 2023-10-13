"use client";
import { useState } from "react";
import Calendar from "@/components/Calendar";
import { DateTime } from "@/utils/types";
import Spinner from "@/components/Spinner";


function Boocking() {
  
  const [date, setDate] = useState<DateTime>({
    justDate: null,
    dateTime: null,
  });
  
  
  return (
    <div>
      {!date.dateTime && <Calendar setDate={setDate} date={date} />}
      {date.dateTime && true ? (
        <>
          <p className='bold'>Вы заказали столик на: {date.dateTime.toLocaleString()}
          </p>
        </>
      ) : (
        <div className="flex h-screen items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default Boocking;
