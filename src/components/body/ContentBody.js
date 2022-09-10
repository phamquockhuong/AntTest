import Photoservice from './Photoservice';
import Productservice from './Productservice';
import Handmadeservice from './Handmadeservice';

function ContentBody() {
    return (

        <div className='bg-[#f7f9fc]'>
            <Photoservice />
            <Productservice />
            <Handmadeservice />
        </div>
    );
}

export default ContentBody;