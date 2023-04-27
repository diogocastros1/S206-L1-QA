// Linha para que a ide entenda o cypress
/// <reference types="cypress"/>

describe('Criando cenario de testes para o site globalsqa', () => {
  it.skip('Caso de teste: Registrando usuarios no site com sucesso', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click() // função para clicar em um botão, para qual elemento 
    // selecionar, basta inspecionar a pagina com o cypress
    cy.get('#firstName').type('Inatel')
    cy.get('#Text1').type('Tecnologias')
    cy.get('#username').type('inatel')
    cy.get('#password').type('tecnologias')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful') // contain.text -> contem este texto e algo mais
  })

  it.skip('Caso de teste: Registrando usuario com falha (faltando senha)', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('Inatel')
    cy.get('#Text1').type('Tecnologias')
    cy.get('#username').type('inatel')
    cy.get('#password').type('tecnologias')
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text', 'Password is required') // have.text -> texto especifico
    cy.get('.btn-primary').should('be.disabled')
  })

  it('Caso de teste: Efetuando login com sucesso', () => {
    let info = criarUsuario()

    cy.get('#username').type(info.usuario)
    cy.get('#password').type(info.senha)
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('have.text', `Hi ${info.usuario}!`)
  })
})

function criarUsuario() {
  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let usuario = horas + minutos + seg + 'Id'
  let senha = horas + minutos + seg + 'Senha'
  let infoUsuario = {usuario, senha}

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click() // função para clicar em um botão, para qual elemento 
  // selecionar, basta inspecionar a pagina com o cypress
  cy.get('#firstName').type(usuario)
  cy.get('#Text1').type(usuario)
  cy.get('#username').type(usuario)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful') // contain.text -> contem este texto e algo mais

  return infoUsuario

}