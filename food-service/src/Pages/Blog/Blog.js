import React from 'react';
import useTitle from '../../hooks/UseTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='mt-10 mb-10'>
           <div className=" blog collapse text-center w-4/5 mx-auto ">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <h2 className='text-3xl'>Difference between SQL and NoSQL ?</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <p className='text-2xl'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
            </div>
            <div className="collapse text-center w-4/5 mx-auto">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <h2 className='text-3xl'>What is JWT, and how does it work ?</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <p className='text-2xl'>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                </div>
            </div>
            <div className="collapse text-center w-4/5 mx-auto">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <h2 className='text-3xl'>What is the difference between javascript and NodeJS?</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <p className='text-2xl'>
                    
                    JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
                    </p>
                </div>
            </div>
            <div className="collapse text-center w-4/5 mx-auto">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <h2 className='text-3xl'>How does NodeJS handle multiple requests at the same time??</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <p className='text-2xl'>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;