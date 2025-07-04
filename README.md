# Sistemas_votaciones
Prueba Técnica

INSTRUCCIONES PARA EJECUCIÓN EN LOCAL
1. Instalar Node Js: https://nodejs.org/en
2. Clonar repositorio
3. En la terminal de Editor de código ejecutar: npm init -y
4. npm i express
5. npm i mongoose
6. En package.json dentro de scripts agregar:
"start": "node --watch src/server.js",
"env": "node --env-file .env src/server.js"
