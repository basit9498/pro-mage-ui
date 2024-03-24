import React from "react";
import CalendarIcon from "../../assets/image/calendar.svg";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputDate = ({
  selected,
  label,
  placeholderText = "Date",
  onChange,
  ...reset
}) => {
  return (
    <>
      <label
        className={`date__picker relative block w-full  ${
          selected ? "border-primary dark:border-primary" : ""
        } h-[44px]  w-full text-[13px] flex items-center pl-4  border text-gray-500 rounded-lg`}
      >
        <ReactDatePicker
          className={``}
          selected={selected}
          placeholderText={placeholderText}
          onChange={(date, event) => {
            event.preventDefault();
            onChange(date);
          }}
          {...reset}
        />
        <span
          className={`${
            selected ? "-top-[11px] text-primary" : "top-2.5 text-gray-400"
          } absolute w-max left-3.5 px-1 py-0.5 text-[13px] bg-white`}
        >
          {label}
        </span>
        <img
          src={CalendarIcon}
          height={13.79}
          width={13.79}
          alt="calendar"
          className={`absolute right-4 top-3.5`}
        />
      </label>
    </>
  );
};

export default InputDate;
