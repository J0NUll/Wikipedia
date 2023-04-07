
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PrefixPage extends Page {
    /**
     * define selectors using getter methods
     */
    get heading () {
        return $('#firstHeading');
    }

    get btntalk() {
        return $('#ca-talk');
    }
    async logout() {
        await this.btntalk.click();
    }

    

    


    open () {
        return super.open('Prefix');
    }
}

export default new PrefixPage();
