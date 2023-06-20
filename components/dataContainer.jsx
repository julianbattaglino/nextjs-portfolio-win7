import React from "react";
import Head from "next/head";
import DataList from "./dataList";
import projectsData from '../pages/projects.json';

const DataContainer = () => {
  return (
    <>
      <div className="p-6">
        <div className="window active mb-5">
          <div className="title-bar">
            <div className="title-bar-text">C:\Projects</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
        </div>
        <DataList projects={projectsData.projects} />
      </div>
    </>
  );
};

export default DataContainer;
