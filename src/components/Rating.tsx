"use client"; // Add this line at the top of your file

import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { AiOutlineStar } from "react-icons/ai";

const Rating: React.FC = () => {
    // const ratingChanged = (rating: number) => {
    //     alert(`you gave ${rating} star for us`)
    // }

    return (
        <div>
            <ReactStars 
                color='#f17125' 
                size={20} 
                isHalf={true} 
                count={5} 
                // onChange={ratingChanged}
            />
        </div>
    );
}

export default Rating;
