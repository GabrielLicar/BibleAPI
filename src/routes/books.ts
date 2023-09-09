import { FastifyInstance } from 'fastify'
const aaBiblia = require('../../assets/aa.json')
const acfBiblia = require('../../assets/acf.json')
const nviBiblia = require('../../assets/nvi.json')

interface Book {
  version: string
  abbrev: string
  name: string
  chapters: string[][]
}

export async function booksRoutes(app: FastifyInstance) {
  // Rota para obter todos os livros da Bíblia
  app.get('/:version/books', async (request, reply) => {
    const { version } = request.params as any
    let biblia

    switch (version) {
      case 'aa': {
        biblia = aaBiblia
        break
      }
      case 'acf': {
        biblia = acfBiblia
        break
      }
      case 'nvi': {
        biblia = nviBiblia
        break
      }
      default: {
        reply.code(404).send({ error: 'Versão da bíblia não encontrada' })
      }
    }

    return biblia.map((book: Book) => ({
      abbrev: book.abbrev,
      name: book.name,
      caps: book.chapters.length,
    }))
  })

  // Rota para obter um livro específico da Bíblia
  app.get('/:version/books/:abbrev', async (request, reply) => {
    const { version, abbrev } = request.params as any

    let biblia

    switch (version) {
      case 'aa': {
        biblia = aaBiblia
        break
      }
      case 'acf': {
        biblia = acfBiblia
        break
      }
      case 'nvi': {
        biblia = nviBiblia
        break
      }
      default: {
        reply.code(404).send({ error: 'Versão da bíblia não encontrada' })
      }
    }

    const book = biblia.find((book: Book) => book.abbrev === abbrev)

    if (!book) {
      reply.code(404).send({ error: 'Livro não encontrado' })
      return
    }

    return book
  })

  // Rota para obter um capítulo específico da Bíblia
  app.get('/:version/books/:abbrev/:chapter', async (request, reply) => {
    const { version, abbrev, chapter } = request.params as any

    let biblia

    switch (version) {
      case 'aa': {
        biblia = aaBiblia
        break
      }
      case 'acf': {
        biblia = acfBiblia
        break
      }
      case 'nvi': {
        biblia = nviBiblia
        break
      }
      default: {
        reply.code(404).send({ error: 'Versão da bíblia não encontrada' })
      }
    }

    const book = biblia.find((book: Book) => book.abbrev === abbrev)

    if (!book) {
      reply.code(404).send({ error: 'Livro não encontrado' })
    }

    const cap = book.chapters[chapter - 1]

    if (!cap) {
      reply.code(404).send({ error: 'Capítulo não encontrado' })
    }

    return cap
  })

  // Rota para obter um versículo específico de um capítulo da Bíblia
  app.get('/:version/books/:abbrev/:chapter/:verse', async (request, reply) => {
    const { version, abbrev, chapter, verse } = request.params as any

    let biblia

    switch (version) {
      case 'aa': {
        biblia = aaBiblia
        break
      }
      case 'acf': {
        biblia = acfBiblia
        break
      }
      case 'nvi': {
        biblia = nviBiblia
        break
      }
      default: {
        reply.code(404).send({ error: 'Versão da bíblia não encontrada' })
      }
    }

    const book = biblia.find((book: Book) => book.abbrev === abbrev)

    if (!book) {
      reply.code(404).send({ error: 'Livro não encontrado' })
      return
    }

    const capitulo = book.chapters[chapter - 1]

    if (!capitulo) {
      reply.code(404).send({ error: 'Capítulo não encontrado' })
      return
    }

    const versiculo = capitulo[verse - 1]

    if (!versiculo) {
      reply.code(404).send({ error: 'Versículo não encontrado' })
    }

    return versiculo
  })
}
