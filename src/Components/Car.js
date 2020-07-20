import React from 'react';
import Image from "../Images/Smoggy.gif";
import useWebAnimations from '@wellyshen/use-web-animations' ;
import './Car.css';
const Car = () => {
    const CarAnimate = useWebAnimations({
        keyframes: {
            transform: ["translateX(0)", "translateX(100%)"],
        },
        timing: {
            delay: 1000, 
            duration: 9000, 
            iterations: Infinity, 
            direction: "normal", 
            easing: "ease-in-out", 
        }
    });

    setInterval(async () => {
        const animation = CarAnimate.getAnimation()
        if (animation) {
            if (animation.playbackRate > 1) {
                animation.updatePlaybackRate(animation.playbackRate * 0.7)
            }
        }
    }, 1500);

    const handleClick = () => {
        const animation = CarAnimate.getAnimation()
        animation.updatePlaybackRate(animation.playbackRate * 1.3)
    }
   

    return (
        <div onClick={handleClick}  className="style">
            <img src={Image} alt=""  ref={CarAnimate.ref}/>
        </div>
    )
}


export default Car;