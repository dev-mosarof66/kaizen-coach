"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { cn } from "../../lib/utils";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useIsMobile } from "../../hooks/use-mobile";

const TabsFilter = ({ tab, setTab, tabs }) => {
    const isMobile = useIsMobile();

    return (
        <Tabs defaultValue={tab} className="w-full flex flex-col gap-4">
            <div className="w-full flex items-center sm:justify-end md:justify-start lg:justify-end overflow-x-auto scrollbar-hidden">
                <TabsList className="p-1 flex gap-1 bg-transparent">
                    {tabs.slice(0, 3).map((tabItem) => (
                        <TabsTrigger
                            key={tabItem}
                            value={tabItem}
                            onClick={() => setTab(tabItem)}
                            className={cn(
                                "text-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow rounded-md px-3 py-1.5 text-sm transition",
                                "border border-gray-700"
                            )}
                        >
                            <span>{tabItem}</span>
                        </TabsTrigger>
                    ))}

                    <TabsTrigger
                        key={tabs[tabs.length - 1]}
                        value={tabs[tabs.length - 1]}
                        onClick={() => setTab(tabs[tabs.length - 1])}
                        className={cn(
                            "text-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow rounded-md px-2 py-1.5 text-sm transition whitespace-nowrap",
                            "border border-gray-700"
                        )}
                    >
                        {isMobile ? <BsThreeDotsVertical /> : tabs[tabs.length - 1]}
                    </TabsTrigger>
                </TabsList>
            </div>
        </Tabs>
    );
};

export default TabsFilter;
