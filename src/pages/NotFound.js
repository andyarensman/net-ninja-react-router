import { Link } from 'react-router-dom';

const NotFound = () => {
  return ( 
    <div>
      <h2>Page not found!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusantium inventore est corrupti incidunt deserunt adipisci, deleniti eius et quae!</p>

      <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
   );
}
 
export default NotFound;