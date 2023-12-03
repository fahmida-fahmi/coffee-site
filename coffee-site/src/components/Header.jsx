import logo from '../images/more/logo1.png'
const Header = () => {
    return (
        <div className='headerBgImg p-5 flex justify-center items-center sticky top-0 z-10'>

            <img src={logo} className='w-16' alt="" />
            <h1 className="text-white family text-5xl ps-5">Espresso Emporium</h1>
        </div>
    );
};

export default Header; 