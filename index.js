import express from "express";
const app = express();
const PORT = 3000;
// Configura o EJS como motor de views
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// pasta onde ficam os arquivos .ejs
app.set("views", "./views"); 
//Liberar acesso a pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
  res.render("index");
});

/*Filmes*/

app.get("/filme", (req, res) => {
  res.render("filme-lst");
});

app.get("/filme/cadastro", (req, res) => {
  res.render("filme-cad");
});

app.post("/filme/cadastro", (req, res) => {
  const {titulo, duracao, classificacao_indicativa, ano, genero} = req.body
  res.render("filme-cadok", {titulo, duracao, classificacao_indicativa, ano, genero});
});

app.get("/filme/:detalhe", (req, res) => {
  const parametro = req.params.detalhe
  let titulo, duracao, classificacao_indicativa, ano, genero
  switch (parametro) {
    case "Panico":
      titulo = "Todo Mundo em Pânico"
      duracao = "88"
      classificacao_indicativa = "16"
      ano = "2000"
      genero = "Comedia"
      break;
    case "Branquelas":
      titulo = "As Branquelas"
      duracao = "109"
      classificacao_indicativa = "12"
      ano = "2004"
      genero = "Comedia"
      break;
    case "Halloween":
      titulo = "Halloween"
      duracao = "91"
      classificacao_indicativa = "16"
      ano = "1978"
      genero = "Terror"
      break;
  
    default:
      titulo = "Erro no parâmetro"
      duracao = ""
      classificacao_indicativa = ""
      ano = ""
      genero = ""
      break;
  }
  res.render("filme-det", {titulo, duracao, classificacao_indicativa, ano, genero});
});

/*Gêneros*/

app.get("/genero", (req, res) => {
  res.render("genero-lst");
});

app.get("/genero/cadastro", (req, res) => {
  res.render("genero-cad");
});

app.post("/genero/cadastro", (req, res) => {
  const {nome, descricao} = req.body
  res.render("genero-cadok", {nome, descricao});
});

app.get("/genero/:detalhe", (req, res) => {
  const parametro = req.params.detalhe
  let nome, descricao
  switch (parametro) {
    case "Comedia":
      nome = "Comédia"
      descricao = "Obras cinematográficas focadas em humor, situações exageradas e personagens excêntricos com o objetivo principal de divertir e provocar o riso."
      break;
    case "Terror":
      nome = "Terror"
      descricao = "Obras cinematográficas focadas em provocar sensações de medo, tensão, inquietação e susto no espectador, ele explora temas sombrios, tabus, e medos universais."
      break;
  
    default:
      titulo = "Erro no parâmetro"
      duracao = ""
      classificacao_indicativa = ""
      ano = ""
      genero = ""
      break;
  }
  res.render("genero-det", {nome, descricao});
});

app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
});
