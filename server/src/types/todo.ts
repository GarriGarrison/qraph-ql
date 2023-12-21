import { ID } from './common';

export type Todo = {
  id: ID;
  title: string;
  user_id: ID;
  completed: boolean;
};

export type TodoAdd = Omit<Todo, 'id'>;
