export class LoginPage{
//    most basic way
   loginPage_username='#uname'
   loginPage_Password='#pwd'
   loginPage_loginButton='[type="submit"]'



   navigate(url:string){
    cy.visit(url)
   }
   enterUsername(username:string){
    cy.get(this.loginPage_username).type(username)
   }
   enterPassword(password:string){
    cy.get(this.loginPage_Password).type(password)
   }
   clickLogin(){
    cy.get(this.loginPage_loginButton).click()
   }
}