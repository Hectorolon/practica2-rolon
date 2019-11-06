describe('Navegando por el sitio',function() {
    it('Navegación', function() {
        cy.visit('http://practica2-v.herokuapp.com/')
    })
    it('Campo fecha no deberia existir #1', function() {
        cy.get('table').contains('tr', 'Fecha').should('not.exist')
    })
    it('Campo telefono debe existir #2', function() {
        cy.get('table').contains('tr', 'Teléfono').should('exist')
    })
    it('Borrar registro #3', function() {
        cy.get('table').contains('Borrar').click()
    })

})
