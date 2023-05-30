import { FastifyInstance } from 'fastify'
const aaBible = require('../../assets/aa.json')
const acfBible = require('../../assets/acf.json')
const nviBible = require('../../assets/nvi.json')

interface Book{
  abbrev: string
  name: string
  chapters: string[][]
}

export async function randomRoutes(app: FastifyInstance) {
  
  function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max)
  }

  app.get('/random', async (request, reply) => {
    const bibles = [aaBible, acfBible, nviBible]

    const bible = bibles[getRandomNumber(bibles.length)]
    
    const book = bible[getRandomNumber(bible.length)]

    const chapter = getRandomNumber(book.chapters.length) + 1

    const verse = getRandomNumber(book.chapters[chapter - 1].length) + 1

    const result = {
      book: book.name,
      abbrev: book.abbrev,
      chapter,
      verse,
      text: book.chapters[chapter - 1][verse - 1]
    }

    return result
  })
}
