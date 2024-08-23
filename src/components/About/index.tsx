import React, { Component } from "react";
import './index.scss';
import profile from "../../Images/aboutus.png"
import Image from 'next/image'
import Category from '../category'

const About = () => {
    return (
        <>                          
                <h2 style={{textAlign: 'center', marginTop: '5%'}}>About Us</h2>
            <div className="about-container">
                <div className="about-img">
                <Image
                        src={profile}
                        // className="image"
                        alt=""
                    />
                </div>
                <div className="about-para">
                    <p style={{ color: '#00152b', fontSize: '16px', fontWeight: '500' }}>Welcome to Cold Stone</p>
                    <h3 className="h3">
                        Homemade Ice Creams For You
                    </h3>
                    <p className="para-abt">
                        An About Us page helps your company make a good first impression, and is critical
                        for building customer trust and loyalty. An About Us page should make sure to cover basic
                        information about the store and its founders, explain the company's purpose and how it
                        differs from the competition, and encourage discussion and interaction.
                        <br /> Ius ferri velit
                        sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.
                        Donec vitae sapien ut libero venenatis faucibus.
                    </p>
                </div>
            </div> 
            <h2 style={{textAlign: 'center', marginTop: '5%'}}>Shop by Category</h2>
            <Category/>
        </>
    )
}
export default About;