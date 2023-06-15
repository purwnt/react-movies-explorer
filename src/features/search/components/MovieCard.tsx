import { StarIcon } from '@heroicons/react/24/solid';

interface UserCardProps {
  poster?: string;
  title?: string;
  voteAverage?: number;
  voteCount?: number;
  releaseDate?: string;
  overview?: string;
}

const MovieCard: React.FC<UserCardProps> = ({
  poster = '',
  title = '',
  voteAverage = 0.2,
  voteCount = 0,
  releaseDate = '',
  overview = '',
}: UserCardProps) => {
  return (
    <div className='bg-gradient-to-r from-slate-800 to-slate-700 p-4 rounded-2xl flex gap-4 items-center'>
      <div className='w-4/12'>
        <img src={poster} alt={title} className='rounded-2xl' />
      </div>
      <div className='w-8/12 text-left py-4'>
        <h5 className='text-white font-bold text-xl'>{title}</h5>
        <div className='flex gap-1 mt-3'>
          <StarIcon className='text-yellow-500 w-5'></StarIcon>
          <p className='text-yellow-500 font-bold'>
            {voteAverage.toFixed(1)}
            <span className='font-light ml-1'>({voteCount})</span>
          </p>
        </div>
        <p className='text-slate-400 text-sm'>{overview.slice(0, 50)}</p>
        <p className='text-white text-xs font-bold mt-1'>{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
