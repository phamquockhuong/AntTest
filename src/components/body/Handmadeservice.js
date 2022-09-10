import TitleItem from './../TitleItem';
import Carthandmade from './Carthandmade';
import ButtonCustomer from './../button/ButtonCustomer';

function Handmadeservice() {
    return (
        <div className='bg-handmade'>
            <div className=' max-w-[1200px] m-auto'>
                <TitleItem title="产品与服务" description="流程简单清晰，快速响应需求" />
                <div className='md:flex block justify-between'>
                    <Carthandmade /><Carthandmade /><Carthandmade /><Carthandmade />
                </div>
            </div>
            <div className='pb-14 md:pt-1 pt-6'>
                <ButtonCustomer title="立即体验" classcustom="hover:delay-150 hover:shadow-xl hover:shadow-blue-500/40 transition transform hover:-translate-y-[5px] motion-reduce:transition-none motion-reduce:hover:transform-none bg-btn-handmade text-white py-2 px-10 rounded-full border-transparent" />
            </div>
        </div>
    );
}

export default Handmadeservice;