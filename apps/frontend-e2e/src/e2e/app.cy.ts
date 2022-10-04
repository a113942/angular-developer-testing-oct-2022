describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  describe('Routing Defaults', () => {
    it('Updates the location', () => {
      cy.url().should('match', /\/home$/); // at the end of the url ($), there should be a '/' (\/) followed by 'home'
    });
    it('Displays the Home Component', () => {
      cy.get('[data-testid="app-home"]').should('exist');
    });
  });
  it('The Header Is Set', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.get('[data-testid="app-mastheader-title"]').contains(
      'Angular Developer Testing Course'
    );
    cy.get('[data-testid="app-mastehead-subtitle"]').contains(
      'Training to be Boss Angular Developers and Testers'
    );
  });
});
