import { Link } from 'react-router-dom';
import {formatDate} from '../utils/helpers'

const Card = ({question, author}) => {

  const timestampDate = formatDate(question.timestamp);

  return (
    <Link to={'questions/' + question.id} className="block border p-4 rounded-md">
      <div className="flex items-center space-x-4">
        <img className="h-12 w-12 rounded-full" src={author?.avatarURL} alt="Author" />
        <div>
          <div className="font-bold">{question.author}</div>
          <p className="text-sm text-gray-500">{timestampDate}</p>
          <p className="text-blue-500">Show</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
