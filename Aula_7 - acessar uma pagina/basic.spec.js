/// <reference types="cypress" />

describe('Cipress basics', () => {
    it('should visit page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html') //comamdo para visitar o site
        
        //const title = cy.title()
        //console.log(title)

        cy.title().should('be.equal', 'Campo de Treinamento') //titulo da pagina
        cy.title().should('contain', 'Campo') // contem a palavra Campo

        cy.title()
        .should('be.equal', 'Campo de Treinamento') //titulo da pagina
        .and('contain', 'Campo') // contem a palavra Campo


    })

})