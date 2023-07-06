describe('trying out deckstainhelp', () => {
  it('navigates correctly to the restore a deck review', () => {
    cy.visit('https://www.deckstainhelp.com/')
    cy.get('a[title="Restore-A-Deck Wood Stain Review"]:visible').first().click()
    cy.get('h1').should('include.text', 'Restore-A-Deck Wood Stain Review')
  })

  it('navigates correctly to the Top rated product review', () => {
    cy.visit('https://www.deckstainhelp.com/')
    cy.get('a[title="Find the Best Wood Deck Stain: Top-Rated Products for All Needs"]:visible').first().click()
    cy.get('h1').should('include.text', 'Find the Best Wood Deck Stain: Top-Rated Products for All Needs')
  })

  it('navigates correctly to the about deck stain', () => {
    cy.visit('https://www.deckstainhelp.com/')
    cy.get('a[href="https://www.deckstainhelp.com/about-deckstainhelp-com/"]:visible').first().click()
    cy.get('h1').should('include.text', 'About DeckStainHelp.com')
  })
})