import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaVimeoV } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) icon from react-icons/fa6
import { motion } from "framer-motion";

const SocialBar: React.FC = () => {
  const socials = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaXTwitter />, link: "https://twitter.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
    { icon: <FaVimeoV />, link: "https://vimeo.com" },
  ];

  return (
    <div className="w-full bg-[#25282a] py-3 flex justify-start items-start space-x-6 ps-20">
      {socials.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#fff" }}
          className="text-gray-300 text-xl transition-colors duration-300 hover:text-white"
        >
          {item.icon}
        </motion.a>
      ))}
      
    </div>
  );
};

export default SocialBar;
