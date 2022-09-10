

function Footertop() {
    return (

        <div className='bg-[#001529] text-center md:text-left py-16 px-5 block md:flex justify-between text-[#999] text-left'>
            <div className="w-full md:w-[33%] px-5 py-5 md:py-1">
                <div className="w-[110px] md:m-0 my-2 m-auto">
                    <img className='w-full h-auto' src={"/images/A_Logoblack.png"} alt="" />
                </div>
                <p className="text-[13px]">蚂蚁金服计算机视觉平台</p>
            </div>
            <div className="w-full md:w-[33%]  px-5 py-5 md:py-1">
                <p className="text-[24px] mb-5">
                    联系我们
                </p>
                <div className="w-[140px] md:m-0 my-2 m-auto">
                    <img className='w-full h-auto' src={"/images/A_QR.png"} alt="" />
                    <p className="text-[15px] mt-5 hover:text-[#2f54eb]"><a href="#">图鹰对接答疑钉钉群</a></p>
                    <p className="text-[15px] hover:text-[#2f54eb]"><a href="#">联系我们</a></p>
                </div>
            </div>
            <div className="w-full md:w-[33%]  px-5 py-5 md:py-1">
                <p className="text-[24px] mb-5">
                    资源
                </p>
                <div className="w-[140px] md:m-0 my-2 m-auto ">
                    <p className="text-[15px] my-2 hover:text-[#2f54eb]"><a href="#">Ant Design</a></p>
                    <p className="text-[15px] my-2 hover:text-[#2f54eb]"><a href="#">Ant Motion</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footertop;