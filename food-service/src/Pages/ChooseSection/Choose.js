import React from 'react';
import './Choos.css';
const Choose = () => {
    return (
        <div className='mt-20'>
          <div className='text-center w-50 mb-10'>
            <h2 className='text-3xl'>Why choose my food</h2>
            <p >You choose for me because my food is very health & diet.I make my food very clean, fresh & healthy.</p>
          </div>

           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center choosText lg:text-left w-2/4">
        <p className='text-2xl mb-5'>Our professionals</p>
      <h1 className='text-5xl mb-5'>
      I have professionals <br />
       healthy food cooking & <br /> diet consultant
      </h1>
      <p className='text-2xl'>
      food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy
      </p>
    </div>
    <div className=" w-2/4">
    <iframe width="600" height="400" src="https://www.youtube.com/embed/l1yN0KUHgoc?controls=0&amp;start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
    </div>
  </div>
</div> 
       
    );
};

export default Choose;