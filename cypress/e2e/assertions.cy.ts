/// <reference types="cypress" />

it('learning assertions',function(){
cy.visit('https://example.cypress.io/')
cy.contains('get').click()
cy.get('#query-btn',{timeout:6000}).should('contain','Button')
cy.get('#query-btn').should('have.class','query-btn').should('be.visible').should('be.enabled')
cy.get('#query-btn').invoke('attr','id').should('equal','query-btn')
// chaining assertions
cy.get('#query-btn').should('contain','Button').and('have.class','query-btn')

// explicit assertions
expect(true).to.be.true
let name="aman"
expect(name).to.be.equal('aman')
expect(name).to.not.equal('sukritan')
// assert
assert.equal(4,5,"not equal")
assert.strictEqual(4,4,' strictly equal')
})