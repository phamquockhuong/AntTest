function Cartproductitem() {
    return (
        <div className="inline-block py-[2%] cursor-pointer px-[1.75%] w-[80%] md:w-[23%] mx-[1%] md:my-[1%] my-[8%] hover:shadow-[0px_0px_10px_-2px_rgba(0,0,0,0.3)] bg-[#fff]">
            <div className="flex items-center">
                <div className="w-full px-5">
                    <img className='w-full h-auto' src={"/images/A_cart.png"} alt="" />
                </div>
            </div>
            <p className="my-2 text-[18px] text-[rgba(0,0,0,.85)] font-medium">一站式业务接入</p>
            <p className="my-2 text-[rgba(49,70,89,.75)] text-[14px]">在所有需求配置环节事前风险控制和质量控制能力</p>
        </div>
    );
}
export default Cartproductitem;