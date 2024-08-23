import React, { Component } from "react";
import './index.scss';
import { AiOutlineLike, AiOutlineHeart } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import avatar1 from "../../Images/avatar-4.jpg"
import avatar2 from "../../Images/avatar-3.jpg"
import avatar3 from "../../Images/avatar-5.jpg"
import bg from "../../Images/review.jpg"
import Rating from "../Rating";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Review = () => {
    return (
        <>
            <div className="reviews_main">
                <FormatQuoteIcon className="reviewIcon" />
                <h1>Happy Clients Say</h1>
                <div className="reviews_row">
                    <div className="review-container">
                        <div className="review-header">
                            <Image
                                src={avatar3}
                                alt="Picture of the author"
                                width={65}
                            />
                            <div className="comment-head">
                                <div className="dispaly_flex" >
                                    <h6> Jenny Wilson</h6>
                                </div>
                                <Rating />
                            </div>
                        </div>
                        <p>
                            " Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenatis leo et dictum finibus.
                            Nulla vulputate dolor sit amet tristique dapibus. Gochujang ugh viral, butcher pabst put a bird on it
                            meditation  austin."
                        </p>
                    </div>
                    <div className="review-container">
                        <div className="review-header">
                            <Image
                                src={avatar2}
                                alt="Picture of the author"
                                width={65}
                            />
                            <div className="comment-head">
                                <div className="dispaly_flex" >
                                    <h6> Jenny Wilson</h6>
                                </div>
                                <Rating />
                            </div>
                        </div>
                        <p>
                            "Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenatis leo et dictum finibus.
                            Nulla vulputate dolor sit amet tristique dapibus. Gochujang ugh viral, butcher pabst put a bird on it
                            meditation  austin."
                        </p>
                    </div>
                    <div className="review-container">
                        <div className="review-header">
                            <Image
                                src={avatar1}
                                alt="Picture of the author"
                                width={65}
                            />
                            <div className="comment-head">
                                <div className="dispaly_flex" >
                                    <h6> Jenny Wilson</h6>
                                </div>
                                <Rating />
                            </div>
                        </div>
                        <p>
                            " Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenatis leo et dictum finibus.
                            Nulla vulputate dolor sit amet tristique dapibus. Gochujang ugh viral, butcher pabst put a bird on it
                            meditation  austin."
                        </p>
                    </div>
                </div>
                <Image
                    src={bg}
                    alt="Picture of the author"
                width={1000}
                />
            </div>

        </>
    )
}
export default Review;