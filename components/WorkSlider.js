import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const workSlider = {
  slides: [
    {
      images: [
        {
          title: <Link href={''}>Nirvana - HealthChain</Link>,
          git: <Link href={'https://github.com/srinjoy356/SIH_Drug_Supplychain_Management'} alt=''><FaGithub/></Link>,
          live: <Link href={''}>LIVE PROJECT</Link>,
          path: '/React App - Google Chrome 06-09-2024 02_00_26.jpg',
        },
        {
          title: <Link href={''}>GitHub Clone</Link>,
          git: <Link href={'https://github.com/Sourjya-Saha/GitHub-Clone'}><FaGithub/></Link>,
          live: <Link href={''}>LIVE PROJECT</Link>,
          path: '/1200x640.webp',
        },
        {
          title: <Link href={''}>Zerodha Clone</Link>,
          git: <Link href={'https://github.com/Sourjya-Saha/Zerodha-Clone'}><FaGithub/></Link>,
          live: <Link href={''}>LIVE PROJECT</Link>,
          path: '/cover1PD1_25.jpg',
        },
        {
          title: <Link href={''}>Video Chatting App</Link>,
          git: <Link href={'https://github.com/Sourjya-Saha/Video-Chatting-Website'}><FaGithub/></Link>,
          live: <Link href={''}>LIVE PROJECT</Link>,
          path: '/0_Ocv--MqwwdLj8dcP.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: <Link href={''}>Under Progress</Link>,
          live: <Link href={''}>LIVE PROJECT</Link>,
          path: '/thumb4.jpg',
        },
        {
          title: <Link href={''}>Under Progress</Link>,
          live: <Link href={''}>LIVE PROJECT</Link>,
          path: '/thumb1.jpg',
        },
        {
          title: <Link href={''}>Under Progress</Link>,
          live: <Link href={''}>LIVE PROJECT</Link>,
          path: '/thumb2.jpg',
        },
        {
          title: <Link href={''}>Under Progress</Link>,
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[510px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, imgIndex) => {
                return (
                  <div key={imgIndex} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex rounded-lg items-center justify-center relative overflow-hidden">
                      {/* images */}
                      <Image src={image.path} width={400} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#18132f] via-[#e838cc] to-[#18132f] opacity-0 group-hover:opacity-90 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex flex-col items-center gap-y-1">
                          {/* title part1 */}
                          <div className="md:text-[20px] font-extrabold text-[13px]">{image.title}</div>
                          {/* title part2 */}
                          <div className="md:text-[20px] font-bold text-[13px] flex items-center gap-x-2">{image.git}</div>
                          {/* icon */}
                          <div className="md:text-[14px] font-bold text-[11px] flex items-center mt-1 gap-x-2">{image.live}<BsArrowRight /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
