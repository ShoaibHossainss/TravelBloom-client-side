import image1 from '../assets/fotor-ai-20240829181556.jpg'
import image2 from '../assets/fotor-ai-20240829181657.jpg'
import image3 from '../assets/fotor-ai-2024082918172.jpg'
import image4 from '../assets/fotor-ai-2024082918174.jpg'
import image5 from '../assets/fotor-ai-2024082918177.jpg'
import image6 from '../assets/fotor-ai-2024082918179.jpg'

const Header = () => {
    return (
<div className="dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-600 dark:to-gray-500 dark:text-white">
  <h1 className="text-3xl text-center mb-2 mt-4">
    Banner Section
  </h1>
  <h3 className="text-center text-xl mb-6 text-lime-700 dark:text-lime-300">
    Experience the beauty and diversity of Bangladesh through a captivating visual journey.<br />
    Our header section showcases a stunning collection of images, from serene landscapes and bustling cityscapes<br />
    to hidden gems and cultural landmarks. Each slide invites you to discover the unique charm of this enchanting destination.
  </h3>
  <div className="carousel w-full rounded-2xl">
    <div id="slide1" className="carousel-item relative w-full">
      <img src={image1} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide6" className="btn btn-circle dark:bg-gray-600 dark:text-white">❮</a>
        <a href="#slide2" className="btn btn-circle dark:bg-gray-600 dark:text-white">❯</a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <img src={image2} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle dark:bg-gray-600 dark:text-white">❮</a>
        <a href="#slide3" className="btn btn-circle dark:bg-gray-600 dark:text-white">❯</a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <img src={image3} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle dark:bg-gray-600 dark:text-white">❮</a>
        <a href="#slide4" className="btn btn-circle dark:bg-gray-600 dark:text-white">❯</a>
      </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
      <img src={image4} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle dark:bg-gray-600 dark:text-white">❮</a>
        <a href="#slide5" className="btn btn-circle dark:bg-gray-600 dark:text-white">❯</a>
      </div>
    </div>
    <div id="slide5" className="carousel-item relative w-full">
      <img src={image5} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle dark:bg-gray-600 dark:text-white">❮</a>
        <a href="#slide6" className="btn btn-circle dark:bg-gray-600 dark:text-white">❯</a>
      </div>
    </div>
    <div id="slide6" className="carousel-item relative w-full">
      <img src={image6} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide5" className="btn btn-circle dark:bg-gray-600 dark:text-white">❮</a>
        <a href="#slide1" className="btn btn-circle dark:bg-gray-600 dark:text-white">❯</a>
      </div>
    </div>
  </div>
</div>

    );
};

export default Header;