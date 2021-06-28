import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative ">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"></div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://c.ndtvimg.com/2020-06/secjl0go_hrithik_625x300_03_June_20.jpg?downsize=360:*"
            alt=""
            className="object-contain h-40"
          />
          <h1>I LOVE U MY PRINCESS</h1>
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
