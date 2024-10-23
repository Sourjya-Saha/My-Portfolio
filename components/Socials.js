
import Link from "next/link";
import { FaGithub , FaInstagram , FaLinkedin , FaTwitter } from 'react-icons/fa'

const Socials = () => {
  return( <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.linkedin.com/in/sourjya-saha-106b42317/'} className=" text-2xl hover:text-accent transition-all duration-300"><FaLinkedin /></Link>
    <Link href={'https://www.instagram.com/_.sourjya._/?next=%2F'} className="text-2xl hover:text-accent transition-all duration-300"><FaInstagram /></Link>
    <Link href={'https://github.com/Sourjya-Saha'} className="text-2xl hover:text-accent transition-all duration-300"><FaGithub /></Link>
    <Link href={'https://x.com/SahaSourjya'} className="text-2xl hover:text-accent transition-all duration-300"><FaTwitter /></Link>
  </div>
  );
};

export default Socials;
