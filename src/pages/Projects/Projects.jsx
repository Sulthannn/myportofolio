import React, { useEffect, useState } from 'react';
import { FaLaravel } from "react-icons/fa6";
import { BiLogoReact, BiLogoTailwindCss, BiLogoVuejs, BiLogoPhp } from "react-icons/bi";
import { SiNextdotjs, SiLeaflet, SiDjango, SiWordpress, SiAxios, SiExpress } from "react-icons/si";
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
  SiAxios: SiAxios,
  SiExpress: SiExpress
};

const Projects = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const totalPages = Math.max(1, Math.ceil(blogs.length / postsPerPage));

  useEffect(() => {
    fetch('blogs.json')
      .then(response => response.json())
      .then(data => {
        setBlogs(data);
      })
  }, []);

  useEffect(() => {
    setCurrentPage(prevPage => Math.min(Math.max(prevPage, 1), totalPages));
  }, [totalPages]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    const nextPage = Math.min(Math.max(pageNumber, 1), totalPages);
    setCurrentPage(nextPage);
  };

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

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
      <nav>
        <ul className="pagination">
          <li className={`page-item ${!canGoPrev ? 'disabled' : ''}`}>
            <button
              type="button"
              onClick={() => paginate(currentPage - 1)}
              className="page-link"
              disabled={!canGoPrev}
              aria-disabled={!canGoPrev}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: Math.ceil(blogs.length / postsPerPage) }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button type="button" onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${!canGoNext ? 'disabled' : ''}`}>
            <button
              type="button"
              onClick={() => paginate(currentPage + 1)}
              className="page-link"
              disabled={!canGoNext}
              aria-disabled={!canGoNext}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Projects;