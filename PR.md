Para começar, criei o programa `converttojson.py` que converteu o ficheiro `contratos2024.csv` para JSON.

Para importar o ficheiro JSON para o MongoDB, foi utilizado o ficheiro `docker-compose.yml`.
Para executar, utilizei o comando `docker-compose up -d`.

Para responder às queries, usei o comando `docker run -it --network host mongo mongosh "mongodb://localhost:27017"`. 
De seguida, fiz `use contratos` e depois os respetivos comandos.

Para utilizar cada pasta é preciso executar o comando `npm install` em cada uma.
Para o `ex1` é também preciso instalar o Mongoose através do comando `npm install mongoose`, e para o `ex2` é necessário o Axios (`npm install axios`).

Para executar cada serviço, utilize `npm start` (alterar para a diretoria que pretende utilizar antes).
