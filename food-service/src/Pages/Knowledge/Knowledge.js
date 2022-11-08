import React from 'react';
import img from '../../image/knowledge.jpg';
import img1 from '../../image/knowledge1.jpg';
import img2 from '../../image/knowledge2.jpg';
import './Knowledge.css';
const Knowledge = () => {
    return (
        <div className='p-5'>
           <div className='text-center pt-20 pb-10'>
           <p> Our Blog Content</p>
            <h2 className='text-5xl sm:text-3xl knowledgeTitle font-bold leading-16'>Lets get new knowledge from <br /> our tips and tricks</h2>
           </div>
           <div className='grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2.5'>
           <div className=' knowledgeImg'>
                <div>
                    <img src={img} alt="" />
                    <div className='knowledgeText'>
                        <h2 className='text-4xl mb-5'>
                            Create clean food by own.
                        </h2>
                        <p className='text-2xl mb-5'>We provide food & pantry items to those in need, including thousands of nutritious meals. We are dedicated to addressing food insecurity for homebound seniors. </p>
                        <button className="btn btn-warning text-white text-1xl">Learn More </button>
                    </div>
                </div>
           </div>
           <div className=' knowledgeImg'>
                <div>
                    <img src={img1} alt="" />
                    <div className='knowledgeText'>
                        <h2 className='text-4xl mb-5'>
                        Choose Better Consultant Food
                        </h2>
                        <p className='text-2xl mb-5'>We provide food & pantry items to those in need, including thousands of nutritious meals. We are dedicated to addressing food insecurity for homebound seniors. </p>
                        <button className="btn btn-warning text-white text-1xl">Learn More </button>
                    </div>
                </div>
           </div>
           <div className=' knowledgeImg'>
                <div>
                    <img src={img2} alt="" />
                    <div className='knowledgeText'>
                        <h2 className='text-4xl mb-5'>
                        Grilled Fish Mixing Food
                        </h2>
                        <p className='text-2xl mb-5'>We provide food & pantry items to those in need, including thousands of nutritious meals. We are dedicated to addressing food insecurity for homebound seniors. </p>
                        <button className="btn btn-warning text-white text-1xl">Learn More </button>
                    </div>
                </div>
           </div>
           </div>
        </div>
    );
};

export default Knowledge;