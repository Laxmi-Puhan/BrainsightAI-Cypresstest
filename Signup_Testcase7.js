import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('website given to Sign up',function(){
    cy.visit("https://uat-vbexplore.brainsightai.com/register")
})
Then('user click all links EULA, NDA, DPA, privacy policy, Terms of Use ony by one and all should open',function(){
    cy.get('.link-text').eq(0).should('contain',"EULA").click()
    cy.get('.link-text').eq(1).should('contain',"NDA").click()
    cy.get('.link-text').eq(2).should('contain',"DPA").click()
    cy.get('.link-text').eq(3).should('contain',"privacy policy").click()
    cy.get('.link-text').eq(4).should('contain',"Terms of Use").click()

})




