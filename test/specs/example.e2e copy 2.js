const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application2', () => {  

    it('should login with valid credentials2', async () => {
        await LoginPage.open()
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
    })

    it('should login with valid credentials 22', async () => {
        await LoginPage.open()
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
    })

    it('should login with valid credentials 32', async () => {
        await LoginPage.open()
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
    })
   
})

