import React from "react";
import Arrow from "../../assets/image/angle-small-down.svg";
import ReactSelect from "react-select";

const InputSelect = ({
  selected,
  onSelect,
  option = [],
  label,
  placeholder = "Select role",
}) => {
  return (
    <>
      <div className="relative">
        {/* <span className={`${selected ? '-top-[11px] text-primary' : 'top-2.5 text-gray-400'} absolute w-max left-3.5 z-30 px-1 py-0.5 text-[13px] bg-white`}>{label}</span> */}
        <div className="search_dropDown border h-[44px] relative  rounded-md text-sm flex-1">
          <ReactSelect
            value={selected}
            onChange={onSelect}
            options={option}
            placeholder={placeholder}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
          />
          <img src={Arrow} alt="" className="absolute top-5 right-3" />
        </div>
      </div>
    </>
  );
};

export default InputSelect;
