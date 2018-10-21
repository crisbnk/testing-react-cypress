describe('Membership price page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('As a User I can see 4 membership info cards', () => {
    cy.get('.card').should('have.length', 4);
  });

  // Basic Membership Card
  it('As a User I can check Basic Membership info card', () => {
    cy.get('.package-basic').within(() => {
      cy.get('h3').contains('Wellness Basic');
      cy.get('.price').contains('€ 4,99');
      cy.get('ul.options-list li').should(($lis) => {
        expect($lis).to.have.length(6)
        expect($lis.eq(0)).to.contain('Unlimited Access to Wellness Club')
        .and.to.have.class('active')
        expect($lis.eq(1)).to.contain('Free Fitness Training')
        expect($lis.eq(2)).to.contain('Free Wifi')
        expect($lis.eq(3)).to.contain('Unlimited Use of Hydromassage')
        expect($lis.eq(4)).to.contain('Book classes 8 days in advance')
        expect($lis.eq(5)).to.contain('Free friend access')
      });
      cy.get('.button').contains('Subscribe to Basic');
    });
  });
  it('As a User I can purchase a Basic Membership', () => {
    cy.get('.package-basic')
    .find('.button')
    .contains('Subscribe to Basic')
    .click();

    cy.get('.checkout').within(() => {
      cy.get('h3').contains('Checkout');
      cy.get('.membership-name').contains('Basic');
      cy.get('.membership-price').contains('€ 4,99');
      cy.get('button').should(($btn) => {
        expect($btn.text()).to.contain('Complete Payment');
        expect($btn).to.have.css('background-color', 'rgb(255, 111, 116)')
      });
    });
  });

  // Silver Membership Card
  it('As a User I can check Silver Membership info card', () => {
    cy.get('.package-silver').within(() => {
      cy.get('h3').contains('Wellness Silver');
      cy.get('.price').contains('€ 6,99');
      cy.get('ul.options-list li').should(($lis) => {
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
      });
      cy.get('.button').contains('Subscribe to Silver');
    });
  });
  it('As a User I can purchase a Silver Membership', () => {
    cy.get('.package-silver')
    .find('.button')
    .contains('Subscribe to Silver')
    .click();

    cy.get('.checkout').within(() => {
      cy.get('h3').contains('Checkout');
      cy.get('.membership-name').contains('Silver');
      cy.get('.membership-price').contains('€ 6,99');
      cy.get('button').should(($btn) => {
        expect($btn.text()).to.contain('Complete Payment');
        expect($btn).to.have.css('background-color', 'rgb(0, 210, 236)')
      });
    });
  });

  // Gold Membership Card
  it('As a User I can check Gold Membership info card', () => {
    cy.get('.package-gold').within(() => {
      cy.get('h3').contains('Wellness Gold');
      cy.get('.price').contains('€ 8,99');
      cy.get('ul.options-list li').should(($lis) => {
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
      });
      cy.get('.button').contains('Subscribe to Gold');
    });
  });
  it('As a User I can purchase a Gold Membership', () => {
    cy.get('.package-gold')
    .find('.button')
    .contains('Subscribe to Gold')
    .click();

    cy.get('.checkout').within(() => {
      cy.get('h3').contains('Checkout');
      cy.get('.membership-name').contains('Gold');
      cy.get('.membership-price').contains('€ 8,99');
      cy.get('button').should(($btn) => {
        expect($btn.text()).to.contain('Complete Payment');
        expect($btn).to.have.css('background-color', 'rgb(65, 114, 254)')
      });
    });
  });

  // Platinum Membership Card
  it('As a User I can check Platinum Membership info card', () => {
    cy.get('.package-platinum').within(() => {
      cy.get('h3').contains('Wellness Platinum');
      cy.get('.price').contains('€ 10,99');
      cy.get('ul.options-list li').should(($lis) => {
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
      });
      cy.get('.button').contains('Subscribe to Platinum');
    });
  });
  it('As a User I can purchase a Platinum Membership', () => {
    cy.get('.package-platinum')
    .find('.button')
    .contains('Subscribe to Platinum')
    .click();

    cy.get('.checkout').within(() => {
      cy.get('h3').contains('Checkout');
      cy.get('.membership-name').contains('Platinum');
      cy.get('.membership-price').contains('€ 10,99');
      cy.get('button').should(($btn) => {
        expect($btn.text()).to.contain('Complete Payment');
        expect($btn).to.have.css('background-color', 'rgb(0, 255, 59)')
      });
    });
  });
});
