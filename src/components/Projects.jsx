import { useState } from 'react'
import { filters, projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(null)

  const visibleProjects = projects.filter((project) => project.category === activeCategory)

  return (
    <>
      <div className="mx-auto">
        <h2 className="font-display font-normal text-5xl mb-4">/ projects</h2>
        <div className="flex w-full my-4 mr-16 items-center text-grey text-base justify-between cursor-pointer transition-colors duration-500">
          {filters.map((filter) => (
            <span key={filter.category}>
              <h3
                onClick={() => setActiveCategory(filter.category)}
                className={`hover:text-green ${activeCategory === filter.category ? 'text-green' : ''}`}
              >
                {filter.label}
              </h3>
            </span>
          ))}
        </div>
      </div>

      {activeCategory && (
        <div className="flex flex-wrap justify-evenly w-full">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title + project.category} project={project} />
          ))}
        </div>
      )}
    </>
  )
}
