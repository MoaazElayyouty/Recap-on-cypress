class HauptSeite { 


    // Methods to Call 

gültigeRegistirierung(){ 

    // cy.viewport('iphone-xr')

cy.fixture('LoginData.json').then((Users) =>{
    Users.forEach((user) =>{ 

        cy.visit('/register');
        cy.get('#gender-male').click();
        cy.get('#FirstName').type('Osker');
        cy.get('#LastName').type('Jass');
        cy.get('[name="Email"]').type(user.email);
        cy.get('#Password').type(user.password)        
        cy.get('#ConfirmPassword').type(user.password);
        cy.get('#register-button').click();
        cy.get('.result').should('contain','Your registration completed');
        cy.get('[value="Continue"]').click();
        cy.get('.ico-logout').click()

    })
})
}               



ungültigeRegistrierung() {
    cy.fixture('ValidUser.json').then((loginData) => {
      cy.visit('/register');
      cy.get('#gender-male').click();
      cy.get('[name="FirstName"]').type('Moaaz');
      cy.get('#LastName').type('Elayyouty');
      cy.get('#Email').type(loginData.email);
      cy.get('[name="Password"]').type(loginData.password);
      cy.get('#ConfirmPassword').type(loginData.password);
      cy.get('#register-button').click();
      cy.get('.validation-summary-errors > ul > li').should('contain', "The specified email already exists");
    });
  }



  login(){ 
  cy.fixture('ValidUser').then((Login)=> { 
  cy.visit('/login'); 
  cy.get(' [name="Email"]').type(Login.email); 
  cy.get('.password').type(Login.password); 
  cy.get('[type="checkbox"]').check(); 
  cy.get('[value="Log in"]').click(); 
  cy.get('.account').should('contain','z123achil2les43881@haanhwedding.com');

  })}

  logout(){ 
 cy.get('.ico-logout').click(); 
 cy.get('.ico-login').should('contain', 'Log in'); 
}



ungültigRegister(){
    
    cy.fixture('LoginData.json').then((benutzer) => {

    benutzer.forEach((kunde) => {

        cy.visit('/register');
        cy.get('#gender-male').click();
        cy.get('#FirstName').type('Osker');
        cy.get('#LastName').type('Jass');
        cy.get('[name="Email"]').type(kunde.email);
        cy.get('#Password').type(kunde.password);
        cy.get('#ConfirmPassword').type(kunde.password);
        cy.get('#register-button').click();

    });
})}; 


}











export default HauptSeite; 
