# NodeJS-Challenge-Vehicle

projeto desenvolvido como teste para a empresa: **Oficina5**. Projeto é uma API REST, com o tema proposto de veículo, usando NodeJS e para a persistência de dados MySQL.

### Requisitos
Para usar o projeto, deve-se ter os seguintes requisitos:
* NODE
* NPM ou YARN
* MySql

### MySQL
Defina as variáveis de acordo com o seu ambiente.
env.exemplo 

| ENV               | Default          |
|-------------------|------------------|
| PORT              | 3000             |
| DATABASE_USER     | root             |
| DATABASE_PASSWORD | root             |
| DATABASE_HOST     | 127.0.0.1        |
| DATABASE_PORT     | 3306             |
| DATABASE          | VeiculoDatabase  |

### Executando
Clone o projeto em sua pasta desejada

Crie uma database veiculo no MySQL
```
CREATE SCHEMA `veiculo` DEFAULT CHARACTER SET latin1 COLLATE latin1_general_ci ;
```

```
cd NodeJS-Challenge-Vehicle
```

```
yarn install
```

```
yarn dev
```

### Rotas

| Method               | Path                                             | Description                         |
|----------------------|--------------------------------------------------|-------------------------------------|
| GET                  | /veiculo                                         | Buscar todos os veículos            |
| GET                  | /veiculo/:id                                     | Buscar veículo por ID               |
| POST                 | /veiculo                                         | Criar um novo veículo               |
| PUT                  | /veiculo/:id                                     | Atualizar um veículo                |
| DELETE               | /veiculo/:id                                     | Deletar um veículo por ID           |


## Author
[Uillian Amaral](https://github.com/uillianamaral) 
