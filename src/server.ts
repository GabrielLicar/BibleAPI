import cors from '@fastify/cors'
import fastify from 'fastify'
import { booksRoutes } from './routes/books'
import { randomRoutes } from './routes/random'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(booksRoutes)
app.register(randomRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Server listening on port http://localhost:3333')
    console.log('⚔️ Made with 💜 by Gabriel Licar')
  })
