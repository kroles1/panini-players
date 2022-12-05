describe("creating user", () => {

  beforeEach(() => {
		cy.viewport(1600, 900);
	});
  
  it("opens the home page successfully", () => {
    cy.visit('http://localhost:3000/')
  })

  it("registers an account", () => {
    cy.get('.registerNav').click()
    cy.get('[placeholder="ID"]').type(4)
    cy.get('[placeholder="Username"]').type("test4")
    cy.get('[type="email"]').type("test4@test.com")
    cy.get('[placeholder="Location"]').type("London")
    cy.get('[placeholder="Password"]').type("password")
    cy.get('[placeholder="Confirm password"]').type("password")
    cy.get('[type="submit"]').click()
  })

  it("logs in", () => {
    cy.wait(1000)
    cy.get('[type="text"]').type("test4")
    cy.get('[type="password"]').type("password")
    cy.get('.submitBtn').click()
  })

})
