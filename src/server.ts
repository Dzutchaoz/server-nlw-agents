import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { env } from './env.ts';
import { getRoomsRoute } from './http/routes/get-rooms.ts';

//import { ok } from 'assert';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: 'http://localhost:5173', // '*', // Allow all origins
  //  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
  //  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
  return 'ok';
});

app.register(getRoomsRoute);


app.listen({ port: env.PORT });
