
import {LoginPage} from "../pages/login_Page.cy"
// here i implement the grouping concept

describe('all login tests',function(){
    const loginPage=new LoginPage()


     this.beforeEach(()=>{
        loginPage.navigate('https://trytestingthis.netlify.app/');
     })

it('login with valid credentials',()=>{

    loginPage.navigate('https://trytestingthis.netlify.app/')
    loginPage.enterUsername('test')
    loginPage.enterPassword('test')
    loginPage.clickLogin()
    cy.contains('Login Successful')
    cy.contains('here').click()
    
})
// login with invalid credentials

it('login with invalid username',()=>{

    loginPage.navigate('https://trytestingthis.netlify.app/')
    loginPage.enterUsername('test11')
    loginPage.enterPassword('test')
    loginPage.clickLogin()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.be.equal('Wrong Credentials! Try again!')
    })
    // cy.contains('Login Successful')
    // cy.contains('here').click()
    // cy.visit('https://trytestingthis.netlify.app/')
    // cy.get('#uname').type('test')
    // cy.get('#pwd').type('test')
    // cy.get('[type="submit"]').click()
})

// 3rd test 

it('login with invalid password',()=>{
    loginPage.navigate('https://trytestingthis.netlify.app/')
    loginPage.enterUsername('test')
    loginPage.enterPassword('test1')
    loginPage.clickLogin()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.be.equal('Wrong Credentials! Try again!')
    })
    // cy.contains('Login Successful')
    // cy.contains('here').click()
})

})





