import { $ } from '@wdio/globals'
import Page from './Page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    private get inputUsername () {
        return $('#username');
    }

    private get inputPassword () {
        return $('#password');
    }

    private get btnLogin () {
        return $('#login > button');
    }

    async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();

