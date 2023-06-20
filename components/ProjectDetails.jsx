import Head from "next/head";
import Link from "next/link";
import React from "react";

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

      <div className="p-4">
        <div className="title-bar">
          <div className="title-bar-text">{project.name}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Restore"></button>
            <button aria-label="Close"></button>
          </div>
        </div>

        <div className="pt-4">
          <Link href="/projects">
            <button className="btn btn-sm gap-2">
              Back to projects
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4 bg-base-100 shadow-xl">

          <div>
            <img className="detail-img mt-5 mb-5 card glass" src={project.image} alt={project.name} />
          </div>

          <div className="p-3 md:col-span-2">

            <div className="window active" >
              <div className="title-bar">
                <div className="title-bar-text">About this project: </div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
              <div className="window-body has-space">
                <p>{project.description}</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  );
};

export default ProjectDetails;
