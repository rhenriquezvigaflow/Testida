import { useState } from "react";

export function useDatePicker() {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date()
  });

  function handleStartDate(date) {
    setDates((prevDates) => ({ ...prevDates, startDate: date }));
  }

  function handleEndDate(date) {
    setDates((prevDates) => ({ ...prevDates, endDate: date }));
  }

  return {
    dates,
    handleStartDate,
    handleEndDate
  };
}
