"use client";

import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Logo from "./Logo";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [closeMenu]);

  return (
    <>
      <button onClick={openMenu}>
        <MenuIcon />
      </button>
      {open &&
        createPortal(
          <>
            <div className="md:hidden fixed text-black z-50 inset-0 p-4">
              <div className="backdrop absolute inset-0 z-40 bg-purple bg-opacity-50 backdrop-blur-[3px]" />
              <div className="drawer absolute inset-0 w-full bg-white z-50  flex flex-col ">
                <header className="px-4   py-8   flex justify-between items-center">
                  <Link href="/">
                    <Logo />
                  </Link>
                  <button onClick={closeMenu}>
                    <X />
                  </button>
                </header>
                <div className="flex-1 px-7 overflow-auto">
                  <ul className="flex flex-col text-sm  gap-6 ">
                    <li>
                      <Link href="/shop-all">Shop all</Link>
                    </li>
                    <li>
                      <Link href="/latest-arrivals">Latest arrivals</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
};
export default MobileMenu;
