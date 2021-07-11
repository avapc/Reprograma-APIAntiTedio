## Sobre o Projeto

A API **API Anti Tedio** tem como objetivo criar uma plataforma aonde o usuario pode pesquisar e avaliar jogos, series e filmes atravez de requests HTML em um CRUD. 


## Tecnologias utilizadas:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
| `Insomnia ou Postman` | Interface gráfica para realizar os testes|
| `MongoDB Atlas` | Serviço de DBaaS (Banco de Dados como Serviço) oferecido pela MongoDB|

<br>
<br>

## 📁 Arquitetura 

```
 📁 Reprograma-APIAntiTedio
   |
   |-  📁 node_modules
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 controllerFilmes.js
   |         |- 📄 controllerJogos.js
   |         |- 📄 controllerSeries.js
   |
   |    |- 📁 models
   |         |- 📄 modelFilme.js
   |         |- 📄 modelJogo.js
   |         |- 📄 modelSerie.js
   |
   |    |- 📁 routes
   |         |- 📄 index.js 
   |         |- 📄 routesFilmes.js 
   |         |- 📄 routesJogos.js
   |         |- 📄 routesSeries.js
   |    |- 📄 app.js
   |- 📄 .env
   |- 📄 Procfile
   |- 📄 .gitignore
   |- 📄 package.json
   |- 📄 package-lock.json
   |- 📄 server.js
   |- 📄 README.md

```

<br>
<br>

## Contrato

### Requisitos e rotas index
- [x ]  **[GET] "/"** Deverá retornar uma introdução á API.

### Requisitos e rotas filmes
- [x ]  **[GET] "/filmes/mostrarTodos"** Deverá retornar todos os filmes cadastrados.
- [x ]  **[GET] "/filmes/filtrarGenero"** Deverá retornar todos os filmes que contenham o genero delcarado pelo usuário.
- [x ]  **[POST] "/filmes/adicionar"** Deverá adicionar um novo filme á database.
- [x ]  **[PATCH] "/filmes/atualizar/[ID]"** Deverá atualizar um filme por id especifico, caso tenha sido cadastrado errado.
- [x ]  **[PATCH] "/filmes/darNota/[ID]"** Deverá permitir que o usuario de uma nota ao filme por id especifico, o calculo da nota final é a media da nota final cadastrada com a nota dada pelo usuário.
- [x ]  **[DELETE] "/filmes/deletar"** Deverá deletar um filme pelo nome.

### Requisitos e rotas jogos
- [x ]  **[GET] "/jogos/mostrarTodos"** Deverá retornar todos os jogos cadastrados.
- [x ]  **[GET] "/jogos/filtrarGenero"** Deverá retornar todos os jogos que contenham o genero delcarado pelo usuário.
- [x ]  **[POST] "/jogos/adicionar"** Deverá adicionar um novo jogo á database.
- [x ]  **[PATCH] "/jogos/atualizar/[ID]"** Deverá atualizar um jogo por id especifico, caso tenha sido cadastrado errado.
- [x ]  **[PATCH] "/jogos/darNota/[ID]"** Deverá permitir que o usuario de uma nota ao jogo por id especifico, o calculo da nota final é a media da nota final cadastrada com a nota dada pelo usuário.
- [x ]  **[DELETE] "/jogos/deletar"** Deverá deletar um jogos pelo nome.

### Requisitos e rotas series
- [x ]  **[GET] "/series/mostrarTodos"** Deverá retornar todos as series cadastrados.
- [x ]  **[GET] "/series/filtrarGenero"** Deverá retornar todos as series que contenham o genero delcarado pelo usuário.
- [x ]  **[POST] "/series/adicionar"** Deverá adicionar uma nova serie á database.
- [x ]  **[PATCH] "/series/atualizar/[ID]"** Deverá atualizar uma serie por id especifico, caso tenha sido cadastrada errado.
- [x ]  **[PATCH] "/series/darNota/[ID]"** Deverá permitir que o usuario de uma nota a serie por id especifico, o calculo da nota final é a media da nota final cadastrada com a nota dada pelo usuário.
- [x ]  **[DELETE] "/series/deletar"** Deverá deletar uma serie pelo nome.



<br>
<br>

### Dados para Collection filmes

- id: autogerado e obrigatório
- nome: texto e obrigatório
- genero: texto e obrigatório
- publicacao: texto e obrigatório
- descricao: texto e obrigatório
- nota: numero gerado automaticamente e obrigatório
- elenco: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


### API deve retornar seguinte JSON:

```jsx
{
    "criadoEm": "2021-07-11T01:11:58.924Z",
    "nota": 7,
    "_id": "60ea45dd0a6251000414b061",
    "nome": "The Matrix 2",
    "genero": "Sci-fi/Action",
    "publicacao": "Release date: May 21, 1999 (Brazil), Directors: Lana Wachowski, Lilly Wachowski, Produced by: Joel Silver , Budget: $63 million, Written by: The Wachowskis",
    "descricao": "Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
    "elenco": "Carrie Anne-Moss, Keanu Reeves, Laurance Fishburn",
    "__v": 0
}
```
<br>
<br>

### Dados para Collection jogos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- genero: texto e obrigatório
- publicacao: texto e obrigatório
- descricao: texto e obrigatório
- nota: numero gerado automaticamente e obrigatório
- plataformas: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


### API deve retornar seguinte JSON:

```jsx
{
    "criadoEm": "2021-07-11T01:11:58.939Z",
    "nota": 7,
    "_id": "60ea45ae0a6251000414b05f",
    "nome": "Destiny 2",
    "genero": "Massively multiplayer online game, First-person shooter",
    "publicacao": "Initial release date: August 28, 2017, First released: September 6, 2017, Developer: Bungie Inc, Composers: Michael Salvatori, Skye Lewin",
    "descricao": "Destiny 2 is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie. It was originally released as a pay to play game in 2017 for the PlayStation 4, Xbox One, and Microsoft Windows platforms.",
    "plataformas": "PlayStation 4, Xbox One, Google Stadia, PlayStation 5, Xbox Series S, PC",
    "__v": 0
}
```

### Dados para Collection series

- id: autogerado e obrigatório
- nome: texto e obrigatório
- genero: texto e obrigatório
- publicacao: texto e obrigatório
- descricao: texto e obrigatório
- nota: numero gerado automaticamente e obrigatório
- temporadas: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

### API deve retornar seguinte JSON:

```jsx
{
        "criadoEm": "2021-07-10T20:28:49.614Z",
        "nota": 7,
        "_id": "60ea03168ce7d6000426d2f2",
        "nome": "The Boys",
        "genero": "Action/Fiction",
        "publicacao": "First episode date: July 26, 2019, Program creator: Eric Kripke, Adapted from: The Boys, Writers: Eric Kripke, Seth Rogen, Evan Goldberg",
        "descricao": "Superheroes are often as popular as celebrities, as influential as politicians, and sometimes even as revered as gods. But that's when they're using their powers for good. What happens when the heroes go rogue and start abusing their powers? When it's the powerless against the super powerful, the Boys head out on a heroic quest to expose the truth about the Seven and Vought, the multibillion-dollar conglomerate that manages the superheroes and covers up their dirty secrets. Based on the comic book series of the same name.",
        "temporadas": "2",
        "__v": 0
}
```


<br>
<br>
