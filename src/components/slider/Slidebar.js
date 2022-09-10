import React from "react";
import "./../../style/SlideDrawer.css";
import Serviceindex from './Serviceindex';

const Sidebar = ({ show }) => {
    let drawerClasses = show ? "open" : "side-drawer";
    const _data = [
        {
            title: '模型数据',
            total: '111',
        },
        {
            title: '模型数据',
            total: '1.17',
        },
        {
            title: '模型数据',
            total: '2.10',
        },
    ];

    return (
        <div className={drawerClasses}>
            <div className="md:flex block justify-evenly px-2 py-5 md:py-16">
                {_data.map((item) => (
                    <Serviceindex key={item.toString()} props={item} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;