import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-4">
        <div className="card mb-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className="card-title">{project.name}</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard