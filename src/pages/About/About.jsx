import { useEffect, useState } from "react"
import Service from "./Service";

const techData = [
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
    icon: "../images/sql.png",
    description: "SQL"
  },
  {
    icon: "../images/boots.png",
    description: "Bootstrap"
  },
  {
    icon: "../images/tailwind.svg",
    description: "Tailwind"
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
        Hi! I'm <b>Sulthan Izza Falqahi</b>, a web developer with hands-on experience in building real-world web applications for government institutions, academic departments, and businesses. I enjoy creating things on the internet, whether it's websites, applications, or anything in between. In my opinion, programming is an art form with aesthetic value.
      </p>

      <p>
        My passion is to building websites with a foundation in object-oriented programming and an understanding of UI/UX principles. I am committed to creating web solutions that are not only functional but also accessible and visually appealing. I enjoy breaking down complex problems into elegant digital experiences and remain enthusiastic about learning new technologies to grow as a developer.
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