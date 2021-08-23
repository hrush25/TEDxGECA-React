import React from 'react'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            
                {/* SVGs */}
                <div className="tagline__svgs"> 
                <img src="Group 30.svg"/>
                </div>

                {/* Opportunity in Adversity */}
            <div className="tagline__text"> 
                <img src="OPPORTUNITY IN ADVERSITY.svg"/>
                </div>

            {/* Top left dotted rectangle */}
            <div className="topleft__rect">
                
                <img src="TopLeftMatrixCircle.svg" />
                
            </div>


            {/* Date & Location */}
            <div className="locationDate__text"> 
                <div className="location__text">
                <img src="location.svg"/>
                </div>
                
                <div className="date__text">
                <img src="date.svg"/>
            </div>

            <div className="dotMatrix_bottom">
            <img src="dotMatrix2.svg"/>
            </div>

            </div>

            {/* 3 red dots */}

            <div className="redDots" >
                <img src="verticle3Dots.svg" />
            </div>

            {/* right half-circle */}
            <div className="right__matrix">

                <div className="Bottom_dotMatrix">
                    <img src="BottomRightMatrix.svg" />
                </div>

                <div className="side_dotMatrix">
                    <img src="Group 13.svg" />
                </div> 
            </div>
            
        </div>
    )
}

export default Home;
