
import TitleItem from './../TitleItem';
import Cartproductitem from './Cartproductitem';

function Productservice() {
    return (
        <div className='bg-[#fff]'>
            <div className=' max-w-[1200px] m-auto pb-14'>
                <TitleItem title="产品与服务" />
                <Cartproductitem /><Cartproductitem /><Cartproductitem /><Cartproductitem />
            </div>
        </div>
    );
}

export default Productservice;