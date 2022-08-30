# <h1 align="center">![Finances](.github/logo.svg)</h1>

Finances é uma aplicação Web com o objetivo de controlar suas finanças, permitindo que você cadastre entradas, saídas e categorize-as de uma forma organizada!

# 💻 Rodando a aplicação

## 🐳 Usando docker-compose para subir a aplicação em container

#### Requisitos

- Docker ([Docker](https://docs.docker.com/engine/install/ubuntu/))
- Docker-Compose ([Docker-Compose](https://docs.docker.com/compose/install/))

**Executar o comando**

```sh
# Executar com os logs no terminal
docker-compose up

# Executar em segundo plano
docker-compose up -d
```

**Abrir a aplicação no navegador**
```sh
http://localhost:3000/
```

## 💪🏻 Local
#### Requisitos

- NodeJS
- Yarn
- Uma instância de Postgres ([Docker](https://hub.docker.com/_/postgres))

**Instale as dependencias**

```sh
cd <frontend ou backend>

yarn
```

**Inicie o processo**

#### Frontend

```sh
cd frontend

yarn start
```

#### Backend

**Certifique-se de que o container do Postgres esteja rodando**

```sh
docker run --name finances-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=p0stgr3s -e POSTGRES_DB=finances -p 5432:5432 -d postgres
```

**Rode as migrations**

```sh
cd backend

yarn typeorm migration:run
```

**Inicie o processo**

```sh
yarn dev:server
```
