import Page from "./Page";

class DropDownPage extends Page {
    public open () {
        return super.open('dropdown');
    }

    private get title() {
        return $('#content > div > h3');
    }

    private get dropdown() {
        return $('#dropdown');
    }

    private get placeholder() {
        return $('#dropdown > option:nth-child(1)');
    }

    private get option1() {
        return $('#dropdown > option:nth-child(2)');
    }

    private get option2() {
        return $('#dropdown > option:nth-child(3)');
    }

    async getTitle(): Promise<string> {
        await this.title.waitForDisplayed();
        return await this.title.getText();
    }

    async getPlaceholder(): Promise<string> {
        await this.placeholder.waitForDisplayed();
        return await this.placeholder.getText();
    }

    async clickDropdown() {
        await this.dropdown.waitForDisplayed();
        await this.dropdown.click();
    }

    async clickOption1() {
        await this.option1.waitForDisplayed();
        await this.option1.click();
    }

    async clickOption2() {
        await this.option2.waitForDisplayed();
        await this.option2.click();
    }

    async isOption1Selected() {
        let isSelected = await this.option1.getAttribute('selected');
        expect(isSelected).toEqual('true');
    }

    async isOption2Selected() {
        let isSelected = await this.option2.getAttribute('selected');
        expect(isSelected).toEqual('true');
    }
}

export default new DropDownPage();