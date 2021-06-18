import "cypress-axe";

beforeEach(() => {
  cy.visit("http://localhost:8080");
  cy.injectAxe();
});

describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });

  it("goes to the homepage", () => {
    // cy.configureAxe({
    //   branding: {
    //     brand: String,
    //     application: String
    //   },
    //   reporter: "option",
    //   checks: [Object],
    //   rules: [Object],
    //   locale: Object
    // });
    cy.checkA11y();
  });
});
