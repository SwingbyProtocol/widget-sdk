describe('All', () => {
  it('renders all versions', () => {
    cy.viewport(1000, 1300);
    cy.visit('/examples/all');
  });
});
