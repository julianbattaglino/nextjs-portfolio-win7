import React from "react";
import Link from "next/link";

const DataItem = ({ project }) => {

  return (

    <>
      <Link href={`/project/${project.id}`}>
        <div className="background ">
          <div className="window glass active">
            <div className="title-bar">
              <div className="title-bar-text">Project: {project.name}</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Close"></button>
              </div>
            </div>

            <div className="window-body has-space">
              <figure>
                <img className="grid-img" src={project.image} alt={project.name} />
              </figure>
              <div className="card-body p-0">

                <ul className="tree-view">
                  <li className="pt-2">{project.extract}</li>
                  <li className="pt-2 pb-2">{project.category} </li>
                </ul>

                <div className="card-actions justify-start">
                  <button className="">View Project</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Link>
    </>
  );
};

export default DataItem;
