
import Link from "next/link";
import { FaGithub , FaInstagram , FaLinkedin , FaTwitter } from 'react-icons/fa'

const Socials = () => {
  return( <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className=" text-2xl hover:text-accent transition-all duration-300"><FaLinkedin /></Link>
    <Link href={''} className="text-2xl hover:text-accent transition-all duration-300"><FaInstagram /></Link>
    <Link href={''} className="text-2xl hover:text-accent transition-all duration-300"><FaGithub /></Link>
    <Link href={''} className="text-2xl hover:text-accent transition-all duration-300"><FaTwitter /></Link>
  </div>
  );
};

export default Socials;
