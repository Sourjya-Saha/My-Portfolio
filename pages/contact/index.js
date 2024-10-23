import  {motion} from 'framer-motion'
import Image from "next/image";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import WorkSlider from '../../components/WorkSlider'
import { fadeIn } from '../../variants';
import { SiGmail } from 'react-icons/si';
import { FaPhoneAlt } from 'react-icons/fa';
const Contact = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
  <Circles/>
  <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row gap-x-8">
      {/*text */}
      <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-2 xl:mb-0">
        <motion.h2
        variants={fadeIn('up' , 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h2 xl:mt-8">
          Contact Me <span className="text-accent">. </span>
        </motion.h2>
        <motion.p  variants={fadeIn('up' , 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden' className=" mb-16 max-w-[400px] mx-auto lg:mx-0">
         <div className='font-bold  flex items-center gap-x-4'><SiGmail className='text-2xl text-accent'/>  - sourjya.saha76@gmail.com</div><br/>
         <div className='font-bold flex items-center gap-x-4'><FaPhoneAlt className='text-2xl  text-accent'/> - 9836180838</div>
        </motion.p>
      </div>
    </div>
  </div>
<Bulb/>
</div>
);
};

export default Contact
