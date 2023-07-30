import express from "express";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get("/", async (req, res) => {
  // Leer el argumento de línea de comandos que representa el nombre de la carpeta
  const folderName = "ch";

  // Generar el archivo JSON estático
  const data = {
    saludo: "Hola mundos",
    // Aquí puedes agregar otros datos que desees guardar en el archivo JSON
  };

  const jsonData = JSON.stringify(data, null, 2);

  const jsonFolder = join(__dirname, `../src/translations/${folderName}`);
  await fs.mkdir(jsonFolder, { recursive: true });

  const filePath = join(jsonFolder, "global.json");
  await fs.writeFile(filePath, jsonData);

  res.send("Archivos JSON estáticos generados correctamente.");
});

const port = 3005;
app.listen(port, () => {
  console.log(
    `Servidor de SSR para generación de JSON estáticos activo en http://localhost:${port}`
  );
});
