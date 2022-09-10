import TitleItem from './../TitleItem';
import Cartphotoservice from './Cartphotoservice';

function Photoservice() {
    return (
        <div className='text-left max-w-[1200px] m-auto  pb-14'>
            <TitleItem title="图像在线服务" description="你可以直接快速接入图像能力" />
            <Cartphotoservice /><Cartphotoservice /><Cartphotoservice /><Cartphotoservice /><Cartphotoservice /><Cartphotoservice /><Cartphotoservice />
        </div>
    );
}

export default Photoservice;