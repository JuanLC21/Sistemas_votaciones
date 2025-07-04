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

2. Dar clic en New Request
3. Ir a la pestaña de Headers y en la casilla header, agregar Content-Type mientras que en la casilla value, agrega application/json

![image](https://github.com/user-attachments/assets/4c2aaee2-05d3-4d86-b421-3991c0fa358e)

Luego en la URL copiar por ejemplo http://localhost:3000/candidates
"candidates", puede ser reemplazado por "voters". Sin embargo primeramente cree su primer candidato cambiando GET por POST

![image](https://github.com/user-attachments/assets/2934909e-df1d-4ffc-ae61-4096bf9cc4db)

En body puede agregar esto por ejemplo 

![image](https://github.com/user-attachments/assets/e2610bf4-ba54-4a69-a446-501766b7b99b)

Luego da clic en "send" y ha creado el primer candidato. Tambien puede hacer lo mismo con "voters" para crear un votante.
Y para crear un "voto" utilice las direcciones ID creadas para los votantes y los candidatos

![image](https://github.com/user-attachments/assets/3da62458-005c-400c-b648-98d6c8490953)

Si utiliza el ID de un votante, este quedará registrado como "has_voted:true"

![image](https://github.com/user-attachments/assets/29837411-e32e-4087-8744-16bcc7b6d6eb)
