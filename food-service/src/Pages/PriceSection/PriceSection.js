import React from 'react';
import './PriceSection.css';
const PriceSection = () => {
    return (
        <div className='p-5 mb-16'>
           <div className='text-center pt-20 pb-10'>
           <p>Membership Catering</p>
            <h2 className='text-5xl sm:text-3xl knowledgeTitle font-bold leading-16'>Lets join our membership catering & <br /> get healthy life</h2>
           </div>
           <div className='grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2.5'>
               <div className='simplePrice text-center mb-10 '>
                <h2 className='text-2xl font-bold mb-5'> 1 Monthly </h2>
                <p className='mb-1 text-2xl'> 1 month full catering daily </p>
                    <p className='mb-3 text-2xl'>subscription nutrition food</p>
                   <div className='mb-32 mt-5'>
                   <span className='price block'><span className='absolute left-28 font-bold text-2xl'>$</span> <strong className='text-5xl priceMoney'>88.9</strong><span className='font-bold text-2xl'>Month</span></span>
                   </div>
                   <p className='mb-2 text-2xl'>Free Choice Menu</p>
                   <p className='mb-2 text-2xl'>Middle Membership</p>
                   <p className='mb-16 text-2xl'>24 / 7 Consultation</p>
                   <button className="btn text-white hover:bg-slate-50 hover:text-black btn-warning">Get Membership</button>
                </div>
                <div className='simplePrice text-center selected mb-10'>
                <h2 className='text-4xl font-bold mb-5'> 3 Monthly </h2>
                <p className='mb-1 text-2xl'> 3 month full catering daily </p>
                    <p className='mb-3 text-2xl'>subscription nutrition food</p>
                   <div className='mb-32 mt-5'>
                   <span className='price block'><span className='absolute left-28 font-bold text-2xl'>$</span> <strong className='text-5xl priceMoney'>99.9 </strong><span className='font-bold text-2xl'>Month</span></span>
                   </div>
                   <p className='mb-2 text-2xl'>Middle Membership</p>
                   <p className='mb-2 text-2xl'>Free Choice Menu</p>
                   <p className='mb-16 text-2xl'>24 / 7 Consultation</p>
                   <button className="btn text-white hover:bg-slate-50 hover:text-black btn-warning">Get Membership</button>
                </div>
                <div className='simplePrice text-center mb-10'>
                <h2 className='text-2xl font-bold mb-5'> 6 Monthly </h2>
                <p className='mb-1 text-2xl'> 6 month full catering daily </p>
                    <p className='mb-3 text-2xl'>subscription nutrition food</p>
                   <div className='mb-32 mt-5'>
                   <span className='price block'><span className='absolute left-28 font-bold text-2xl'>$</span> <strong className='text-5xl priceMoney'>100 </strong><span className='font-bold text-2xl'>Month</span></span>
                   </div>
                   <p className='mb-2 text-2xl'>Free Choice Menu</p>
                   <p className='mb-2 text-2xl'>Middle Membership</p>
                   <p className='mb-16 text-2xl'>24 / 7 Consultation</p>
                   <button className="btn text-white hover:bg-slate-50 hover:text-black btn-warning">Get Membership</button>
                </div>
           </div>
        </div>
    );
};

export default PriceSection;