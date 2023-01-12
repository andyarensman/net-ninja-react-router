import { useLoaderData, useParams } from 'react-router-dom';

const CareerDetails = () => {
  const { id } = useParams()
  const career = useLoaderData()
  
  return ( 
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora exercitationem libero officiis veritatis itaque corrupti eius, at debitis? Voluptatibus, excepturi.</div>
    </div>
   );
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('http://localhost:4000/careers/' + id)

  if (!res.ok) {
    throw Error('Could not find that career')
  }

  return res.json()
}
 
export default CareerDetails;