import type { Todo } from 'src/types/todo';
import type { User } from 'src/types/user';

export const todos: Todo[] = [
  { id: 1, title: 'Lorem Ipsum', user_id: 123, completed: false },
  { id: 2, title: 'Sic Dolor amet', user_id: 123, completed: false },
];

export const users: User[] = [
  { id: 123, name: 'John Doe', age: 25 },
  { id: 456, name: 'Jane Rose', age: 24 },
];
