import SearchForm from '@/features/search/components/SearchForm';
import SearchResult from '@/features/search/components/SearchResult';
import { useState } from 'react';
import { useGetMovie } from '@/api/movies';
import Navbar from '@/components/navbar/Navbar';
import { User } from '@/interfaces/user';

const USER: User = {
  id: 1,
  username: 'johndoe',
  firstName: 'John',
  lastName: 'Doe',
  avatarUrl:
    'https://cdn.dribbble.com/users/1619633/avatars/small/d2321d1d31eaf8a450642a04a428fa92.jpg?1623076528',
};

const Search: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [page] = useState(1);
  const [resultKeyword, setResultKeyword] = useState('');
  const { isFetching, error, data, refetch } = useGetMovie(keyword, page);

  function handleChange(value: string) {
    setKeyword(value);
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    refetch();
    setResultKeyword(keyword);
  }

  function handleReset() {
    console.log('reset');
  }

  return (
    <>
      <Navbar user={USER}></Navbar>
      <SearchForm
        keyword={keyword}
        onChange={handleChange}
        onClick={handleClick}
        onReset={handleReset}
      ></SearchForm>
      {data ? (
        <SearchResult
          isLoading={isFetching}
          isError={error as boolean}
          keyword={resultKeyword}
          data={data.results}
        ></SearchResult>
      ) : null}
    </>
  );
};

export default Search;
