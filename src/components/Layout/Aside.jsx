import React, { useState } from "react";
import Arrow from "../../assets/image/arrow.svg";
import Logo from "../../assets/image/logo.svg";
import Project from "../../assets/image/project.svg";
import { Link } from "react-router-dom";

const Aside = () => {
  const [showmenu, setShowmenu] = useState(false);

  return (
    <>
      <div
        className={`${
          showmenu ? "rotate-180 left-[70px] " : "rotate-0"
        } custom_transition bg-bgColor custom_shadow h-7 w-7 rounded-full absolute left-[253px] top-[58px]  z-50 flex justify-center items-center`}
      >
        <button
          onClick={() => setShowmenu(!showmenu)}
          className="bg-white h-[22px] w-[22px] rounded-full flex justify-center items-center"
        >
          <img src={Arrow} />
        </button>
      </div>
      <aside
        className={`${
          showmenu ? "w-[65px]" : "w-[251px] "
        } bg-primary  rounded-2xl custom_transition shrink-0  flex flex-col sticky top-2.5`}
        style={{ height: "calc(100vh - 20px)" }}
      >
        <div
          role="button"
          className={` bg-white mt-5 py-3 rounded-full w-max mx-auto px-3`}
        >
          <img
            src={Logo}
            alt="logo"
            loading="lazy"
            className={`${
              showmenu ? "h-2" : "h-11"
            } mx-auto custom_transition w-full object-contain`}
          />
        </div>
        <div className="mt-6 mx-3">
          <Link to={"/"} className="bg-white p-3 flex rounded-lg gap-x-2">
            <img src={Project} />
            <span
              className={`${
                showmenu ? "invisible" : "visible"
              } text-[13px] font-semibold text-primary`}
            >
              Project
            </span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Aside;
