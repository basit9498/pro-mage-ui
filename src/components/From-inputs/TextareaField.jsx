import React from "react";

const TextAreaField = ({
  value,
  onChange,
  placeholder,
  className,
  ...reset
}) => {
  return (
    <>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...reset}
        className={`h-24 resize-none w-full text-[13px] indent-2 p-2 border text-gray-400 rounded-lg`}
      />
    </>
  );
};

export default TextAreaField;
