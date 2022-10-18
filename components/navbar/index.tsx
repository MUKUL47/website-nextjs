/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineContacts,
  AiOutlineExclamationCircle,
  AiOutlineFilePdf,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineMenu,
} from "react-icons/ai";
import { useClickedOutside, useIsMobile } from "../../hooks";
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
      className={`${navbarClass} transition-all delay-200 sticky top-0 p-4 z-20 bg-stone-900 text-white shadow-2xl flex justify-between text-base sm:p-4 sm:text-xl ${
        (isMobile && "flex-col") || "items-center"
      }`}
    >
      <div>
        {(isMobile && <p className="font-bold">Mukul Dutt</p>) || (
          <img
            src={"../../assets/profile-pic.jpeg"}
            alt="Mukul Dutt"
            className="rounded-full transition-all delay-100 hover:scale-150 w-10 h-10"
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
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window?.location.pathname || "");
  }, []);
  const iconClass = "block cursor-pointer right-5 select-none text-base";
  return (
    <div
      className={`select-none ${
        (isActive && isMobile && "flex") || "hidden"
      } items-end  sm:flex ${(isMobile && "py-3 flex-col") || "gap-10"}`}
      onClick={(e) => onClick?.(e)}
    >
      <Link href={`/resume`}>
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
      <Link href={`${url}#contact`}>
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
    <div className="p-2 rounded-sm cursor-pointer hover:bg-gray-700 w-full justify-end flex items-center gap-2 sm:p-1">
      {children}
      {label}
    </div>
  );
}
