import { useQuery } from '@tanstack/react-query';
import { ApiSearchMovieResponse } from '@/interfaces/movie';
import { Repository } from '@/interfaces/repository';
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

export const useGetUserRepositories = (username: string) => {
  return useQuery<Repository[]>({
    queryKey: [`repos-${username}`],
    queryFn: ({ signal }) =>
      apiInstance
        .get(`/users/${username}/repos`, { signal })
        .then((res) => res.data),
    refetchOnWindowFocus: false,
    enabled: false,
  });
};
