const host = 'http://localhost:3000/';

//Error Boundaries
describe('GraphQL API Request Failure Tests', () => {
  beforeEach(() => {
    //visit app homepage
    cy.visit(host); 
  });

  it('should handle GraphQL API request failure', () => {
    // Intercept the GraphQL request and mock a failure response
    cy.intercept('POST', '/graphql', {
      statusCode: 500,
      body: {
        errors: [{ message: 'Internal Server Error' }],
      },
    }).as('getGraphQLData');

    // Reload the page to trigger the GraphQL request
    cy.reload();

    // Wait for the GraphQL request and verify it failed
    cy.wait('@getGraphQLData').its('response.statusCode').should('eq', 500);

    // Check that the error message is displayed
    cy.get('[data-testid="cypress-userInfo-error"]').should('exist');
  });
});

//Check the Admin radio button on click
describe('Show Zeller admins', () => {
  it('users can view the admin list', () => {
    //visit app homepage
    cy.visit(host);

    //The Admin radio button should be checked after clicking
    cy.get('input[value="Admin"]').should('exist').check().should('be.checked');

    //The user list title should contain Admin
    cy.get('[data-testid="cypress-userList-title"]').should('exist').should('contain', 'Admin');

    //The user should have a name and admin role
    cy.get('[data-testid="cypress-userList-list"]').should('exist').each(($li) => {
        cy.wrap($li).find('div').find('p').should('have.text', 'Admin');
        cy.wrap($li).find('div').find('h2').should('exist').and(($h2) => {
            expect($h2.text().trim()).to.be.a('string');
          })
      });
  })
})

describe('Show Zeller managers', () => {
  it('users can view the manager list', () => {
    //visit app homepage
    cy.visit(host); 

    //The Manager radio button should be checked after clicking
    cy.get('input[value="Manager"]').should('exist').check().should('be.checked');
      
    //The user list title should contain Manager
    cy.get('[data-testid="cypress-userList-title"]').should('exist').should('contain', 'Manager');

    //The user should have a name and manager role
    cy.get('[data-testid="cypress-userList-list"]').should('exist').each(($li) => {
        cy.wrap($li).find('div').find('p').should('have.text', 'Manager');
        cy.wrap($li).find('div').find('h2').should('exist').and(($h2) => {
            expect($h2.text().trim()).to.be.a('string');
        })
      });
  })
})