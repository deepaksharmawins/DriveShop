/// <reference types="Cypress" />
describe('Header Tests', function () {
    // we can use these values to log in
    const username = 'manasbiswaswins@gmail.com'
    const password = 'Techie@1234'

    beforeEach(() => {
        cy.loginByForm(username, password);
    });

    it('should click icons on header', () => {

        //click on sidebar hamburger menu
        cy.get('.sidebar-collapse')
            .should('exist').should('be.visible')
            .click()
        cy.wait(1000);

        //click again on sidebar hamburger menu
        cy.get('.sidebar-collapse')
            .should('exist').should('be.visible')
            .click()
        cy.wait(1000);

        //click on app pop up button to show all apps
        cy.get('#appPopup')
            .should('exist').should('be.visible')
            .click()
        cy.wait(2000);

        //click on settings icon to show settings pop up
        cy.get('#settingsPopup')
            .should('exist').should('be.visible')
            .click()
        cy.wait(2000);


        //click on account drive app suite ddlb
        cy.get('#navPopup')
            .should('exist').should('be.visible')
            .click()
        cy.wait(8000);

        //click on Account in account drive app suite ddlb
        cy.get('[role="option"]').contains('Account')
            .should('exist').should('be.visible')
            .click()
             cy.wait(2000);


        // //click on account drive app suite ddlb
        // cy.get('#navPopup')
        //     .should('exist').should('be.visible')
        //     .click()
        // cy.wait(8000);

        // //click on location in account drive app suite ddlb
        // cy.get('[role="option"]').contains('Location')
        //     .should('exist').should('be.visible')
        //     .click()
        // cy.wait(3000);

        // //click on MSO in account drive app suite ddlb
        // cy.get('.d-nav-item dx-template-wrapper dx-item-content dx-list-item-content').contains('MSO')
        //     .should('exist').should('be.visible')
        //     .click()
        // cy.wait(1000);









        //click on settings icon to show settings pop up
        cy.get('#settingsPopup')
            .should('exist').should('be.visible')
            .click()
        cy.wait(2000);

        //click on logout button
        cy.get('.d-con-settings-user-profile-log-out')
            .should('exist').should('be.visible')
            .click()
        //click on Yes to confirm logout
        cy.get('.dx-toolbar-center').contains('Yes')
            .should('exist').should('be.visible')
            .click()

    });

});  