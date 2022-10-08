import React, { useState } from "react";
import { useIsMobile } from "../../hooks";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineExclamationCircle,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from "react-icons/ai";
import { Divider } from "@mui/material";
interface ActionButtonsProps {
  isActive?: boolean;
  isMobile?: boolean;
}
export default function Navbar() {
  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);
  const isMobile = useIsMobile({ width: 640 });
  return (
    <nav
      className={` transition-all delay-200 sticky top-0 p-5 z-20 bg-stone-900 text-white shadow-2xl flex justify-between text-base sm:p-7 sm:text-xl ${
        (isMobile && "flex-col") || "items-center"
      }`}
    >
      <div>MUKUL DUTT</div>
      <ActionButtons isMobile={isMobile} isActive={mobileNavbar} />

      <>
        {(!mobileNavbar && (
          <AiOutlineMenu
            className="block sm:hidden cursor-pointer absolute right-5 select-none"
            onClick={() => setMobileNavbar(!mobileNavbar)}
          />
        )) || (
          <AiOutlineClose
            className="block sm:hidden cursor-pointer absolute right-5 select-none"
            onClick={() => setMobileNavbar(!mobileNavbar)}
          />
        )}
      </>
    </nav>
  );
}
function ActionButtons({ isActive, isMobile }: ActionButtonsProps) {
  const iconClass = "block cursor-pointer right-5 select-none text-base";
  return (
    <div
      className={`select-none ${
        (isActive && isMobile && "flex") || "hidden"
      } items-end  sm:flex ${(isMobile && "py-3 flex-col") || "gap-10"}`}
    >
      <ActionButtonItem label="Home">
        <AiOutlineHome className={iconClass} />
      </ActionButtonItem>
      <ActionButtonItem label="About">
        <AiOutlineExclamationCircle className={iconClass} />
      </ActionButtonItem>
      <ActionButtonItem label="Projects">
        <AiOutlineFundProjectionScreen className={iconClass} />
      </ActionButtonItem>
      <ActionButtonItem label="Contact">
        <AiOutlineContacts className={iconClass} />
      </ActionButtonItem>
    </div>
  );
}
function ActionButtonItem({
  label,
  children,
}: {
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="p-2 rounded-sm cursor-pointer hover:bg-gray-700 w-full justify-end flex items-center gap-2 ">
      {children}
      {label}
    </div>
  );
}
