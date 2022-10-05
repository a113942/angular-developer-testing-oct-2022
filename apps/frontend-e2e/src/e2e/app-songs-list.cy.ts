describe('The Songs List', () => {
  beforeEach(() => {
    cy.visit('/songs/list');
  });
  describe('The Initial State', () => {
    it('should display the list component', () => {
      cy.get('[data-testid="songs"]')
        .find('[data-testid="list"]')
        .should('exist');
    });
  });

  describe('Data Scenarios', () => {
    describe('Happy Path', () => {
      describe('Songs are Displayed Properly', () => {
        it('displays two songs', () => {
          cy.get('[data-testid="songs"]')
            .find('[data-testid="list"]')
            .find('li')
            .should('have.length', 2);
        });
      });
    });
  });
});
