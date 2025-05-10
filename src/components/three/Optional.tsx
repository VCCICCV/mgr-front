
import useConfigStore from "@/stores/useConfigStore";
import React from "react";

const Option = () => {

    return (
        <div>
            {/* 购买按钮 */}
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
                onClick={() => alert("已锁单,将在30个工作日内开始生产")}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                购买
            </button>
        </div>
    );
};

export default Option;