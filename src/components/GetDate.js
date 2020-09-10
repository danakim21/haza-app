import React from "react";
import "../styles/getDate.css";

function GetDate() {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let newDate = new Date();
  // year
  let year = newDate.getFullYear();
  // month
  let month = newDate.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  // date
  let date = newDate.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  // day
  let day = DAYS[newDate.getDay()];

  return <h3>{`${year}/${month}/${date} ${day}`}</h3>;
}

export default GetDate;
