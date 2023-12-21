import { buildSchema } from 'graphql';
import { users, todos } from '../db/index';
import type { ID } from 'src/types/common';
import type { UserCreate } from 'src/types/user';
import type { TodoAdd } from 'src/types/todo';

type GetUser = {
  id: ID;
};

type CreateUser = {
  input: UserCreate;
};

type AddTodo = {
  input: TodoAdd;
};

export const schema = buildSchema(`
  
  type User {
    id: ID
    name: String
    age: Int
    posts: [Post]
  }

  type Post {
    id: ID
    title: String
    content: String
  }

  input UserInput {
    id: ID
    name: String!
    age: Int!
    posts: [PostInput]
  }

  input PostInput {
    id: ID
    title: String!
    content: String!
  }

  type Todo {
    id: ID
    title: String
    user_id: ID
    completed: Boolean
  }

  input TodoInput {
    id: ID
    title: String!
    user_id: ID!
    completed: Boolean!
  }

  type Query {
    getAllUsers: [User]
    getUser(id: ID): User
    getAllTodos: [Todo]
  }

  type Mutation {
    createUser(input: UserInput): User
    addTodo(input: TodoInput): Todo
  }
`);

const createUser = (input: UserCreate) => {
  const id = Date.now();

  return {
    id,
    ...input,
  };
};

const addTodo = (input: TodoAdd) => {
  const id = Date.now();

  return {
    id,
    ...input,
  };
};

export const root = {
  getAllUsers: () => {
    return users;
  },

  getUser: ({ id }: GetUser) => {
    return users.find((user) => user.id == id);
  },

  createUser: ({ input }: CreateUser) => {
    const user = createUser(input);
    users.push(user);
    return user;
  },

  getAllTodos: () => {
    return todos;
  },

  addTodo: ({ input }: AddTodo) => {
    const todo = addTodo(input);
    todos.push(todo);
    return todo;
  },
};
