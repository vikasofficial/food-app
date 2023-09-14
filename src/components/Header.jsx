import { BiSearchAlt2 } from 'react-icons/bi';
import { BiSolidOffer } from 'react-icons/bi';
import { LiaHandsHelpingSolid } from 'react-icons/lia';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Header = () => {

    return (
        <div className="header w-full flex p-4 border-2 border-solid justify-between">
            <div>
                icon
            </div>
            <div className="menu">
                <ul className="flex">
                    <li className="mr-4 cursor-pointer hover:text-blue-600">Bangalore</li>
                    <li className="mr-4 flex cursor-pointer">
                        <BiSearchAlt2 className='relative top-[0.3rem]'/>Search</li>
                    <li className="mr-4 flex cursor-pointer">
                        <BiSolidOffer  className='relative top-[0.3rem]'/>Offers</li>
                    <li className="mr-4 flex cursor-pointer">
                        <LiaHandsHelpingSolid  className='relative top-[0.3rem]'/>Help</li>
                    <li className="mr-4 flex cursor-pointer">
                        <AiOutlineShoppingCart  className='relative top-[0.3rem]'/>Cart</li>
                    <li className="mr-4 flex cursor-pointer">Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;