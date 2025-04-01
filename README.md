# 🕹️ Gam3r Store

<div align="center">
<img src="https://github.com/portfolio-projetos-dev/gam3r-store/raw/main/.gitassets/capa.png" width="350" />

<div data-badges>
    <img src="https://img.shields.io/github/stars/portfolio-projetos-dev/gam3r-store?style=for-the-badge" alt="GitHub stars" />
    <img src="https://img.shields.io/github/forks/portfolio-projetos-dev/gam3r-store?style=for-the-badge" alt="GitHub forks" />
    <img src="https://img.shields.io/github/issues/portfolio-projetos-dev/gam3r-store?style=for-the-badge" alt="GitHub issues" />
</div>

<div data-badges>
    <img src="https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/prisma-%232D3748.svg?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/jwt-%23323330.svg?style=for-the-badge&logo=json-web-tokens&logoColor=pink" alt="JWT" />
   <img src="https://img.shields.io/badge/turborepo-%23000000.svg?style=for-the-badge&logo=turborepo&logoColor=white" alt="Turborepo" />
   <img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" />
   <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
</div>
</div>

Gam3r Store é uma plataforma de e-commerce especializada em tecnologia, oferecendo uma ampla seleção de produtos que vão desde gadgets e acessórios modernos até equipamentos de alta performance projetados para gamers. Com foco em inovação, qualidade e uma experiência excepcional, a Gam3r Store é o destino ideal para quem busca as últimas tendências tecnológicas e soluções avançadas para o universo gamer.

## 🖥️ Como rodar este projeto 🖥️

### Requisitos:

- Node.js instalado
- PostgreSQL configurado

### Execução:

1. Clone este repositório:

   ```sh
   git clone https://github.com/WeltonAM/gam3r_stor3_project
   ```

2. Acesse o diretório do projeto:

   ```sh
   cd gam3r-store
   ```

3. Instale as dependências com o comando a seguir na pasta raiz do projeto:

   ```sh
   yarn install
   ```

4. Configure as variáveis de ambiente:

   Será necessário criar um arquivo `.env` com as mesmas variáveis de ambiente listadas no arquivo `.env.example` nas pastas `apps/frontend` e `apps/backend`. Cada um desses arquivos deverá ser preenchido com as variáveis de ambiente correspondentes e exemplificadas no arquivo `env.example` de cada pasta.

5. Execute as migrações do banco rodando o comando a seguir na pasta prisma que se localiza dentro da pasta `app/backend`:

   ```sh
   npx prisma migrate dev
   ```

6. Inicie a aplicação rodando o comando `yarn dev` na pasta raiz da sua aplicação. Esse comando iniciará todos os projetos da sua aplicação.

7. O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

## 🗒️ Features do projeto 🗒️

- Catálogo de produtos dinâmico
- Carrinho de compras e checkout integrado
- Gerenciamento de pedidos e pagamentos
- Filtros de produtos por categoria, preço e avaliação
- Integração com múltiplos métodos de pagamento
- Design responsivo

![](https://github.com/portfolio-projetos-dev/gam3r-store/raw/main/.gitassets/2.jpg)

![](https://github.com/portfolio-projetos-dev/gam3r-store/raw/main/.gitassets/3.jpg)

![](https://github.com/portfolio-projetos-dev/gam3r-store/raw/main/.gitassets/4.jpg)

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com ❤️ por [WeltonAM](https://github.com/WeltonAM)
