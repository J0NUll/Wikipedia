import PrefixPage from '../pageobjects/Prefix.page.js'

describe('Prefix page', () => {
    it('should check h1', async () => {
        await PrefixPage.open()
        await expect(PrefixPage.heading).toBeExisting()


        describe('Prefix page', () => {
        it('Check that the prefix page repsonds to click in the appropriate webpage', async () => {
            await PrefixPage.open()
    
            await LoginPage.login('tomsmith', 'SuperSecretPassword!');
            await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure');
            
            await SecurePage.logout();
            await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login');
        });
        

    
    })
})

});
