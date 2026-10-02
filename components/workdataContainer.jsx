import React, { useState } from "react";
import Head from "next/head";
import DataList from "./workdataList";
import projectsData from '../pages/work-projects.json';
import { FaCalendarAlt, FaFilter, FaMapMarkerAlt, FaTags, FaUndo } from "react-icons/fa";

const DataContainer = () => {
  const [yearFilter, setYearFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const projects = projectsData.projects;
  const years = [...new Set(projects.map((project) => project.year).filter(Boolean))]
    .sort((a, b) => b - a);
  const categories = [...new Set(projects.flatMap((project) =>
    project.category ? project.category.split(",").map((category) => category.trim()) : []
  ))]
    .sort((a, b) => a.localeCompare(b));
  const locations = [...new Set(projects.map((project) => project.location).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b));
  const filteredProjects = projects.filter((project) =>
    (!yearFilter || String(project.year) === yearFilter) &&
    (!categoryFilter || project.category.split(",").map((category) => category.trim()).includes(categoryFilter)) &&
    (!locationFilter || project.location === locationFilter)
  );
  const hasActiveFilters = yearFilter || categoryFilter || locationFilter;

  return (
    <>
      <div className="p-2">
        <div className="window active mb-5">
          <div className="title-bar">
            <div className="title-bar-text">C:\Projects</div>
            {/*<div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>*/}
          </div>
        </div>
        <section className="window active project-filter-window" aria-label="Filtros de proyectos">
          <div className="title-bar project-filter-title-bar">
            <div className="title-bar-text"><FaFilter aria-hidden="true" /> Archivo de proyectos</div>
            <span className="project-filter-total">{projects.length} proyectos</span>
          </div>

          <div className="window-body has-space project-filter-body">
          <div className="project-filter-controls">
            <label className={yearFilter ? "project-filter-field is-active" : "project-filter-field"} htmlFor="project-year-filter">
              <span className="project-filter-label"><FaCalendarAlt aria-hidden="true" /> Año</span>
              <select
                id="project-year-filter"
                value={yearFilter}
                onChange={(event) => setYearFilter(event.target.value)}
              >
                <option value="">Todos los años</option>
                {years.map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </label>

            <label className={categoryFilter ? "project-filter-field is-active" : "project-filter-field"} htmlFor="project-category-filter">
              <span className="project-filter-label"><FaTags aria-hidden="true" /> Categoría</span>
              <select
                id="project-category-filter"
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value)}
              >
                <option value="">Todas las categorías</option>
                {categories.map((category) => <option key={category} value={category}>{category}</option>)}
              </select>
            </label>

            <label className={locationFilter ? "project-filter-field is-active" : "project-filter-field"} htmlFor="project-location-filter">
              <span className="project-filter-label"><FaMapMarkerAlt aria-hidden="true" /> Ubicación</span>
              <select
                id="project-location-filter"
                value={locationFilter}
                onChange={(event) => setLocationFilter(event.target.value)}
              >
                <option value="">Todas las ubicaciones</option>
                {locations.map((location) => <option key={location} value={location}>{location}</option>)}
              </select>
            </label>
          </div>

          <div className="project-filter-footer" aria-live="polite">
            <button
              className="project-filter-reset"
              type="button"
              disabled={!hasActiveFilters}
              onClick={() => {
                setYearFilter("");
                setCategoryFilter("");
                setLocationFilter("");
              }}
            >
              <FaUndo aria-hidden="true" /> Limpiar filtros
            </button>
          </div>
          </div>

          <div className="status-bar project-filter-status" aria-live="polite">
            <p className="status-bar-field project-filter-count">
              {filteredProjects.length} de {projects.length} proyectos
            </p>
            <p className="status-bar-field">
              <span className={hasActiveFilters ? "project-filter-status-light is-active" : "project-filter-status-light"} />
              {hasActiveFilters ? "Filtros aplicados" : "Vista completa"}
            </p>
          </div>
        </section>

        {filteredProjects.length > 0
          ? <DataList projects={filteredProjects} />
          : <p className="project-filter-empty">No hay proyectos que coincidan con estos filtros.</p>}
      </div>
    </>
  );
};

export default DataContainer;
