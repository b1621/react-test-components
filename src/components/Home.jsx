import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className='my-10'>
        <Link to='/formPopup' className='my-5 border py-1 px-5'>
          Popup Form
        </Link>
        <Link to='/reactquery' className='my-5 border py-1 px-5'>
          React Query
        </Link>
      </div>
    </div>
  );
};

export default Home;
