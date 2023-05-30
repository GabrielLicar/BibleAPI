import fastify from 'fastify'
import cors from '@fastify/cors'
import { booksRoutes } from './routes/books'
import { randomRoutes } from './routes/random'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.get('/', (request, reply) => {
  const welcome = {
    hello: [
      "A paz do senhor! 👋 Faça bom uso dessa API maravilhosa. 🥳",
      "Mas não se esquece de deixar os créditos 😉."
    ],
    links: {
      "Github": "https://github.com/GabrielLicar",
      "Instagram": "https://instagram.com/gaablicar",
    }
  }

  return welcome
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
