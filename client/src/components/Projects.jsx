import React from 'react'
import { useQuery } from '@apollo/client';
import Spinner from './Spinner';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { loading, error, data } = useQuery(GET_CLIENTS);
    if(loading) return  <Spinner/>
    if(error) return <p>Something Went Wrong</p>


    return (
        <>
            { data.Projects.length > 0 ? (
                <div className="row">
                    {data.projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (<p>No Project</p>)} 
        </>
    )
}

export default Projects