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



app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
});
