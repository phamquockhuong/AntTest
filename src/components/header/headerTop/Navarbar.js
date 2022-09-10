import './../../../App.css';
import Sidebar from './../../slider/Slidebar';
import ButtonCustomer from './../../button/ButtonCustomer';
import { useState } from 'react'
import { BsList, BsXLg } from "react-icons/bs";

function Navarvar() {

    const [active, setActive] = useState(true);
    const [activeMenu, setActiveMenu] = useState(true);
    const [menu, setMenu] = useState(false);

    const handleToggleMenuMobile = () => {
        setMenu(e => !e)
    }
    const handleToggleMenu = () => {
        setActiveMenu(pre => !pre)
    }
    const handleShow = () => {
        setActive(false)
    }
    const handleHide = () => {
        setActive(true)
    }

    const _CustomClassNameActive = active ? 'cursor-pointer p-3 mx-3 md:mx-16 text-[#2f54eb] text-[24px] border-b-4 border-b-4 border-[#2f54eb]' : 'cursor-pointer p-3 mx-3 md:mx-16 text-[24px]';
    const _CustomClassName = active ? 'cursor-pointer p-3 mx-3 md:mx-16 text-[24px]' : 'cursor-pointer p-3 mx-3 md:mx-16 text-[#2f54eb] text-[24px] border-b-4 border-b-4 border-[#2f54eb]';

    return (
        <>
            <div className=' bg-hero-pattern'>
                <div className='max-w-[1200px] m-auto md:h-[108vh] h-auto'>
                    <div className="w-full flex justify-between px-6 md:px-1">
                        <div className='py-3'>
                            <img className='w-[110px]' src={"/images/A_logo.png"} alt="" />
                        </div>
                        <div className='md:px-5 hidden md:block'>
                            <ul className='flex text-[#333] '>
                                <li onClick={() => handleToggleMenu(activeMenu)} className={`p-6 cursor-pointer  ${activeMenu && 'text-[#2f54eb] border-b-2 border-[#2f54eb]'}`}>订订群</li>
                                <li onClick={() => handleToggleMenu(activeMenu)} className={`p-6 cursor-pointer ${!activeMenu && 'text-[#2f54eb] border-b-2 border-[#2f54eb]'}`}>帮助中心</li>
                            </ul>
                        </div>
                        <div className='block md:hidden flex items-center'>
                            {
                                menu ? <BsXLg onClick={() => handleToggleMenuMobile(menu)} className='text-[16px] cursor-pointer' /> : <BsList onClick={() => handleToggleMenuMobile(menu)} className='text-[24px] cursor-pointer' />
                            }
                        </div>
                    </div>
                    {
                        menu &&
                        <div className='md:hidden block px-6 py-3 bg-[#fff] w-full absolute z-50 text-left'>
                            <ul className='text-[#314659] '>
                                <li onClick={() => handleToggleMenu(activeMenu)} className={`py-3 cursor-pointer  `}>订订群</li>
                                <li onClick={() => handleToggleMenu(activeMenu)} className={`py-3 cursor-pointer `}>帮助中心</li>
                            </ul>
                        </div>
                    }

                    <div className="w-full block md:flex justify-between relative md:top-[10%]">
                        <div className='md:w-[45%] w-full md:text-left text-center md:pt-[10%] text-left'>
                            <p className='md:text-[48px] text-[40px] text-[#5f9bf1] mb-[8px]'>产品名</p>
                            <p className='md:text-[24px] text-[20px] font-medium text-[#333] mb-[22px] md:mb-[26px]'>产品标语介绍</p>
                            <p className=' md:text-[18px] text-[16px] text-[#666] mb-[50px]'>产品的详细说明，如是什么东西之类的文字</p>
                            <ButtonCustomer title="开始使用" classcustom="hover:delay-150 hover:shadow-xl hover:shadow-blue-500/40 transition transform hover:-translate-y-[5px] motion-reduce:transition-none motion-reduce:hover:transform-none bg-btn-custom text-white py-2 px-10 rounded-full border-transparent" />

                        </div>
                        <div className='md:w-[55%] w-full md:pt-1 pt-10'>
                            <div className='w-full h-full'>
                                <img className='w-full h-auto' src={"/images/A_-wAhRYnWQscAAAAAAAAAAABkARQnAQ.png"} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full  relative bg-white px-2 py-10'>
                    <div className="flex justify-center text-[#333]">
                        <span onClick={handleHide} className={_CustomClassNameActive}>服务指标</span>
                        <span onClick={handleShow} className={_CustomClassName}>服务指标</span>
                    </div>
                    <div >
                        <Sidebar show={active} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navarvar;