import React, { useEffect, useState } from 'react';
import { FaLaravel } from "react-icons/fa6";
import { BiLogoReact, BiLogoTailwindCss, BiLogoVuejs, BiLogoPhp } from "react-icons/bi";
import { SiNextdotjs, SiLeaflet, SiDjango, SiWordpress, SiAxios } from "react-icons/si";
import { DiCodeigniter, DiBootstrap, DiJqueryLogo } from "react-icons/di";
import ProjectsPost from './ProjectsPost';
import './Projects.css'

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
  SiAxios: SiAxios
};

const Projects = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); // Number of posts per page

  useEffect(() => {
    fetch('blogs.json')
      .then(response => response.json())
      .then(data => {
        setBlogs(data);
      })
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>
      <div className="blog-posts">
        <ul className="blog-posts-list">
        {currentPosts.map((post, index) => {
            const Icon = iconMap[post.icon];
            return (
              <ProjectsPost
                key={index}
                title={post.title}
                link={post.link}
                image={post.image}
                description={post.description}
                icons={post.icons || []}
                Icon={Icon}
              />
            );
          })}
        </ul>
      </div>
      {/* Pagination */}
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button onClick={() => paginate(currentPage - 1)} className="page-link">
              Previous
            </button>
          </li>
          {Array.from({ length: Math.ceil(blogs.length / postsPerPage) }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === Math.ceil(blogs.length / postsPerPage) ? 'disabled' : ''}`}>
            <button onClick={() => paginate(currentPage + 1)} className="page-link">
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Projects;
