describe('Trying to implement drag-n-drop', () => {

    before(() => {
        Cypress.config('baseUrl', null);

        cy.visit('https://angular-oxkc7l-zirwfs.stackblitz.io')
        .url().should('contain', 'angular')
        .get('h2').should('contain', 'To do');
    });

    it('should work following this example https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/testing-dom__drag-drop/cypress/integration/drag_n_drop_spec.js', function() {
        cy.viewport(1000, 1000);
        cy.get('#cdk-drop-list-0 > :nth-child(1)')
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: 20, clientY: 0 })
        .trigger('mouseup', {force: true});
        cy.get('#cdk-drop-list-1').should('contain', 'Get to work');
    });

    it('should work following this example https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/testing-dom__drag-drop/cypress/integration/drag_n_drop_spec.js', function() {
        cy.viewport(1000, 1000);
        cy.get('#cdk-drop-list-0 > :nth-child(1)')
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: 300, clientY: 200 })
        .trigger('mouseup', {force: true});
        cy.get('#cdk-drop-list-1').should('contain', 'Get to work');
    });

    it('Should work, based on this https://stackoverflow.com/a/54119137/3694288', function() {

        // const dataTransfer = new DataTransfer;

        cy.get('#cdk-drop-list-0 > :nth-child(1)')
            .trigger('dragstart', { dataTransfer: { setData: () => {} } });

        cy.get('#cdk-drop-list-1')
            .trigger('drop', { dataTransfer: { setData: () => {} } });

        cy.get('#cdk-drop-list-0 > :nth-child(1)')
            .trigger('dragend');

        cy.get('#cdk-drop-list-1').should('contain', 'Get to work');
    });


    // it('Should work, with this library https://github.com/4teamwork/cypress-drag-drop', () => {
    //     cy.get('#cdk-drop-list-0 > :nth-child(1)')
    //         .drag('#cdk-drop-list-1');

    //     cy.get('#cdk-drop-list-1').should('contain', 'Get to work');
    // });

    it('Should work with another', () => {

        const dataTranferMock = { setData: () => {}, setDragImage: () => {} };
        cy.get('#cdk-drop-list-0 > :nth-child(1)').trigger('dragstart', {
            dataTransfer: dataTranferMock
        });
        cy.get('#cdk-drop-list-1 > :nth-child(1)').trigger('drop');
        cy.get('#cdk-drop-list-1').should('contain', 'Get to work');
    });

});
