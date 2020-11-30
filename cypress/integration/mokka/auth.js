describe('Login test', ()=>{
    before(()=>{
        cy.visit(Cypress.env('baseUrl'))
    })

    it('Empty username and password', ()=>{
        cy.login(null, null)
        cy.get('form').should('contain', 'Неправильный логин или пароль')
    })

    it('Incorrect username and password', ()=>{
        cy.login('7777777777', 'password')
        cy.get('form').should('contain', 'Неправильный логин или пароль')
    })
})