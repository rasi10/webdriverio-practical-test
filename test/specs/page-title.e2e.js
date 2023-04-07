const landingPage = require('../pageobjects/landing.page')

describe('Test suite page title', () => {
  beforeEach("navigate to webpage", async () => {
    await landingPage.open()
  });

  it('should verify the page title', async () => {
    const title = await browser.getTitle();
    expect(title).toEqual('A million more | Volvo Cars - International');
  });

})

