import React from 'react';
import { FaLaravel } from "react-icons/fa6";
import { BiLogoReact, BiLogoTailwindCss, BiLogoVuejs, BiLogoPhp } from "react-icons/bi";
import { SiNextdotjs, SiLeaflet, SiDjango, SiWordpress, SiLivewire } from "react-icons/si";
import { DiCodeigniter, DiBootstrap, DiJqueryLogo } from "react-icons/di";

const BlogPost = ({ title, image, description, link, icons }) => {
  const iconMap = {
    FaLaravel: FaLaravel,
    SiNextdotjs: SiNextdotjs,
    BiLogoReact: BiLogoReact,
    BiLogoTailwindCss: BiLogoTailwindCss,
    BiLogoVuejs: BiLogoVuejs,
    DiCodeigniter: DiCodeigniter,
    DiBootstrap: DiBootstrap,
    DiJqueryLogo: DiJqueryLogo,
    BiLogoPhp: BiLogoPhp,
    SiLeaflet: SiLeaflet,
    SiDjango: SiDjango,
    SiWordpress: SiWordpress,
    SiLivewire: SiLivewire
  };
  return (
    <li className="blog-post-item">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <figure className="blog-banner-box">
          <img src={image} alt={title} loading="lazy" />
        </figure>
        <div className="blog-content">
          <div className="blog-meta"></div>
          <h3 className="h3 blog-item-title">{title}</h3>
          <p className="blog-text">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="blog-link">{link}</a>
          <div className="icon-container">
            {icons.map((icon, index) => {
              const IconComponent = iconMap[icon];
              return IconComponent && <IconComponent key={index} className="blog-icon" />;
            })}
          </div>
        </div>
      </a>
    </li>
  );
};

export default BlogPost;