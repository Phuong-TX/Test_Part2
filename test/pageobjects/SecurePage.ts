import { $ } from '@wdio/globals'
import Page from './Page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('#flash');
    }

    public async getFlashAlertTitle(): Promise<string> {
        return await this.flashAlert.getText();
    }
}
export default new SecurePage();
