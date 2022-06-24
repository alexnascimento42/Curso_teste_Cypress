// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import cypress from 'cypress'
import loc from './locators'

Cypress.Commands.add('login', (user, passwd) => {
    cy.get(loc.LOGIN.USER).type('abcd') //comando para inclusão do usuario (email)
        cy.get(loc.LOGIN.PASSWORD).type('1234')//comando para inclusão do password (senha)
        cy.get(loc.LOGIN.BTN_LOGIN).click() //comando para clicar no botão
        cy.get(loc.MESSAGE).should('contain', 'Bem vindo') //verifica se  contem a mensagem, nesse caso 'Bem vindo'
})

Cypress.Commands.add('resetApp', () => {
    cy.get(loc.MENU.SETTINGS).click() //clicar no menu configurações
    cy.get(loc.MENU.RESET).click() // clicar para resetar
})

cypress.Commands.add('getToken', (user, passwd) => {
    cy.request({
        method: 'POST', //metodo da requisição do usuario  senha
        url: 'https://barrigarest.wcaquino.me/signin', //url usado para requisição
        body: { //corpo a requisição
          email: user,
          redirecionar: false,
          senha: passwd
        }
      }).its('body.token').should('not.be.empty') //confirmação do token o qual não pode ser nulo
      .then(token => {
        return token
      })
})