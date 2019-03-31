import { drag } from './drag-support';


// add new command to the existing Cypress interface
declare global {
    namespace Cypress {

        interface Chainable {
            drag: (dragSelector: string, dropSelector: string) => Chainable;
        }
    }
}
Cypress.Commands.add('drag', drag);
