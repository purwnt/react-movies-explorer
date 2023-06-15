import { Movie } from '@/interfaces/movie';
import MovieCard from './MovieCard';

interface MovieCardListProps {
  data: Movie[];
}

const MovieCardList: React.FC<MovieCardListProps> = ({
  data,
}: MovieCardListProps) => {
  return (
    <div className='grid gap-3 md:grid-cols-2'>
      {data?.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          voteAverage={movie.vote_average}
          voteCount={movie.vote_count}
          poster={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : 'https://media.comicbook.com/files/img/default-movie.png'
          }
          releaseDate={movie.release_date}
          overview={movie.overview}
        ></MovieCard>
      ))}
    </div>
  );
};

export default MovieCardList;
