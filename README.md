# Development mode

Para ejecutar la aplicación en modo desarrollo, se deberá ejecutar el comando npm start.

Este comando sirve los assets de la aplicación sin minimizar, y ofrece al usuario un entry point en la dirección http://localhost:5173


## Production mode

Para ejecutar la aplicación en modo producción, se deberán ejecutar dos comandos:

- npm run build
  Este comando construye la aplicación para producción, minimizando y optimizando los archivos. Tras finalizar, este comando deja todos estos assets en la carpeta dist.

- npm run production
  Este comando utiliza serve para servir los archivos estáticos de la carpeta dist. Estos assets han sido previamente minimizados y concatenados por el anterior comando. Está configurado para ofrecer al usuario un entry point en la dirección http://localhost:3000

