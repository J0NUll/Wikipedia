import PrefixPage from '../pageobjects/Prefix.page.js'

describe('Prefix page', () => {
    it('should check h1', async () => {
        await PrefixPage.open()
        await expect(PrefixPage.heading).toBeExisting()
        

    
    })
})


