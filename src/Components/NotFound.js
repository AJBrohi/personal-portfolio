import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/notFound.jpg';

const NotFound = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center' ,marginTop: '50px' }}>
                <img src={notFound} style={{width: '50%', height: '550px'}} alt="" />
                <Link to="/">
                    <button style={{marginTop:'30px', borderRadius:'10px'}}>Back To Home</button>
                </Link>
            </div>


        </>
    );
};

export default NotFound;