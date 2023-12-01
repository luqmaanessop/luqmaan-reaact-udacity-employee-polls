import { Link } from 'react-router-dom';
import {formatDate} from '../utils/helpers'

const Card = ({question, author}) => {

  const timestampDate = formatDate(question.timestamp);
  const linkUrl = 'questions/' + question.id;

  return (
  <Link to={linkUrl} className="p-6 block bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='flex justify-between mb-2'><h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{question.author}</h5>
          <img className="border border-gray-200 p-2 h-16 w-16 rounded-full" src={author?.avatarURL} alt="Author" /></div>

          <p>{timestampDate}</p>
      <p class="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
      </p>
  </Link>
  );
};

export default Card;
