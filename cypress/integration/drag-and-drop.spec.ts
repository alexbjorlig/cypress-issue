it('🔥 Thx to Stackoverflow, drag and drop support now works 🔥', () => {
    cy.visit('')
    .wait(4000)
    .url().should('contain', 'angular')
    .get('h2').should('contain', 'To do');

    cy.drag('#cdk-drop-list-0 > :nth-child(1)', '#cdk-drop-list-1')
    .should('contain', 'Get to work');
 });
