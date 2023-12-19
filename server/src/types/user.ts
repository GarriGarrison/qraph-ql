import { ID } from './common';

export type User = {
  id: ID;
  name: string;
  age: number;
};

export type UserCreate = Omit<User, 'id'>;
