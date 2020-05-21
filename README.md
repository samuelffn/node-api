# node-api
Projeto básico para estudo do NodeJs  
  
# comandos para criação do projeto  
1- mkdir node-api (nome do diretório do projeto)  
2- cd node-api  
3- npm init -y (comando para criação do projeto)  
4- ls  
  
# comando para executar o projeto  
node server.js  

# acessar o projeto pelo navegador  
ip_da_aplicacao:porta  
Ex.:  
localhost:3001  

# nodemon
Dependência para ser utilizada apenas no ambiente de desenvolvimento.  
Ela faz com que ao salvar alguma alteração o servidor faça a atualização semprecisar parar e executar novamente.  
Utilização:  
1) Acessa o package.json  
2) Em scripts, cria uma nova propriedade: "dev": "nodemon serve.sj"  
3) No terminal executa a aplicação usando o comando: npm run dev  
Obs.: O npm run serve para executar os comandos que estão em script  

# dependências  
npm install express  
npm install -D nodemon 
