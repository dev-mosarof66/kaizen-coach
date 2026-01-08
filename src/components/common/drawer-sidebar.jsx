'use client'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SideBar from "./sidebar";
import { cn } from "../../lib/utils";
import { useTranslation } from "../../contexts/translation-context";

const DrawerSidebar = () => {
  const [showDrawerSidebar, setShowDrawerSidebar] = useState(false);
  const { language } = useTranslation();
  const isRTL = language === 'ar';

  return (
    <div className="w-full">
      <div className="relative">
        <div
          onClick={() => setShowDrawerSidebar(true)}
          className="w-fit text-xl cursor-pointer text-gray-400 hover:text-blue-600 transition-all duration-300"
        >
          <FaBars />
        </div>

        <div
          onClick={() => setShowDrawerSidebar(false)}
          className={cn(
            "fixed inset-0 backdrop-blur-sm bg-black/40 transition-opacity duration-300 cursor-pointer",
            showDrawerSidebar ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        />
      </div>

      <div
        className={cn(
          "fixed top-0 h-screen backdrop-blur-sm transition-transform duration-300 z-50",
          isRTL
            ? (showDrawerSidebar ? "right-0 translate-x-0" : "right-0 translate-x-full")
            : (showDrawerSidebar ? "left-0 translate-x-0" : "left-0 -translate-x-full")
        )}
      >
        <SideBar closeDrawer={() => setShowDrawerSidebar(false)}
        />
      </div>
    </div>
  );
};

export default DrawerSidebar;
