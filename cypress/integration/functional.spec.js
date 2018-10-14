describe('Membership price page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Finds membership price cards', () => {
    cy.get('.card').should('have.length', 4);
  });

  // CARD #1
  it('Finds title in first membership price card', () => {
    cy.get('.card').first().find('.title').contains('Wellness Basic');
  });
  it('Finds price in first membership price card', () => {
    cy.get('.card').first().find('.price').contains('€ 4,99');
  });
  it('Finds options list in first membership price card', () => {
    cy.get('.card').first().find('ul.options-list li')
    .should(($lis) => {
      expect($lis).to.have.length(6)
      expect($lis.eq(0)).to.contain('Unlimited Access to Wellness Club')
      .and.to.have.class('active')
      expect($lis.eq(1)).to.contain('Free Fitness Training')
      expect($lis.eq(2)).to.contain('Free Wifi')
      expect($lis.eq(3)).to.contain('Unlimited Use of Hydromassage')
      expect($lis.eq(4)).to.contain('Book classes 8 days in advance')
      expect($lis.eq(5)).to.contain('Free friend access')
    })
  });
  it('Finds button in first membership price card', () => {
    cy.get('.card').first().find('.button')
    .contains('Subscribe to Basic');
  });

  // CARD #2
  it('Finds title in second membership price card', () => {
    cy.get('.card').first().next().find('.title').contains('Wellness Silver');
  });
  it('Finds price in second membership price card', () => {
    cy.get('.card').first().next().find('.price').contains('€ 6,99');
  });
  it('Finds options list in second membership price card', () => {
    cy.get('.card').first().next().find('ul.options-list li')
    .should(($lis) => {
      expect($lis).to.have.length(6)
      expect($lis.eq(0)).to.contain('Unlimited Access to Wellness Club')
      .and.to.have.class('active')
      expect($lis.eq(1)).to.contain('Free Fitness Training')
      .and.to.have.class('active')
      expect($lis.eq(2)).to.contain('Free Wifi')
      .and.to.have.class('active')
      expect($lis.eq(3)).to.contain('Unlimited Use of Hydromassage')
      expect($lis.eq(4)).to.contain('Book classes 8 days in advance')
      expect($lis.eq(5)).to.contain('Free friend access')
    })
  });
  it('Finds button in second membership price card', () => {
    cy.get('.card').first().next().find('.button')
    .contains('Subscribe to Silver');
  });

  // CARD #3
  it('Finds title in third membership price card', () => {
    cy.get('.card').first().next().next().find('.title').contains('Wellness Gold');
  });
  it('Finds title in third membership price card', () => {
    cy.get('.card').first().next().next().find('.price').contains('€ 8,99');
  });
  it('Finds options list in third membership price card', () => {
    cy.get('.card').first().next().next().find('ul.options-list li')
    .should(($lis) => {
      expect($lis).to.have.length(6)
      expect($lis.eq(0)).to.contain('Unlimited Access to Wellness Club')
      .and.to.have.class('active')
      expect($lis.eq(1)).to.contain('Free Fitness Training')
      .and.to.have.class('active')
      expect($lis.eq(2)).to.contain('Free Wifi')
      .and.to.have.class('active')
      expect($lis.eq(3)).to.contain('Unlimited Use of Hydromassage')
      .and.to.have.class('active')
      expect($lis.eq(4)).to.contain('Book classes 8 days in advance')
      expect($lis.eq(5)).to.contain('Free friend access')
    })
  });
  it('Finds button in third membership price card', () => {
    cy.get('.card').first().next().next().find('.button')
    .contains('Subscribe to Gold');
  });

  // CARD #4
  it('Finds title in fourth membership price card', () => {
    cy.get('.card').last().find('.title').contains('Wellness Platinum');
  });
  it('Finds title in fourth membership price card', () => {
    cy.get('.card').last().find('.price').contains('€ 10,99');
  });
  it('Finds options list in fourth membership price card', () => {
    cy.get('.card').last().find('ul.options-list li')
    .should(($lis) => {
      expect($lis).to.have.length(6)
      expect($lis.eq(0)).to.contain('Unlimited Access to Wellness Club')
      .and.to.have.class('active')
      expect($lis.eq(1)).to.contain('Free Fitness Training')
      .and.to.have.class('active')
      expect($lis.eq(2)).to.contain('Free Wifi')
      .and.to.have.class('active')
      expect($lis.eq(3)).to.contain('Unlimited Use of Hydromassage')
      .and.to.have.class('active')
      expect($lis.eq(4)).to.contain('Book classes 8 days in advance')
      .and.to.have.class('active')
      expect($lis.eq(5)).to.contain('Free friend access')
      .and.to.have.class('active')
    })
  });
  it('Finds button in fourth membership price card', () => {
    cy.get('.card').last().find('.button')
    .contains('Subscribe to Platinum');
  });
});
