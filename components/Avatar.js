import Image from "next/image";


const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/pf4.png.png'} width={637} height={578} alt="" className="transalate-z-0  w-full h-full"/>
  </div>;
};

export default Avatar;
