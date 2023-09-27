import React, { useState } from "react";
import "./switchTabs.css";
import { Link } from "react-router-dom";

const SwitchTabs = () => {
    const [endpoint, setEndpoint] = useState("phone");
    const data = ["Phone", "Email"]
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);
    const onTabChange = (tab) => {
        (tab === "Phone" ? "phone" : "email");
    }

    const activeTab = (tab, index) => {
        setLeft(index * 170);
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);
        onTabChange(tab, index);
    };

    return (
        <div className="w-full">

            <div className="switchingTabs bg-[#F3C1A9] mb-3 py-1 rounded-lg ">
                <div className="tabItems ">
                    {/* {console.log(data)} */}
                    {data?.map((tab, index) => (
                        <span
                            key={index}
                            className={`tabItem font-bold text-base  ${selectedTab === index ? "active" : ""
                                }`}
                            onClick={() => activeTab(tab, index)}
                        >
                            {tab}
                        </span>
                    ))}
                    <span className="movingBg" style={{ left }} />
                </div>
            </div>
            <div className="flex items-center relative mb-3">
                <input type="text" className="switchInput w-full bg-transparent border-solid border-2 border-white  rounded-lg px-3 py-2 text-white focus:outline-none" placeholder={selectedTab === 0 ? "Phone" : "Email"} />
                <Link to="" className="absolute end-2 bg-[#FFF5EF] text-[#FA6F2C] font-bold text-sm px-6 py-1 rounded-lg">Get Link</Link>
            </div>
        </div>

    );
};

export default SwitchTabs;