export interface ApiSearchUserResponse {
  page: number;
  results: boolean;
  items: User[];
}

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
}
