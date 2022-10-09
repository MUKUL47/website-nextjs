import React, { useState, useMemo } from "react";
import { useIsMobile, useClickedOutside } from "../../hooks";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineExclamationCircle,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
  AiOutlineFilePdf,
} from "react-icons/ai";
import { Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
interface ActionButtonsProps {
  isActive?: boolean;
  isMobile?: boolean;
  onClick?: (e: any) => void;
}
export default function Navbar() {
  const navbarClass = useMemo(() => `${Math.random()}`, []);
  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);
  useClickedOutside({
    className: navbarClass,
    onClickedOutside: () => {
      setMobileNavbar(false);
    },
  });
  const isMobile = useIsMobile({ width: 640 });
  return (
    <nav
      className={`${navbarClass} transition-all delay-200 sticky top-0 p-5 z-20 bg-stone-900 text-white shadow-2xl flex justify-between text-base sm:p-6 sm:text-xl ${
        (isMobile && "flex-col") || "items-center"
      }`}
    >
      <div>
        {(isMobile && <p className="font-bold">Mukul Dutt</p>) || (
          <Image
            src={"/../public/assets/profile-pic.jpeg"}
            width={"50px"}
            height={"50px"}
            style={{ maxWidth: "20px" }}
            alt="Mukul Dutt"
            className="rounded-full hover:scale-150"
          />
        )}
      </div>
      <ActionButtons
        isMobile={isMobile}
        isActive={mobileNavbar}
        onClick={() => {
          setMobileNavbar(false);
        }}
      />

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
function ActionButtons({ isActive, isMobile, onClick }: ActionButtonsProps) {
  const iconClass = "block cursor-pointer right-5 select-none text-base";
  return (
    <div
      className={`select-none ${
        (isActive && isMobile && "flex") || "hidden"
      } items-end  sm:flex ${(isMobile && "py-3 flex-col") || "gap-10"}`}
      onClick={(e) => onClick?.(e)}
    >
      <Link href={"/resume"}>
        <a>
          <ActionButtonItem label="Resume">
            <AiOutlineFilePdf className={iconClass} />
          </ActionButtonItem>
        </a>
      </Link>
      <Link href={"/#home"}>
        <a>
          <ActionButtonItem label="Home">
            <AiOutlineHome className={iconClass} />
          </ActionButtonItem>
        </a>
      </Link>
      <Link href={"/#about"}>
        <a>
          <ActionButtonItem label="About">
            <AiOutlineExclamationCircle className={iconClass} />
          </ActionButtonItem>
        </a>
      </Link>
      <Link href={"/#projects"}>
        <a>
          <ActionButtonItem label="Projects">
            <AiOutlineFundProjectionScreen className={iconClass} />
          </ActionButtonItem>
        </a>
      </Link>
      <Link href={"/#contact"}>
        <a>
          <ActionButtonItem label="Contact">
            <AiOutlineContacts className={iconClass} />
          </ActionButtonItem>
        </a>
      </Link>
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
