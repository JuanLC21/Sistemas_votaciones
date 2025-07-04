# Sistemas_votaciones
Prueba Técnica

INSTRUCCIONES PARA EJECUCIÓN EN LOCAL
1. Instalar Node Js: https://nodejs.org/en
2. Clonar repositorio
3. En la terminal Visual Studio Code ejecutar: npm init -y
4. npm i express
5. npm i mongoose
6. En package.json dentro de scripts agregar:
"start": "node --watch src/server.js",
"env": "node --env-file .env src/server.js"
7. Agregar extensión Thunderclient en Visual Studio Code
8. Descargar MongoDB Shell: https://www.mongodb.com/try/download/shell
9. Descargar MongoDB Comunity Server: https://www.mongodb.com/try/download/community
10. Ubicarse desde Power Shell en el fichero bin de la descarga de MongoDB Shell: mongosh.exe
11. Ejecutar .\mongosh
12. Aparecerá "Connecting to"
13. Copiar esa dirección de "Connecting to" y reemplazar el valor de DATABASE_URI en su variable de entorno .env

TENDRÁ UN BASE LOCAL VACÍA LISTA PARA PROBAR LOS ENDPOINTS

EJEMPLO DE USO API

1.Abrir la extensión de thunderclient
![image](https://github.com/user-attachments/assets/2f599347-0446-4ce9-b52c-db0ed943b039)
