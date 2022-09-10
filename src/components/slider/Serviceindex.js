import React from "react";

const Serviceindex = ({ props }) => {
    return (
        <div className="md:py-1 py-3">
            <p className="text-[48px] text-[#2f54eb] font-semibold">{props.total}<span className="text-[16px] text-[#2f54eb] font-normal">万</span></p>
            <p className="text-[20px] text-[#314659]">{props.title}</p>
        </div>
    );
};

export default Serviceindex;