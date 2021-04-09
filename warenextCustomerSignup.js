function getRandom(length) {

return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
    
}

function makeEmail() { 
    var strValues="abcdefg12345"; 
    var strEmail = ""; 
    var strTmp; 
    for (var i=0;i<10;i++) { 
        strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
        strEmail = strEmail + strTmp; 
    } 
    strTmp = ""; 
    strEmail = strEmail + "@"; 
    for (var j=0;j<8;j++) { 
        strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
        strEmail = strEmail + strTmp; 
    } 
    strEmail = strEmail + ".com" 
return strEmail; 
}
   
/// <reference types= "cypress" />
describe(' Regression TestSuite', function()
{
it('Validate that Customer can Signup to Warenext successfully', function() {
//Opens the Warenext url
cy.visit('https://app-dev.warenext.ng/login')
//clicks on create account for your business
cy.get('.sc-csSMhA > a').click()
//clicks on I am a cutomer
cy.get(':nth-child(1) > a > .sc-hAcydR').click()
cy.wait(5000)
//enters firstname
cy.get('.form > :nth-child(2) > :nth-child(1) > .input').type('Joy')
// enters lastname
cy.get(':nth-child(2) > :nth-child(2) > .input').type('White')
// enters email
cy.get(':nth-child(3) > :nth-child(1) > .input').type(makeEmail())
// enters phone number 
cy.get(':nth-child(3) > :nth-child(2) > .input').type(getRandom(10))
// selects location
cy.get(':nth-child(4) > :nth-child(1) > .input').select('Nigeria')
// inputs password
cy.get(':nth-child(1) > div > .input').type('Test1234')
cy.get(':nth-child(5) > :nth-child(2) > .input').type('Test1234')
// selects how you heard about warenext
cy.get('[name="source"]').select('Other')

// clicks sign up button
cy.get('.sc-emmjRN').click()

//Assertions for Warenext SignUp Acceptance Criteria:
if(
    cy.get('.sc-daURTG').should('be.visible')
)
{
    cy.log('Test passed')
  } 
  else {
    cy.log('Test failed')
  }

})
})
