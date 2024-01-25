import React, { useEffect, useRef } from 'react';
import '../assets/Style/Carousel.css'

export const CocktailsImg = [
    {
        id: "1",
        Url: "https://app.mibararts.com/_next/image?url=https%3A%2F%2Fbararts.s3.amazonaws.com%2FCocktails%2FManhattan.png&w=1920&q=75",
    },
    {
        id: "2",
        Url: "https://app.mibararts.com/_next/image?url=https%3A%2F%2Fbararts.s3.amazonaws.com%2FCocktails%2FWhiskey%2BSour.png&w=1920&q=75",
    },
    {
        id: "3",
        pname: "Mint-Julep",
        Url: "https://app.mibararts.com/_next/image?url=https%3A%2F%2Fbararts.s3.amazonaws.com%2FCocktails%2FMint%2BJulep.png&w=1920&q=75",
    },
    {
        id: "4",
        Url: "https://app.mibararts.com/_next/image?url=https%3A%2F%2Fbararts.s3.amazonaws.com%2FCocktails%2FBoulevadier.png&w=1920&q=75",

    },
    {
        id: "5",
        Url: "https://app.mibararts.com/_next/image?url=https%3A%2F%2Fbararts.s3.amazonaws.com%2FCocktails%2FSazerac.png&w=1920&q=75",

    },
    {
        id: "6",
        Url: "https://app.mibararts.com/_next/image?url=https%3A%2F%2Fbararts.s3.amazonaws.com%2FCocktails%2FOld%2BFashioned.png&w=1920&q=75",
    },
    {
        id: "7",
        Url: "https://app.mibararts.com/_next/image?url=https%3A%2F%2Fbararts.s3.amazonaws.com%2F1703069084915-41.png.webp&w=1920&q=75",
    },
    {
        id: "8",
        pname: "Mint-Julep",
        Url: "https://app.mibararts.com/_next/image?url=https%3A%2F%2Fbararts.s3.amazonaws.com%2FCocktails%2FMint%2BJulep.png&w=1920&q=75",
    },
    {
        id: "9",
        Url: "https://app.mibararts.com/_next/image?url=https%3A%2F%2Fbararts.s3.amazonaws.com%2FCocktails%2FOld%2BFashioned.png&w=1920&q=75",
    },
]

const Carousel = () => {
    const firstBox = useRef(null);
    let intervalId;

    useEffect(() => {
        startAutoplay();
        return () => clearInterval(intervalId);
    }, [])

    const startAutoplay = () => {
        // Set an interval to scroll to the next image every 3 seconds (adjust as needed)
        intervalId = setInterval(() => {
            nextImage();
        }, 3000); // Adjust the interval duration (in milliseconds) as needed
    };


    const FirstCarouselNext = () => {
        let width = firstBox.current.clientWidth;
        firstBox.current.scrollLeft = firstBox.current.scrollLeft + width;
    };

    const FirstCarouselPrev = () => {
        let width = firstBox.current.clientWidth;
        firstBox.current.scrollLeft = firstBox.current.scrollLeft - width;
    };

    const handleMouseEnter = () => {
        // Stop autoplay when mouse enters the carousel
        clearInterval(intervalId);
    };

    const handleMouseLeave = () => {
        // Restart autoplay when mouse leaves the carousel
        startAutoplay();
    };

    return (
        <>
            <h1>hello  i am carousel</h1>

            <div className='CarouselsMainParent'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className='FirstChild' ref={firstBox}>
                    {CocktailsImg.map((item) => (
                        <div key={item.Url} className='ImgSection'>
                            <img src={item.Url} alt='not found' />
                        </div>
                    )
                    )}
                </div>
                <button className='NextBtn' onClick={FirstCarouselNext}>Next</button>
                <button className='PreviousBtn' onClick={FirstCarouselPrev}>Pre</button>
            </div>
        </>
    )
}

export default Carousel
