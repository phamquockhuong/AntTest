
function Carttphotoservice() {
    return (
        <div className="inline-block py-[7%] md:py-[2%] md:mx-[1%] cursor-pointer px-[7%] md:px-[1.75%] hover:-translate-y-[5px] md:w-[23%] w-90% mx-[5%] my-[3.5%] md:my-[1%] shadow-[0px_0px_10px_-2px_rgba(0,0,0,0.3)] bg-[#f7f9fc]">
            <div className="flex items-center">
                <div className="w-6">
                    <img className='w-full h-auto' src={"/images/e_list.svg"} alt="" />
                </div>
                <span className="mx-2 text-[#314659]">身份证 chuc nang moi</span>
                <span className="mx-2 text-[#314659]">身份证 thay doi</span>
            </div>

            <p className="my-2 text-[rgba(49,70,89,.75)]">识别身份证正反面姓名、身份证号、发证机关等相关信息</p>
        </div>
    );
}

export default Carttphotoservice;