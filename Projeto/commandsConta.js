import loc from './locators'

Cypress.Commands.add('acessarMenuContas', () => {
    cy.get(loc.MENU.SETTINGS).click()  //comando para clicar em configurações
    cy.get(loc.MENU.COUNT).click() //commando para clicar em contas
})

Cypress.Commands.add('inserirContas', conta => {
    cy.get(loc.CONTA.NOME).type(conta)//comando para inclusão de conta
    cy.get(loc.CONTA.BTN_SALVAR).click() //comando para clicar no botãos
})


 
