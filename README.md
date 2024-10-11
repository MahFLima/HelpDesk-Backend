# Helpdesk Backend

## Descrição

Este projeto é o backend para um sistema de helpdesk desenvolvido como parte do projeto PW3 na Etec Embu.

## Tecnologias Usadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework web para Node.js.
- **Prisma**: ORM (Object Relational Mapping) para gerenciamento de banco de dados.
- **Nodemon**: Utilitário que reinicia automaticamente o servidor quando alterações são feitas.

## Requisitos

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node)

## Instalação

Siga os passos abaixo para configurar o projeto em sua máquina local:

1. **Clone o repositório**:

   ```bash
   git clone <URL do repositório>
   cd helpdesk-backend

## 2. Instale as dependências:

Execute o seguinte comando para instalar as dependências do projeto:

  ```bash
  npm install
  ```

## 3. Configuração do Banco de Dados

### Configuração do Prisma:
Certifique-se de que o Prisma está configurado corretamente no seu projeto. Verifique o arquivo prisma/schema.prisma e ajuste as configurações de acordo com o seu banco de dados.
Migrar o banco de dados:

- Execute as migrações do Prisma para criar as tabelas no banco de dados.

```bash
npx prisma migrate dev
```

- Execução do Projeto
Para iniciar o servidor, utilize o comando abaixo:

```bash
npm run dev
```

O servidor será iniciado e estará disponível em http://localhost:3001 (ou na porta configurada).

## Scripts
- dev: Inicia o servidor com Nodemon, que reinicia automaticamente o servidor quando alterações são feitas.
- test: Comando de teste (ainda não implementado).
