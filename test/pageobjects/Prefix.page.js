
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

    

    

    


    open () {
        return super.open('Prefix');
    }
}

export default new PrefixPage();
