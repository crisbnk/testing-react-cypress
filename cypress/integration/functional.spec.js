describe('Membership price page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Finds membership price card title', () => {
    cy.get('.card').contains('Membership Card');
  });
});
