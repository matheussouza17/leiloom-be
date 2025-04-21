# 🧭 Radar Leilão – API Backend

API desenvolvida com NestJS para gerenciamento da plataforma Radar Leilão. Este backend segue as melhores práticas de organização, modularidade, autenticação, integração com banco de dados e documentação via Swagger.

---

## 🚀 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)** – Framework Node.js modular, moderno e escalável
- **[TypeScript](https://www.typescriptlang.org/)** – Tipagem estática e recursos modernos do JavaScript
- **[Yarn](https://yarnpkg.com/)** – Gerenciador de pacotes
- **[Prisma ORM](https://www.prisma.io/)** – ORM com tipagem segura e migrations automáticas
- **[Render](https://render.com/)** – Plataforma de deploy com CI/CD
- **(Planejado)** **Swagger** – Documentação da API REST
- **(Planejado)** **JWT + Passport** – Sistema de autenticação baseado em tokens

---

## 📁 Estrutura do Projeto

```bash
radar-leilao-be/
├── prisma/
│   └── schema.prisma       # Definição do modelo do banco de dados
│
├── src/
│   ├── app.controller.ts   # Controller padrão gerado pelo Nest
│   ├── app.module.ts       # Módulo principal da aplicação
│   ├── app.service.ts      # Serviço base
│   └── main.ts             # Arquivo de bootstrap
│
├── .env                    # Variáveis de ambiente
├── render.yaml             # Configuração de deploy automatizado
├── package.json            # Scripts e dependências
└── tsconfig.json           # Configuração do TypeScript
```


🛠️ Componentes Instalados
✅ Prisma ORM

```bash
yarn add prisma @prisma/client
yarn prisma init
```
Exemplo de schema.prisma básico:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
O arquivo .env deve conter:
DATABASE_URL=postgresql://usuario:senha@host:porta/database

✅ Deploy com Render
A aplicação está hospedada na plataforma Render.com com deploy contínuo a partir do GitHub.

Ajuste no main.ts
```ts
await app.listen(process.env.PORT || 3000);
```
Scripts de produção no package.json
```json
"scripts": {
  "start": "nest start",
  "start:dev": "nest start --watch",
  "start:prod": "node dist/main.js",
  "build": "nest build"
}
```
Arquivo render.yaml

```yaml
services:
  - type: web
    name: radar-leilao-api
    env: node
    buildCommand: yarn install && yarn build
    startCommand: yarn start:prod
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        value: your_connection_string
```

📂 Organização Modular Futuramente
```bash
src/
├── auth/             # Módulo de autenticação
├── user/             # Módulo de usuários
🧪 Testes
```
A estrutura já vem com testes de integração (e2e) configurados com Jest:

```bash
yarn test:e2e
```
