import React from "react";
import SearchIcon from "../../assets/image/search.svg";
import BellIcon from "../../assets/image/bell.svg";
import Avatar from "../../assets/image/user.png";
import Arrow from "../../assets/image/arrow.svg";

const Header = () => {
  return (
    <>
      <header className="shadow-CardShadow bg-white rounded-2xl px-5 py-2.5 flex justify-between items-center">
        <div className="relative w-[282px]">
          <input
            type="text"
            placeholder={"Search project"}
            className="bg-bgColor text-sm h-10 w-full indent-4 rounded-xl"
          />
          <img
            src={SearchIcon}
            alt="search"
            role="button"
            className={`right-3 absolute h-[19px] w-[18.09px] top-2.5 `}
          />
        </div>
        <section className="flex items-center gap-x-5">
          <div className="relative">
            <img
              src={BellIcon}
              alt="bell Icon"
              className=" h-[22px] w-[22.3px]"
            />
            <div className="flex bg-primary border-2 border-white absolute justify-center items-center h-3 rounded-full w-3 -top-1 -right-[1px]"></div>
          </div>
          <div className="flex items-center gap-x-2.5">
            <img
              src={Avatar}
              className="rounded-full object-cover h-12 w-12"
              alt="Profile"
            />
            <img
              src={Arrow}
              alt=" "
              className="h-[12px] w-[16px]  -rotate-90"
            />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
