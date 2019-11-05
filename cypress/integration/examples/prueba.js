describe('Navegando por el sitio de la Universidad de Colima',function() {
 it('Navegación por portal ucol', function() {
 cy.visit('https://www.ucol.mx')
 })
 it('Búsqueda en portal ucol', function() {
 cy.get('#q').click()
 cy.get('#q')
 .type('plataforma educ').should('have.value',
'plataforma educ')
cy.get('.form-search-ucol').submit()
cy.contains('menos basura en colima').click()
 })

})
