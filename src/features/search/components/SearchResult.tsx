import MovieCardList from './MovieCardList';
import { Movie } from '@/interfaces/movie';

interface SearchResultProps {
  data: Movie[];
  keyword?: string;
  isLoading?: boolean;
  isError?: boolean;
}

const SearchResult: React.FC<SearchResultProps> = ({
  keyword,
  data,
  isLoading = false,
  isError = false,
}: SearchResultProps) => {
  return (
    <div className='grid gap-3 mt-4 md:mt-10 text-center'>
      <h4 className='text-slate-200 font-bold text-xl'>Movies Result</h4>
      {keyword || isLoading || isError ? (
        <p className='text-gray-600 text-sm -mt-2'>
          {!isError
            ? isLoading
              ? `Searching...`
              : `Showing movies with keyword "${keyword}"`
            : 'Something wrong'}
        </p>
      ) : null}
      <MovieCardList data={data}></MovieCardList>
    </div>
  );
};

export default SearchResult;
