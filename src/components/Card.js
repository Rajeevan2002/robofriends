import React from 'react';

const Card = (props) =>{
    const {name,email,id}=props;
    return(
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='Robots' src={`https://robohash.org/${id}?150x150`} />
            <div className='container'>
            <h2>{name}</h2>
            <p>{email}</p>    
            </div>
        </div>
    );
}

export default Card;