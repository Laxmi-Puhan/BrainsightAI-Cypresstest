import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('website given to Sign up',function(){
    cy.visit("https://uat-vbexplore.brainsightai.com/register")
})
When('user entered valid password in confirm password field that does not match wuth password field',function(){
    cy.get('.reg-form-content-button').eq(0).should('be.disabled')
    cy.get('#__BVID__11').type('Laxmi')
    cy.get('#__BVID__12').type('Priya')
    cy.get('#__BVID__13').type('laxmipriya02@gmail.com')
    cy.get('#password').type('Laxmi01@priya')
    cy.get('#confirmpassword').type('Laxmi03@priya')
    cy.get('#checkbox-1').check({force : true}).should('be.checked')
    cy.get('#checkbox-2').check({force : true}).should('be.checked')
})
Then('Verify confirm password field highlighted with red and still sign up button is disabled',function(){

    cy.get('#confirmpassword').should('have.class',"red-border")
    cy.get('.reg-form-content-button').eq(0).should('be.disabled')
})



