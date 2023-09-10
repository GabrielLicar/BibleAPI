
# Bible API

Essa é uma API simples para obter informações da Bíblia. Ela fornece endpoints para obter todos os livros da Bíblia, obter um livro específico, obter um capítulo específico de um livro e obter um versículo específico de um capítulo.

## Tecnologias usadas

- Node.js (v18.15.0)
- Typescript (5.0.4)
- Fastify (4.17.0)

## Instalação

 - Clone o repositório:

	```shell
	git clone https://github.com/seu-usuario/bible-api.git
	```
 - Navegue até o diretório do projeto:
	```shell
	cd BibleAPI
	```
 - Instale as dependências:
	```shell
	npm install
	```
 - Inicie o servidor:
	```shell
	npm run dev
	```
	##### O servidor será executado em **http://localhost:3333**

## Uso

A API possui os seguintes endpoints:
 -  **``GET`` /:version/books**: Retorna todos os livros da Bíblia.
-   **``GET`` /:version/books/:abbrev**: Retorna um livro específico da Bíblia.
-   **``GET`` /:version/books/:abbrev/:chapter**: Retorna um capítulo específico de um livro.
-   **``GET`` /:version/books/:abbrev/:chapter/:verse**: Retorna um versículo específico de um capítulo.
-   **``GET`` /:version?search=keyword**: Retorna todos os versículos que contenham a palavra.

As versões disponiveis são: 

-  ``acf`` = Almeida Corrigida Fiel
-  ``aa`` = Almeida Revisada Imprensa Bíblica
-  ``nvi`` = Nova Versão Internacional

Substitua `:version`, `:abbrev`, `:chapter` e `:verse` pelos valores desejados. Por exemplo, para obter o primeiro versículo do primeiro capítulo do livro de Gênesis na versão ACF, você pode fazer a seguinte requisição:

`GET http://localhost:3333/acf/books/gn/1/1` 

A resposta será o versículo específico em texto.

## Créditos

Esta API foi desenvolvida por [Gabriel Licar](https://instagram.com/gaablicar) e foi baseada neste [Repositório da Bíblia](https://github.com/thiagobodruk/biblia).

## Contribuição

Contribuições são bem-vindas! Se você tiver alguma sugestão, melhoria ou correção de bug, sinta-se à vontade para abrir uma issue ou enviar um pull request.


## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](https://github.com/GabrielLicar/BibleAPI/blob/main/LICENSE) para obter mais informações.

**Resumo da Licença MIT:**

A Licença MIT é uma licença de software de código aberto que **permite que você use, modifique e distribua** o software conforme desejar. No entanto, ela requer que **você mantenha os avisos de direitos autorais** e a licença original junto com o software.

Lembre-se de ler o arquivo [LICENSE](https://github.com/GabrielLicar/BibleAPI/blob/main/LICENSE) para obter o texto completo da Licença MIT.
