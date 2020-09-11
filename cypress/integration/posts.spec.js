context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('loads 5 posts and creates a new post', () => {
    cy.get('#posts').children().should('have.length', 5)

    cy.get('#title-input').type('post title')
    cy.get('#body-input').type('post body')
    cy.get('#submit-input').click()

    cy.get('#posts')
      .children()
      .first()
      .should('contain', 'post title')
      .should('contain', 'post body')
      .should('have.descendants', '.post-id')
  })
})
