import Head from "next/head";
import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";

const ProjectDetails = ({ project }) => {
  console.log(project);

  if (!project) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Head>
        <title>{project.name}</title>
      </Head>

      <div className="p-2">
        <div className="title-bar">
          <div className="title-bar-text">{project.name}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Restore"></button>
            <button aria-label="Close"></button>
          </div>
        </div>

        <div className="pt-4 pb-4 px-2">
          <Link href="/projects">
            <button className="me-2" data-aos="zoom-in">
              Go to Personal projects
            </button>
            <Link href="/work-projects">
            <button className="" data-aos="zoom-in">
              Go to Work projects
            </button>
          </Link>

          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4 shadow-xl p-2">

          <div data-aos="zoom-in">
            <img className="detail-img mb-5 card glass" src={project.image} alt={project.name} />
          </div>

          <div className="md:col-span-2">

            <div className="window glass active" data-aos="zoom-in">
              <div className="title-bar">
                <div className="title-bar-text">About this project: </div>
              </div>
              <div className="window-body has-space window-body-replace">
                <p>{project.description}</p>

                <div className="pt-4">
                  <Link href={project.deployed} target="blank">
                    <GrDeploy className="inline w-4" /> Project deploy
                  </Link>

                  <Link className="mx-5" href={project.repo} target="blank">
                    <SiGithub className="inline w-4" /> <span>Project repo</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  );
};

export default ProjectDetails;
