import React from 'react';

const Quality = ({quality}) => {
    const {img,id,title,para} = quality
    return (
        <div className='py-14'>
            <img src={img} alt="" />
            <h1 className='text-amber-950 family text-4xl py-4'>{title}</h1>
            <p className='text-stone-950 text-base text-base family1'>{para}</p>
        </div>
    );
};

export default Quality;