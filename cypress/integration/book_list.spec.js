// / <reference types="cypress" />
before(() => {
  });
  describe('book list page', () => {
    it('should filter the list of book', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=book-item-c8fabf68-8374-48fe-a7ea-a00ccd07afff]').should('be.visible')
        cy.get('.book-list-search').should('be.visible');
        cy.get('.book-list-search').type('azka')
        cy.get('[data-cy=book-item-fcd1e6fa-a63f-4f75-9da4-b560020b6acc]').should('be.visible')
        cy.get('[data-cy=book-item-c8fabf68-8374-48fe-a7ea-a00ccd07afff]').should('not.be.visible')
    })

    it('should add 3 book in cart', () => {
      cy.visit('http://localhost:3000/');
      cy.get('.book-list-search').should('be.visible');  
      cy.get('.book-list-search').clear()
      cy.get('[data-cy=button-cart-fcd1e6fa-a63f-4f75-9da4-b560020b6acc]').should('be.visible')
      cy.get('[data-cy=button-cart-fcd1e6fa-a63f-4f75-9da4-b560020b6acc]').click()
      cy.get('[data-cy=button-cart-c8fabf68-8374-48fe-a7ea-a00ccd07afff]').should('be.visible')
      cy.get('[data-cy=button-cart-c8fabf68-8374-48fe-a7ea-a00ccd07afff]').click()
      cy.get('[data-cy=button-cart-a460afed-e5e7-4e39-a39d-c885c05db861]').should('be.visible')
      cy.get('[data-cy=button-cart-a460afed-e5e7-4e39-a39d-c885c05db861]').click()
      cy.get('[data-cy=header-cart]').should('be.visible')
      cy.get('[data-cy=header-cart]').contains('Panier (3)')
    })
    it('should have correct price with best commercial offer', () => {
      cy.get('[data-cy=header-cart]').should('be.visible')
      cy.get('[data-cy=header-cart]').click()
      cy.get('.cart-total').should('be.visible')
      cy.get('.cart-total').contains('TOTAL panier : 80 € au lieu de 95 €')
  })
  })