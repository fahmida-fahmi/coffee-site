
const Images = ({image}) => {
    const {img} = image
    return (
        <div >
            <img className='w-full' src={img} alt="" />
        </div>
    );
};

export default Images;