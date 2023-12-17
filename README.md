#### Migration Practice  

- Migrating from ENS(express node sequelize) to NT(nest typeorm) Practice


> LOG 

```bash
npm install -g @nestjs/cli # not use fastify
npm i --save @nestjs/config # nest config : using dotenv serviceConfig 
npm i --save-dev webpack-node-externals run-script-webpack-plugin webpack # hot realod 
npm install --save @nestjs/swagger  # swagger 
```


</hr>

- RUN DB Container 

```bash 
docker-compose up -d
docker-compose ps
docker-compose exec maria mysql -u admin -p # input pwd 
```

