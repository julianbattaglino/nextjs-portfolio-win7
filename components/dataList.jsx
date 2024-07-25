import React from "react";
import DataItem from "./dataItem";

const DataList = ({ projects }) => {
  console.log(projects)
  return (
    <div className="items-grid">
        {projects.map((project) => (
          <DataItem key={project.id} project={project} />
        ))}
    </div>
  );
};

export default DataList;
