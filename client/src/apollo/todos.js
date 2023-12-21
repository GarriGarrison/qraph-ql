import { gql } from '@apollo/client';

// alias -> todos (rename getAllTodos)

export const ALL_TODO = gql`
  query getAllTodos {
    todos: getAllTodos {
      id
      title
      completed
    }
  }
`;
