import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from '../assets/fotor-ai-20240829181556.jpg';
import image2 from '../assets/fotor-ai-20240829181657.jpg';
import image3 from '../assets/fotor-ai-2024082918172.jpg';
import image4 from '../assets/fotor-ai-2024082918174.jpg';
import image5 from '../assets/fotor-ai-2024082918177.jpg';
import image6 from '../assets/fotor-ai-2024082918179.jpg';

const Header = () => {
  return (
    <div className="dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-600 dark:to-gray-500 dark:text-white p-0 m-0">
      <h1 className="text-3xl text-center mb-2 mt-4">Banner Section</h1>
      <h3 className="text-center text-xl mb-6 text-lime-700 dark:text-lime-300">
        Experience the beauty and diversity of Bangladesh through a captivating visual journey.<br />
        Our header section showcases a stunning collection of images, from serene landscapes and bustling cityscapes<br />
        to hidden gems and cultural landmarks. Each slide invites you to discover the unique charm of this enchanting destination.
      </h3>

      {/* Swiper Container */}
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0} // Ensure no gaps
          slidesPerView={1} // One slide at a time
          loop={true} // Infinite scrolling
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          className="w-full"
        >
          <SwiperSlide className="w-full">
            <img
              src={image1}
              alt="Slide 1"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <img
              src={image2}
              alt="Slide 2"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <img
              src={image3}
              alt="Slide 3"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <img
              src={image4}
              alt="Slide 4"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <img
              src={image5}
              alt="Slide 5"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <img
              src={image6}
              alt="Slide 6"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
