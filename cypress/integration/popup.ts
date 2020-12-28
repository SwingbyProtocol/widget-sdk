describe('Popup', () => {
  it('opens popup', () => {
    cy.visit('/examples/popup');
    cy.get('iframe').should('not.exist');
    cy.get('#button').click();
    cy.get('iframe').should('be.visible');
    cy.get('body').click(0, 0);
    cy.get('iframe').should('not.exist');
  });
});
