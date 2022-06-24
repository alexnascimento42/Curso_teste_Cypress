/// <reference types="Cypress" /> 

import loc from '../../support/locators' //comando para importar loctors do documento suporte para variavel loc
import '../../support/commandsConta' //comando para importa do documento commandsConta

describe('Work with alerts', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/') //Comando para acessar pagina
    })

    it('Login', () => {
        cy.login('abcd', '1234') //acessar comandos - commands
        cy.resetApp() //acessar comandos - commands
      //cy.get(loc.LOGIN.USER).type('abcd') //comando para inclusão do usuario (email)
      //cy.get(loc.LOGIN.PASSWORD).type('1234')//comando para inclusão do password (senha)
      //cy.get(loc.LOGIN.BTN_LOGIN).click() //comando para clicar no botão
      //cy.get(loc.MESSAGE).should('contain', 'Bem vindo') //verifica se  contem a mensagem, nesse caso 'Bem vindo'*/
    })

    it('Inserindo conta', () => {
        cy.acessarMenuContas() //acessar comandos de conta - commandsConta
        cy.inserirContas('123456') //acessar comandos de conta - commandsConta
       //cy.get(loc.MENU.SETTINGS).click()  //comando para clicar em configurações
       //cy.get(loc.MENU.COUNT).click() //commando para clicar em contas
       //cy.get(loc.CONTA.NOME).type('12345')//comando para inclusão de conta
       //cy.get(loc.CONTA.BTN_SALVAR).click() //comando para clicar no botão
       //cy.get(loc.MESSAGE) //verifica se  contem a mensagem
    })

    it('Alterar conta', () => {
      cy.acessarMenuContas() //acessar comandos de conta - commandsConta
        //cy.get(loc.MENU.SETTINGS).click() //comando para clicar em configurações
        //cy.get(loc.MENU.COUNT).click() //commando para clicar em contas
        cy.get(loc.CONTA.BTN_ALTERAR).click() //comando para clicar no botão editar
        cy.get(loc.CONTA.NOME) // campo novo nome
          .clear() // comando para limpar o campo nome
          .type('001278-0') // comando para incluir um novo nome da conta
        cy.get(loc.CONTA.BTN_SALVAR).click() // comando clicar botão
        cy.get(loc.MESSAGE).should('contain','Conta atualizada com sucesso!') //verifica se  contem a mensagem
    })

    it('Não deve criar uma conta com o mesmo nome', () => {
      cy.acessarMenuContas() //acessar comandos de conta - commandsConta

      cy.get(loc.CONTA.NOME).type('001278-0') // nome da conta
      cy.get(loc.CONTA.BTN_SALVAR).click() //clicar no botão salvar para salvar alterações da conta
      cy.get(loc.MESSAGE).should('contain', 'code 400') // mensagem apos alterações
    })

    it('Deve criar uma transação',() => {
      cy.get(loc.MENU.MOVIMENTACAO).click() // acessar o menu de movimentação
      cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Descrição') //incluir a descrição da movimentação
      cy.get(loc.MOVIMENTACAO.VALOR).type('123') //valor da movimentação
      cy.get(loc.MOVIMENTACAO.INTERESADO).type('Intere') //interessado pela movimentação
      cy.get(loc.MOVIMENTACAO.STATUS).click() //clicar no status da mesma
      cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()//salvar a movimentação
      cy.get(loc.MESSAGE).should('contain', 'sucesso')// deve confirma a mensagem de "sucesso"
      
      cy.get(loc.EXTRATO.LINHAS).should('have.length',7 )//verficar quantas movimentações existem
    })

    it('Deve pegar o saldo', () => {
      cy.get(loc.MENU.HOME).click() //clicar no menu home
      cy.get(loc.SALDO.SALDOCONTA).should('contain', '123')// deve  verificar se contem o valor
    })

    it('Deve remover movimentação', () => {
      cy.get(loc.MENU.EXTRATO).click() //clicar no meu extrato
      cy.get(loc.EXTRATO.REMOVER_ELEMENTO).click() // clicar no botão remover elemento
      cy.get(loc.MESSAGE).should('contain', 'sucesso!') //verificar mensagem
      
    })
})   