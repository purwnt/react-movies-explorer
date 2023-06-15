import { useQuery } from '@tanstack/react-query';
import { ApiSearchMovieResponse } from '@/interfaces/movie';
import { apiInstance } from '@/lib/axios';

export const useGetMovie = (keyword: string, page: number) => {
  return useQuery<ApiSearchMovieResponse>({
    queryKey: ['movies'],
    queryFn: ({ signal }) =>
      apiInstance
        .get(`search/movie?query=${keyword}&page=${page}`, { signal })
        .then((res) => res.data),
    refetchOnWindowFocus: false,
    enabled: false,
  });
};
