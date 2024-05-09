import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

Given('website given to Sign up',function(){
    cy.visit("https://uat-vbexplore.brainsightai.com/register")
})
When('Enter Valid inputs and check the checkboxes',function(){
    cy.get('.reg-form-content-button').eq(0).should('be.disabled')
    cy.get('#__BVID__11').type('Laxmi')
    cy.get('#__BVID__12').type('Priya')
    cy.get('#__BVID__13').type('laxmipriya8@gmail.com')
    cy.get('#password').type('Laxmi@123')
    cy.get('#confirmpassword').type('Laxmi@123')
    cy.get('#checkbox-1').check({force : true}).should('be.checked')
    cy.get('#checkbox-2').check({force : true}).should('be.checked')
})
Then('Verify the signup button is enabled and click the signup button',function(){
    cy.get('.reg-form-content-button').eq(0).should('be.enabled')
    cy.get('.reg-form-content-button').eq(0).click()
})
Then('veirfy the sign up is success',function(){
    cy.get('.row').eq(7).should('contain','Verification')
    cy.get('.reg-form-content-button').eq(1).should('have.text'," Know more about VoxelBox Explore ")
})   

