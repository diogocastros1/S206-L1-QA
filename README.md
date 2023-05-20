# S206-L1 | Qualidade de Software
Repositório para entrega dos exercícios de S206 - Qualidade de Software.

## Ambiente de Desenvolvimento
Git Bash (Git for Windows - mais leve) https://gitforwindows.org/

Nodejs (node): https://nodejs.org/en/

JDK (java): https://www.oracle.com/java/technologies/javase-downloads.html

Maven (mvn) https://maven.apache.org
## Resumo
É um boa prática criar testes independentes, por exemplo, caso tenha criado um usuario para validar o registro de usuario, não se deve utilizar este mesmo usuario para executar um teste de login, pois pode quebrar em alguma parte e ser mais moroso para encontrar a falha.
## Cypress
Utilizado para testes de interface (usuario).
### Instalação
~~~
npm install cypress
~~~
### Executando o Cypress
~~~
./node_modules/.bin/cypress open
~~~

- Ajustei o script do package.json para iniciar com o `npm test`.

### Comandos úteis

Criar o diretório inicial e indicar para o node que o diretório é um projeto
~~~
npm init
~~~

Baixar as dependencias do projeto (caso já tenha baixado o código do git)
~~~
npm install
~~~

Abrir cypress pela linha de comando:
~~~
./node_modules/.bin/cypress open
~~~

Rodar specs por linha de comando:
~~~
./node_modules/.bin/cypress run --spec 'cypress/integration/aula_inatel/**/'
~~~
Para gerar um report HTML, siga os 3 comandos abaixo:

1. Adicionando as dependências necessárias para gerar o reporte de testes:
~~~
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator 
~~~

2. Fazendo merge dos arquivos .json gerados (Após a execução dos testes):
~~~
npx mochawesome-merge "cypress/reports/*.json" > mochawesome.json 
~~~

3. Gerando o HTML bonito com os reports:
~~~
npx marge mochawesome.json 
~~~
## Karate
Utilizado para testes de integração (API)

### Instalação
Instalar o Karate na pasta do projeto, para isto, devemos utilizar o GIT Bash pois o powershell tem algumas particularidades e não consegue executar.
~~~
mvn archetype:generate \
-DarchetypeGroupId=com.intuit.karate \
-DarchetypeArtifactId=karate-archetype \
-DarchetypeVersion=1.0.1 \
-DgroupId=aula.inatel \
-DartifactId=aula_inatel
~~~
### Executando o Karate

Executar um teste a partir do Runner ou suíte:
~~~
mvn test –Dtest=NomeDaClasse
~~~

Executar testes separados por tags:
~~~
mvn test -Dkarate.options="--tags @tag”
~~~

Para ignorar alguma tag:
~~~
mvn test -Dkarate.options="--tags ~@tag" 
~~~
Todas as tags podem ser configuradas na classe da suíte de testes.

### Relatório de teste
Assim como o Cypress o Karate tambem gera um HTML para apresentação dos testes, este fica na pasta abaixo:

~~~
 target/karate-reports/{nome_do_package}.{nome_do_arquivo}
~~~