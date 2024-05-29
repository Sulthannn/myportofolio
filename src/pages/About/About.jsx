/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Service from "./Service";

const techData = [
  {
    icon: "../images/html.png",
    description: "HTML"
  },
  {
    icon: "../images/css.png",
    description: "CSS"
  },
  {
    icon: "../images/js.png",
    description: "JavaScript"
  },
  {
    icon: "../images/php.webp",
    description: "PHP"
  },
  {
    icon: "../images/React.webp",
    description: "React.js"
  },
  {
    icon: "../images/next.svg",
    description: "Next.js"
  },
    {
    icon: "../images/vue.webp",
    description: "Vue.js"
  },
  {
    icon: "../images/laravel-2.svg",
    description: "Laravel"
  },
  {
    icon: "../images/ci.png",
    description: "CodeIgniter"
  },
  {
    icon: "../images/dj.png",
    description: "Django"
  },
  {
    icon: "../images/boots.png",
    description: "Bootstrap"
  },
  {
    icon: "../images/tailwind.svg",
    description: "Tailwind"
  },
  {
    icon: "../images/wp.png",
    description: "WordPress"
  }
];

const toolsData = [
  {
    icon: "../images/api.png",
    description: "API"
  },
  {
    icon: "../images/git.png",
    description: "Git"
  },
  {
    icon: "../images/npm.png",
    description: "NPM"
  },
  {
    icon: "../images/sql.png",
    description: "SQL"
  },
  {
    icon: "../images/jquery.png",
    description: "jQuery"
  },
  {
    icon: "../images/leaflet.png",
    description: "Leaflet.js"
  },
  {
    icon: "../images/liveware.webp",
    description: "Livewire"
  }
];


const About = () => {
  const [setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
        Hi everyone! My name is <b>Sulthan Izza Falqahi</b>, and I am an active student at an Indonesian Educational University with a strong interest in Web Developer. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. In my opinion, creating programs is an art that has aesthetic value.
      </p>

      <p>
        I have experience in designing and developing web applications, with a solid understanding of object-oriented programming. My passion is to build websites that are not only functional and user-friendly but also visually appealing. Moreover, I strive to add a personal touch to every project, ensuring that each website stands out and is easy to use.
      </p>
    </section>

    <section className="service">

      <h3 className="h3 service-title">Skills</h3>

      <h3 className="h3 stack">Tech Stack</h3>
      <ul className="service-list">

      {techData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              description={service.description}
            />
          ))}

      </ul>

      <h3 className="h3 stack">Tools</h3>
      <ul className="service-list">

      {toolsData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              description={service.description}
            />
          ))}

      </ul>

    </section>

  </article>
  )
}
export default About