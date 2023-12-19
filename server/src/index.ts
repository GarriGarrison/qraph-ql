import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import * as graphql from 'express-graphql';
import { schema, root } from './graphql/schema';

dotenv.config();

const server = async () => {
  try {
    const app = express();
    const port = process.env.PORT || 5000;

    app.use(cors());

    app.use(
      '/graphql',
      graphql.graphqlHTTP({
        graphiql: true,
        schema,
        rootValue: root,
      }),
    );

    app.listen(port, () => {
      console.log(`Server started on port ${port}...`);
    });
  } catch (err) {
    console.error(err);
  }
};

server();
