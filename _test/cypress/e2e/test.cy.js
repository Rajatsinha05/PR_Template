describe("Custom Server Tests", () => {

  it("Should load login page correctly", () => {
    cy.visit("http://localhost:8091/login");
 
 
    // Add assertions specific to login page
  });

  
  it("Should load homepage correctly", () => {
    cy.visit("http://localhost:8091");
 
 
    // Assert title
    cy.get("#title").should("contain", "Your Website Name");
 
 
    // Assert image
    cy.get("#img").should("be.visible");
 
 
    // Assert grid
    cy.get("#grid").should("exist");
 
 
    // Assert course
    cy.get("#course").should("exist");
  });
 
 
  
 
 
  it("Should load signup page correctly", () => {
    cy.visit("http://localhost:8091/signup");
 
 
    // Add assertions specific to signup page
  });
 
 
  it("Should load contact page correctly", () => {
    cy.visit("http://localhost:8091/contact");
 
 
    // Add assertions specific to contact page
  });
 
 
  it("Should load service page correctly", () => {
    cy.visit("http://localhost:8091/service");
 
 
    // Add assertions specific to service page
  });
 });
 