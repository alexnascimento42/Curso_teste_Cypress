/// <reference types="Cypress" /> 

describe('Work with alerts', () => {
  before(() => {
    
  })

  beforeEach(() => {

  })

  it('Inserindo conta', () => {

    cy.getToken('abcd', '1234')
    .then(token => {
      cy.request({
        url: 'https://barrigarest.wcaquino.me/contas',
        method: 'POST',
        headers: {Autorization: `JWT ${token}`},
        failOnStatusCode: false,
        body: {
          nome: 'Conta via rest'
        }
  
      }).as('response')//.then(res => console.log(res))//copiar a resposta para poder acompanhar
    })
    cy.get('@response').then(res => {
      expect(res.status).to.be.equal(201)
      expect(res.body).to.have.property('id')
      expect(res.body).to.have.property('nome', 'Conta via rest')
    })
    
    })

  it('Alterar conta', () => {

  })

  it('Não deve criar uma conta com o mesmo nome', () => {

  })

  it('Deve criar uma transação', () => {

  })

  it('Deve pegar o saldo', () => {

  })

  it('Deve remover movimentação', () => {

  })
})   