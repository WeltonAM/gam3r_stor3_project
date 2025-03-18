# Gam3r Stor3

Bem-vindo ao repositório do **Gam3r Stor3**! Este projeto é uma aplicação full-stack para uma loja de games online.

## 🚀 Como rodar o projeto localmente

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/WeltonAM/gam3r_stor3_project.git
cd gam3r_stor3_project
```

### 2️⃣ Configuração do Backend
```bash
cd app/backend
cp .env.sample .env
```
- Configure a porta do backend no arquivo **.env**
- Configure a string de conexão do Prisma com o banco de dados no **.env**

```bash
npx prisma generate
npx yarn migrate
```

### 3️⃣ Configuração do Frontend
```bash
cd ../frontend
cp .env.local.sample .env.local
```
- Configure a URL da API do backend no **NEXT_PUBLIC_API_URL** no arquivo **.env.local**

### 4️⃣ Instalar dependências e rodar o projeto
```bash
cd ../..
yarn
yarn build
yarn run dev
```

O projeto estará rodando! 🎮

## 📜 Tecnologias Utilizadas
- **Backend:** Node.js, Prisma, PostgreSQL
- **Frontend:** Next.js, React
- **Gerenciador de pacotes:** Yarn

## 🛠 Contribuição
Sinta-se à vontade para contribuir com este projeto! Para isso:
1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b minha-feature`)
3. Commit suas mudanças (`git commit -m 'Minha nova feature'`)
4. Envie para o repositório (`git push origin minha-feature`)
5. Abra um Pull Request

## 📄 Licença
Este projeto está sob a licença MIT.

---
Desenvolvido com ❤️ por [WeltonAM](https://github.com/WeltonAM)