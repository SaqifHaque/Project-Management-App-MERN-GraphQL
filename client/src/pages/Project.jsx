import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { GET_PROJECT } from '../queries/projectQueries';

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if(loading) return <Spinner />
  if(error) return <p>Something went Wrong</p>
  return (
    <div>Project</div>
  )
}

export default Project