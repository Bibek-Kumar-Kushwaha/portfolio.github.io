import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import { RiGithubFill } from 'react-icons/ri';

export const iconList = [
    {
      name: 'Facebook',
      className: 'text-[30px] md:text-[50px] text-blue-600 w-[65%]',
      icon: <FaFacebook />,
      link: 'https://www.facebook.com/bibek.kushwaha.01?mibextid=ZbWKwL',
    },
    {
      name: 'GitHub',
      className: 'text-[30px] md:text-[50px] text-black w-[90%]',
      icon: <RiGithubFill />,
      link: 'https://github.com/Bibek-Kumar-Kushwaha',
    },
    {
      name: 'WhatsApp',
      className: 'text-[30px] md:text-[50px] text-green-600 w-[60%]',
      icon: <FaWhatsappSquare />,
      link: 'https://api.whatsapp.com/qr/2XC64T5AXEFEJ1?autoload=1&app_absent=0',
    },
    {
      name: 'LinkedIn',
      className: 'text-[30px] md:text-[50px] text-blue-600 w-[70%]',
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/bibek-kumar-kushwaha-993942280/',
    },
    {
      name: 'Twitter',
      className: 'text-[30px] md:text-[50px] text-black-600 w-[90%]',
      icon: <FaXTwitter />,
      link: 'https://twitter.com/BibekKumarKush3?t=zmPNzVnoL9h4dmMS-9RfEg&s=09',
    },
  ];