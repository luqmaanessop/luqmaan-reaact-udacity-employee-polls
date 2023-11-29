import { Link } from 'react-router-dom';

const Card = () => {

  const id = "1";
  const dateTime = '1/2/2023';
  return (
    <Link to={'questions/' + id} className="border p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex items-center space-x-4">
        <img className="h-12 w-12 rounded-full" src={''} alt="Author" />
        <div>
          <div className="font-bold">Author</div>
          <p className="text-sm text-gray-500">{dateTime}</p>
          <p className="text-blue-500">Show</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
