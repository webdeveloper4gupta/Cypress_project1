describe('read write file tests',()=>{
   
     beforeEach(function(){
        // here i store the data of example.json in data variable
        cy.fixture('example.json').as('data')
     })
    it('read file using fixture',function(){
        cy.fixture('example.json').its('name').should('eq','cypress')
        // to print any thing on thwe screenname and email
        // here from the data variable i used to the 
        cy.log(this.data.name)
        cy.log(this.data.email)
    })
        // read file using the readFile()
    it('read file',function(){
        cy.readFile('./cypress/fixtures/example.json').its('name').should('eq','cypress')
    })

// here i write the it block for the write file
    it('write file',function(){
        cy.writeFile('sample.txt','Hello, we are learning cypress')
        cy.writeFile('sample.txt',"welcome to code world")
        cy.writeFile('sample.txt','\nHello I am Raghav',{flag:'a+'})
        cy.readFile('sample.txt').should('contain','welcome')
    })

})