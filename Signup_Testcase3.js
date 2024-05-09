import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('website given to Sign up',function(){
    cy.visit("https://uat-vbexplore.brainsightai.com/register")
})
When('user entered password less than 8 length',function(){
    cy.get('.reg-form-content-button').eq(0).should('be.disabled')
    cy.get('#__BVID__11').type('Laxmi')
    cy.get('#__BVID__12').type('Priya')
    cy.get('#__BVID__13').type('laxmipriya09@gmail.com')
    cy.get('#password').type('Laxmi@1')
    cy.get('#confirmpassword').type('Laxmi@1')
    cy.get('#checkbox-1').check({force : true}).should('be.checked')
    cy.get('#checkbox-2').check({force : true}).should('be.checked')
})
Then('Verify password is not accepted and still sign up button is disabled',function(){

    cy.get('#password').should('have.class',"red-border")
    cy.get('.reg-form-content-button').eq(0).should('be.disabled')
})



