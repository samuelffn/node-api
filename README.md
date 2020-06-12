# node-api
Projeto básico de uma API para estudo com NodeJs e com o banco de dados MongoDB.  
  
## Comandos para criação do projeto  
1) mkdir node-api (nome do diretório do projeto)  
2) cd node-api  
3) npm init -y (comando para criação do projeto)  
4) ls  
  
## Comando para executar o projeto  
node server.js  
Usando o nodemon: **npm run dev**

## Acessar o projeto pelo navegador  
ip_da_aplicacao:porta  
Ex.:  **localhost:3001**  

## Dependências utilizadas no projeto  
npm install express  
npm install -D nodemon 
npm install mongoose  
npm install require-dir  
npm install mongoose-paginate
npm install cors

## nodemon  
npm install -D nodemon  
Dependência para ser utilizada apenas no ambiente de desenvolvimento.  
Ela faz com que ao salvar alguma alteração o servidor faça a atualização semprecisar parar e executar novamente.  
Utilização:  
1) Acessa o package.json  
2) Em scripts, cria uma nova propriedade: "dev": "nodemon serve.sj"  
3) No terminal executa a aplicação usando o comando: npm run dev  
Obs.: O npm run serve para executar os comandos que estão em script  

## mogoose  
npm install mongoose  
O mongoose é um ORM (Object Relacional Mapping) de bancos não relacionais.
O ORM vai emcapsular a lógica das operações do banco de dados através do código. Sendo assim não será utilizada a linguagem do banco de dados e utilizará o JavaScript para realizar operações no banco.

## require-dir  
npm install require-dir  
Todos os models criados devem ser registrados na aplicação atravéz do require. Para evitar fazer um require em todos os models da aplicação o requide-dir faz o registro de todos os models existentes.

## mongoose-paginate  
npm install mongoose-paginate  
Dependência que permite usar paginação no mogoose.  

## cors  
npm install cors  
Permite que outros endereços acessem nossa API. Isso serve pra quando nossa aplicação estão hostadada em algum servidor usando algum domínio. Basicamente ele previne o acesso de domínios que não sáo o mesmo domínio de outros softwares da nossa API.

## baixando e criando a imagem do mongodb utilizando o Docker
1) Para instalação do docker: https://www.docker.com/  
2) Verifica a versão do Docker instalado na máquina:  
    Help: docker --help  
    Mostrar só a versão: docker --version  
    Mostra todos os detalhes: docker version  
3) docker pull mongo  
    docker pull: comando utilizado para baixar a imagem do mongodb
4) docker rum --name mongodb -p 27017:27017 -d mongo  
    --name: Será o nome do container dentro do meu sistema  
    -p:  Será a porta para redirecionamento  
    27017:27017: É um exemplo de redirecionamento das portas. Toda vez que acessar a porta 27017 da ninha máquina, ele 
    redirecionará para a porta 27017 do mongodb que está instalado dentro desse container.  
    -d: mongo: Preciso informar qual imagem vou utilizar para criar esse container. Utilizamos a imagem que baixamos no 
    passo 3, mongo.  
5) Listar as imagens que estão ativas no momento: docker ps
    Comando utilizado para listar as imagens do docker e todos os detakhes da mesma.
6) Para testar o funcionamento do mongodb:
    6.1- Abre o navegador e digita: localhost: 27017
    6.2- Se tudo estiver bem, retornará algo do tipo: Its looks like you are trying to access MongoDB over HTTP on the native
    driver port.
7) Quando precisar reiniciar a máquina será necessário levantar o Docker novamente:
    7.1- Listar todas as imagens: docker ps -a
    7.2- docker start noma_da_imagem

## Robo 3T  
É um visualizador para dados do MongDB
Link: https://robomongo.org/download e escolhe a opção Robo 3T (formerly Robomongo)
Cadastrando um banco:
1) Clica em MongoDB Connections, em seguida em Create
    Em Type: Direct COnnection
    Em Name: O nome que você quizer (Coloquei MongoDB-Docker)
    Em Address: Localhost
    Em porta: 27017 (é a default, que utilizamos na criação do container)
2) Clica em Test pra testar a conexão
3) Clica em Save
4) De volta à janela do MongoDB Connections, escolhe a conesão criada e depois clica em Connect 
5) Observe que ainda não temos tabelas criadas, pois nossa API Node irá criá-las  
