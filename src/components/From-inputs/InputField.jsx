import React from "react";

const InputField = ({
  value,
  height = " h-[44px]",
  onChange,
  label,
  placeholder,
  type,
  className,
  name,
  id,
  ...reset
}) => {
  return (
    <>
      <label className="focus_input relative block ">
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
          {...reset}
          className={`${className}  ${height} w-full text-[13px] indent-4 border text-textColor rounded-lg`}
        />
        <span className="absolute text-textColor min-w-20 span_label text-[13px] bg-white px-0.5">
          {label}
        </span>
      </label>
    </>
  );
};

export default InputField;
