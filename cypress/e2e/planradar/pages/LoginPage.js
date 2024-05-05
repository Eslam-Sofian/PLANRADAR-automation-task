class LoginPage{
    Login(Email,Password){
       // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `type` to fill the selected input,
    //next line we used it to fill email in email input
    cy.get("#email").type(Email)
    //this line we use it click on continue button to show password input 
    cy.get(".btn-block.btn-fetching-edge").click()
    //this line we use to fill password in password input
    cy.get("#password").type(Password);
    //next line we will click on login button
    cy.get(".btn-block.btn-fetching-edge.btn.btn-success").click()
    }

  }
  export default LoginPage