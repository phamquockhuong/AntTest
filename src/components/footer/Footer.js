import Footerbottom from './Footerbottom';
import Footertop from './Footertop';

function Footer() {
    return (
        <div className='bg-[#001529] '>
            <div className='max-w-[1200px] m-auto'>
                <Footertop />
                <Footerbottom />
            </div>
        </div>
    );
}

export default Footer;