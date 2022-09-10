import React from "react";

const TitleItem = (props) => {
    return (
        <div className=" py-12 text-center">
            <p className="text-[32px] text-[#314659] my-5">{props.title}</p>
            <p className="text-[14px] text-[#314659] mb-2">{props.description}</p>
        </div>
    );
};

export default TitleItem;