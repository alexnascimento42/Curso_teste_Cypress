/// <reference types="cypress" />

/* O describe agrupa testes. 
   Skip: o teste não será executado.
   O skip pode ser usado em um grupo todo.
   Only: não executa um unico teste.
   it: Dá o scopo de um teste, o corpo do teste fica dentro do it.
*/


it('Um teste externo...',() => {

})

describe.skip('Deve agrupar os testes...', () => {
    describe('Deve agrupar os testes especificos...',() => {
        it('Um teste especifico...',() => {

        })
    })

    describe('Deve agrupar os testes especificos 2...',() => {
        it('Um teste especifico...',() => {

        })
    })

    it('Um teste interno...',() => {

    })
})