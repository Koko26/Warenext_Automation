/// <reference types= "cypress" />
describe(' Regression TestSuite', function()
{
it('Validate that Vehicle Manager can login to Warenext successfully', function() {
//Opens the Warenext url
cy.visit('https://app-dev.warenext.ng/')
//Inputs Warenext username
cy.get('[name="username"]').type('vehiclemanager@warenext.com')
//Inputs Warenext password
cy.get('[style="position: relative; width: 100%;"] > .input').type('test1234')
//Clicks the Log in button
cy.get('.sc-emmjRN').click()

//Assertions for Warenext Vehicle Manager Sign In acceptance criterias:

if(
  //Dashboard 
  cy.get(':nth-child(1) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),
  //Shipments
  cy.get(':nth-child(2) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),
  //Drivers
  cy.get(':nth-child(3) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),
  //Vehicles
  cy.get(':nth-child(4) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),
  //Pricing Sheets
  cy.get(':nth-child(5) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),
  //Delivery Zones
  cy.get(':nth-child(6) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),
  //Add New Vehicle
  cy.get('.sc-cEvuZC > :nth-child(2) > .sc-iwsKbI').should('exist'),
  //Add New Driver
  cy.get('.sc-cEvuZC > :nth-child(3)').should('exist'),
  //Manage Users
  cy.get('.sc-cEvuZC > :nth-child(4)').should('exist'),
  //Vehicle Manager Image
  cy.get('.sc-dUjcNx').should('be.visible'),
  //Vehicle Manager Username
  cy.get('.fRGiWk > .sc-gzVnrw').should('be.visible'),
  //Settings
  cy.get(':nth-child(7) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible')
  )
{
  cy.log('Test passed')
} 
else {
  cy.log('Test failed')
}

})

}) 