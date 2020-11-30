Cypress.Commands.add('login',(phone, password) => {
    if(phone) cy.get('input[name=mobile_phone]').click().type(phone)
    if(password) cy.get('input[name=password]').click('left').type(password)
    cy.get('input[name=commit]').click()
})