import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to transparent bottom-0 z-20" />    
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="https://cdn.pixabay.com/photo/2017/07/30/23/46/banner-2556006_1280.png" alt="" />
                </div>

                <div>
                    <img loading="lazy" src="https://www.maxpixel.net/static/photo/1x/Bunting-Colorful-Banners-Party-Celebration-Garland-6081244.png"  alt="" />
                </div>

                <div>
                    <img loading="lazy" src="https://p1.pxfuel.com/preview/457/615/827/coming-soon-coming-soon-message.jpg"  alt="" height="50"/>
                </div>

            </Carousel>

        </div>
    )
}

export default Banner
