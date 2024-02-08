import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.scss';
import pic1 from '../../assets/images/pexels-jeshootscom-1040159.jpg'
import pic2 from '../../assets/images/curtains.jpg'
import pic3 from '../../assets/images/us.jpg'


export const Slideshow = () => {
    const images = [
       pic1, pic2, pic3
    ];

    return (
        <Slide >
            <div className="each">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                   
                </div>
            </div>
            <div className="each">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                  
                </div>
            </div>
            <div className="each">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                 
                </div>
            </div>
        </Slide>
    );
};
