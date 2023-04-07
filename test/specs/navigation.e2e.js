const landingPage = require('../pageobjects/landing.page')

describe('Test suite Menu link', () => { 
    beforeEach("navigate to webpage", async () => {
        await landingPage.open()        
    });

    it("Should test that the links on link Menu exist", async () => {
        await landingPage.modalAcceptButton.click();     
        await landingPage.menuButton.click();                
        await expect(landingPage.buyButton).toBeExisting();
        await expect(landingPage.ownButton).toBeExisting();
        await expect(landingPage.aboutButton).toBeExisting();
        await expect(landingPage.exploreButton).toBeExisting();
        await expect(landingPage.moreButton).toBeExisting();
    });    
})

